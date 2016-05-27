//
//     is.js - 1.0.0
//     Minimalistic check library
//     Pwn <hi@pwn.buzz>
//

( function ( root , factory ) {

  if ( typeof define === 'object' && define.amd ) {

    // Define `is` as an annonymous AMD module if AMD loader presents.
    define( factory )

  } else if ( typeof module === 'object' && module.exports ) {

    // Define `is` as a Node module if we are in Node.
    module.exports = factory()

  } else {

    // Otherwise define `is` as a browser global.
    ( function () {

      var is = factory()
      var predecessor = root.is

      root.is = is

      //
      // __is.noConflict()__
      //
      // Restore `root.is` to its previous owner and returns `is` export.
      // The `noConflict` method only presents if `is` is defined as a browser global.
      //
      is.noConflict = function noConflict() {
        root.is = predecessor
        return is
      }

    } )()

  }

} )( this , function factory() {

  var is
  var util
  var proto = {}


  // Safe references in case of overwrite.
  var nativeIsPrototypeOf = Object.prototype.isPrototypeOf
  var nativeHasOwnProperty = Object.prototype.hasOwnProperty


  // `Object.keys` ponyfill.
  var ownKeys = Object.keys || ( function ( dontEnums ) {

    var dontEnumsLength = dontEnums.length
    var hasDontEnumBug = !{ toString : null }.propertyIsEnumerable( 'toString' )

    return function ownKeys( object ) {

      var key
      var keys = []
      var index

      if ( object === null || object === void 0 ) {
        throw new TypeError( 'ownKeys called on non-object' )
      }

      for ( key in object ) {
        if ( nativeHasOwnProperty.call( object , key ) ) {
          keys.push( key )
        }
      }

      // Fix IE < 9 _JScript DontEnum Bug_.
      if ( hasDontEnumBug ) {
        for ( index = 0 ; index < dontEnumsLength ; index += 1 ) {
          key = dontEnums[ index ]
          if ( nativeHasOwnProperty.call( object , key ) ) {
            keys.push( key )
          }
        }
      }

      return keys

    }

  } )( [

    // These properties are marked as _DontEnum_ in IE < 9.
    // They will never show up in `for...in` loops nor pass `propertyIsEnumerable` check.
    'toString' ,
    'toLocaleString' ,
    'valueOf' ,
    'isPrototypeOf' ,
    'hasOwnProperty' ,
    'propertyIsEnumerable' ,
    'constructor'

  ] )


  //
  // There're two type of checks in `is.js`:
  //
  // - is.predicate( ...args )      // positive check
  // - is.not.predicate( ...args )  // negative check
  //
  // All check methods, or _predicates_ in `is.js` terminology, are defined on
  // the `proto` object, which both `is` and `is.not` inherits from.
  //

  if ( Object.create ) {

    is = Object.create( proto )
    is.not = Object.create( proto )

  } else {

    ( function () {

      var Surrogate = function Surrogate() {} // eslint-disable-line no-empty-function
      Surrogate.prototype = proto

      is = new Surrogate()
      is.not = new Surrogate()

    } )()

  }


  //
  // The utility belt, contains:
  //
  //    - General purpose helper functions.
  //    - Method that adds new predicates.
  //

  util = {

    //
    // __util.getTag( value:any )__
    //
    // Get the class, or _tag_ in `is.js` terminology, of any given value.
    //
    getTag : ( function () {

      var reTag = /^\[object\s(\w+)\]$/
      var toString = Object.prototype.toString

      return function getTag( value ) {
        // The tag is normalized(to lowercase) for easier comparision.
        return toString.call( value ).match( reTag )[ 1 ].toLowerCase()
      }

    } )() ,


    //
    // __util.addPredicate( name:string , predicate:function )__
    //
    // Add new checks(or _predicates_ in `is.js` terminology).
    //
    addPredicate : function addPredicate( name , predicate ) {

      // Filter out reserved names.
      if ( /^(noConflict|not|use)$/.test( name ) ) {
        return false
      }

      if ( typeof predicate !== 'function' ) {
        return false
      }

      // We wrap the predicate in a delegate method and adds that delegate to
      // the `proto` object, so that the predicate method is accessible(via delegate)
      // in both `is` and `is.not`. The delegate also handles positive/negative
      // cases on behave of the predicate.
      proto[ name ] = function predicateDelegate() {
        var result = predicate.apply( null , arguments )
        return this === is.not ? !result : !!result // results are coerced to boolean for consistency
      }

      return true

    }

  }


  //
  // __is.use( bundle:function )__
  //
  // Define new _bundles_(collection of _predicates_).
  //

  is.use = function use( bundle ) {
    if ( typeof bundle === 'function' ) {

      //
      // `bundle` takes two parameters(order matters):
      //
      //    - `util`: The utility belt.
      //    - `is`: The `is` export.
      //
      // The `util` and `is` export is included to allow bundles to be
      // distributed as standalone modules, e.g:
      //
      //    ```js
      //    module.exports = function bundle( util , is ) {
      //      util.addPredicate( 'ok' , function ( value ) {
      //        return is.truthy( value )
      //      } )
      //    }
      //    ```
      //
      // Then in client code:
      //
      //    ```js
      //    is.use( require( 'path/to/bundle' ) )
      //    ```
      //

      bundle( util , is )

    }
  }


  //
  // # CORE BUNDLES
  // Predicates shipped with `is.js`, packaged in various bundles.
  //

  // ### bundle:nil
  is.use( function nilBundle( util ) {

    //
    // __is.null( val:any )__
    //
    // Checks whether given value is `null`.
    //
    util.addPredicate( 'null' , function isNull( value ) {
      return value === null
    } )

    //
    // __is.undefined( val:any )__
    //
    // Checks whether given value is `undefined`.
    //
    util.addPredicate( 'undefined' , function isUndefined( value ) {
      return value === void 0
    } )

    //
    // __is.nil( val:any )__
    //
    // Checks whether given value is either `null` or `undefined`.
    //
    util.addPredicate( 'nil' , function isNil( value ) {
      return value === null || value === void 0
    } )

  } )


  // ### bundle:number
  is.use( function numberBundle( util ) {

    //
    // __is.number( val:any )__
    //
    // Checks whether given value is a number.
    //
    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )

    //
    // __is.nan( val:any )__
    //
    // Checks whether given value is `NaN`.
    //
    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )

    //
    // __is.odd( num:number )__
    //
    // Checks whether given value is an odd number.
    //
    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.integer( number ) && number % 2 === 1
    } )
    //
    // __is.even( num:number )__
    //
    // Checks whether given value is an even number.
    //
    util.addPredicate( 'even' , function isEven( number ) {
      return is.integer( number ) && number % 2 === 0
    } )

    //
    // __is.finite( num:number )__
    //
    // Checks whether given value is a finite number.
    //
    if ( Number.isFinite ) {
      util.addPredicate( 'finite' , Number.isFinite )
    } else {
      util.addPredicate( 'finite' , function isFiniteNumber( number ) {
        return is.number( number ) && isFinite( number )
      } )
    }
    //
    // __is.infinite( num:number )__
    //
    // Checks whether given value is an infinite number, i.e, +∞ or -∞.
    //
    util.addPredicate( 'infinite' , function isInfinite( number ) {
      return number === +1 / 0 || number === -1 / 0
    } )

    //
    // __is.integer( num:number )__
    //
    // Checks whether given value is an integer.
    //
    if ( Number.isInteger ) {
      util.addPredicate( 'integer' , Number.isInteger )
    } else {
      util.addPredicate( 'integer' , function isInteger( number ) {
        return is.finite( number ) && Math.floor( number ) === number
      } )
    }

    //
    // __is.safeInteger( num:number )__
    //
    // Checks whether given value is a safe integer.
    //
    if ( Number.isSafeInteger ) {
      util.addPredicate( 'safeInteger' , Number.isSafeInteger )
    } else {
      ( function () {

        var MAX = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
        var MIN = Number.MIN_SAFE_INTEGER || -MAX

        util.addPredicate( 'safeInteger' , function isSafeInteger( number ) {
          return is.integer( number ) && ( number >= MIN && number <= MAX )
        } )

      } )()
    }

  } )


  // ### bundle:string
  is.use( function stringBundle( util ) {

    util.addPredicate( 'string' , function isString( value ) {
      return typeof value === 'string'
    } )

    util.addPredicate( 'emptyString' , function isEmptyString( string ) {
      return is.string( string ) && /^\s*$/.test( string )
    } )

    if ( String.prototype.includes ) {
      util.addPredicate( 'stringIncludes' , function isStringIncludes( string , substring ) {
        return is.string( string ) && string.includes( substring )
      } )
    } else {
      util.addPredicate( 'stringIncludes' , function isStringIncludes( string , substring ) {
        return is.string( string ) && string.indexOf( substring ) !== -1
      } )
    }

    if ( String.prototype.startsWith ) {

      util.addPredicate( 'startsWith' , function isStartsWith( string , prefix ) {
        return is.string( string ) && string.startsWith( prefix )
      } )
      util.addPredicate( 'endsWith' , function isEndsWith( string , suffix ) {
        return is.string( string ) && string.endsWith( suffix )
      } )

    } else {

      ( function ( makePredicate ) {

        util.addPredicate( 'startsWith' , makePredicate() )
        util.addPredicate( 'endsWith' , makePredicate( true ) )

      } )( function makePredicate( testSuffix ) {

        return function predicateDelegate( string , affix ) {

          var index
          var offset
          var affixLength
          var stringLength

          if ( is.not.string( string ) ) {
            return false
          }

          affix = String( affix )

          affixLength = affix.length
          stringLength = string.length

          if ( affixLength > stringLength ) {
            return false
          }

          offset = testSuffix ? stringLength - affixLength : 0

          for ( index = 0 ; index < affixLength ; index += 1 ) {
            if ( string.charCodeAt( offset + index ) !== affix.charCodeAt( index ) ) {
              return false
            }
          }

          return true

        }

      } )

    }

  } )


  // ### bundle:boolean
  is.use( function booleanBundle( util ) {

    util.addPredicate( 'boolean' , function isBoolean( value ) {
      return value === true || value === false
    } )

    util.addPredicate( 'true' , function isTrue( value ) {
      return value === true
    } )
    util.addPredicate( 'false' , function isFalse( value ) {
      return value === false
    } )

    util.addPredicate( 'truthy' , function isTruthy( value ) {
      return !!value
    } )
    util.addPredicate( 'falsy' , function isFalsy( value ) {
      return !value
    } )

  } )


  // ### bundle:primitive
  is.use( function primitiveBundle( util ) {

    util.addPredicate( 'primitive' , function isPrimitive( value ) {
      return is.nil( value ) || is.number( value ) || is.string( value ) || is.boolean( value )
    } )

  } )


  // ### bundle:type
  is.use( function typeBundle( util ) {

    util.addPredicate( 'sameType' , function isSameType( value , other ) {

      var typeOfValue = typeof value
      var typeOfOther = typeof other

      return typeOfValue === typeOfOther && util.getTag( value ) === util.getTag( other )

    } )

    util.addPredicate( 'instanceOf' , function isInstanceOf( object , constructor ) {
      return is[ 'function' ]( constructor ) && object instanceof constructor
    } )

    util.addPredicate( 'prototypeOf' , function isPrototypeOf( prototype , object ) {
      return is.nil( prototype ) && nativeIsPrototypeOf.call( prototype , object )
    } )

  } )


  // ### bundle:equality
  is.use( function equalityBundle( util ) {

    util.addPredicate( 'equal' , function isEqual( value , other ) {

      if ( is.not.sameType( value , other ) ) {
        return false
      }

      if ( is.nan( value ) || is.nan( other ) ) {
        return is.nan( value ) && is.nan( other )
      }

      return value === other

    } )

    util.addPredicate( 'deepEqual' , function isDeepEqual( value , other ) {

      if ( is.not.sameType( value , other ) ) {
        return false
      }

      if ( is.primitive( value ) ) {
        return is.equal( value , other )
      }

      if ( is.array( value ) ) {

        if ( value.length !== other.length ) {
          return false
        }

        return ( function () {

          var index
          var length

          for ( index = 0 , length = value.length ; index < length ; index += 1 ) {
            if ( is.not.deepEqual( value[ index ] , other[ index ] ) ) {
              return false
            }
          }

          return true

        } )()

      }

      return ( function () {

        var key
        var keys
        var index
        var length

        keys = ownKeys( value )
        length = keys.length

        if ( length !== ownKeys( other ).length ) {
          return false
        }

        for ( index = 0 ; index < length ; index += 1 ) {
          key = keys[ index ]
          if ( !nativeHasOwnProperty.call( other , key ) || is.not.deepEqual( value[ key ] , other[ key ] ) ) {
            return false
          }
        }

        return true

      } )()

    } )

  } )


  // ### bundle:object
  is.use( function objectBundle( util ) {

    util.addPredicate( 'object' , function isObject( value ) {
      return is[ 'function' ]( value ) || is.not.primitive( value )
    } )

    util.addPredicate( 'emptyObject' , function isEmptyObject( object ) {
      return is.object( object ) && is.emptyArray( ownKeys( object ) )
    } )

    util.addPredicate( 'ownPropertyDefined' , function isOwnPropertyDefined( object , key ) {
      return is.not.nil( object ) && nativeHasOwnProperty.call( object , key )
    } )
    util.addPredicate( 'propertyDefined' , function isPropertyDefined( object , key ) {

      if ( is.nil( object ) ) {
        return false
      }

      if ( is.primitive( object ) ) {
        object = Object( object )
      }

      return key in object

    } )

  } )


  // ### bundle:array
  is.use( function arrayBundle( util ) {

    if ( Array.isArray ) {
      util.addPredicate( 'array' , Array.isArray )
    } else {
      util.addPredicate( 'array' , function isArray( value ) {
        return util.getTag( value ) === 'array'
      } )
    }

    util.addPredicate( 'arrayLike' , function isArrayLike( value ) {

      if ( is.nil( value ) || is[ 'function' ]( value ) ) {
        return false
      } else {
        return is.safeInteger( value.length ) && value.length >= 0
      }

    } )

    util.addPredicate( 'emptyArray' , function isEmptyArray( array ) {
      return is.array( array ) && array.length === 0
    } )

    ; ( function ( makePredicate ) { // eslint-disable-line semi-spacing

      util.addPredicate( 'arrayIncludes' , makePredicate() )
      util.addPredicate( 'arrayDeepIncludes' , makePredicate( true ) )

    } )( function makePredicate( deep ) {

      var eql = deep ? 'deepEqual' : 'equal'

      return function predicateDelegate( array , member ) {

        var index
        var length

        if ( is.not.arrayLike( array ) ) {
          return false
        }

        length = array.length

        for ( index = 0 ; index < length ; index += 1 ) {
          if ( is[ eql ]( array[ index ] , member ) ) {
            return true
          }
        }

        return false

      }

    } )

  } )


  // ### bundle:function
  is.use( function functionBundle( util ) {

    //
    // __is.function( val:any )__
    //
    // Checks whether given value is a function.
    //
    util.addPredicate( 'function' , function isFunction( value ) {
      return typeof value === 'function'
    } )

  } )


  // ### bundle:date
  is.use( function dateBundle( util ) {

    //
    // __is.date( val:any )__
    //
    // Checks whether given value is a `Date` object.
    //
    util.addPredicate( 'date' , function isDate( value ) {
      return util.getTag( value ) === 'date'
    } )

  } )


  // ### bundle:error
  is.use( function errorBundle( util ) {

    //
    // __is.error( val:any )__
    //
    // Checks whether given value is an `Error` object.
    //
    util.addPredicate( 'error' , function isError( value ) {
      return util.getTag( value ) === 'error'
    } )

  } )


  // ### bundle:regex
  is.use( function regexBundle( util ) {

    //
    // __is.regex( val:any )__
    //
    // Checks whether given value is a `RegExp` object.
    //
    util.addPredicate( 'regex' , function isRegExp( value ) {
      return util.getTag( value ) === 'regexp'
    } )

  } )

  return is

} )
