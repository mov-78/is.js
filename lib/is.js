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
      // Restore `root.is` to its previous owner and returns the `is` export.
      // The `noConflict` method only presents when `is` is defined as a browser global.
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
  var nativeToString = Object.prototype.toString
  var nativeHasOwnProperty = Object.prototype.hasOwnProperty


  //
  // __getTag( value )__
  //
  // Get the class, or _tag_ in `is.js` terminology, of any given value.
  //

  var getTag = function getTag( value ) {
    var rawTag = nativeToString.call( value )
    return rawTag.substring( 8 , rawTag.length - 1 ).toLowerCase()
  }


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
  // - __POSITIVE CHECK__: is.predicate( ...args )
  // - __NEGATIVE CHECK__: is.not.predicate( ...args )
  //
  // All checks, or _predicates_ in `is.js` terminology, are defined on
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


  util = {

    //
    // __util.addPredicate( name , predicate )__
    //
    // Add new checks(or _predicates_ in `is.js` terminology).
    //

    addPredicate : function addPredicate( name , predicate ) {

      if ( /^(defaults|noConflict|not|use)$/.test( name ) ) {
        throw new Error( '"' + name + '" is a reserved name' )
      }

      if ( proto[ name ] ) {
        throw new Error( 'predicate "' + name + '" already defined' )
      }

      if ( typeof predicate !== 'function' ) {
        throw new TypeError( 'predicate must be a function' )
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
  // __is.use( bundle )__
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

  //
  // ### bundle:nil
  //

  is.use( function nilBundle( util ) {

    //
    // __is.null( value )__
    //
    // Checks whether given value is `null`.
    //

    util.addPredicate( 'null' , function isNull( value ) {
      return value === null
    } )


    //
    // __is.undefined( value )__
    //
    // Checks whether given value is `undefined`.
    //

    util.addPredicate( 'undefined' , function isUndefined( value ) {
      return value === void 0
    } )


    //
    // __is.nil( value )__
    //
    // Checks whether given value is either `null` or `undefined`.
    //

    util.addPredicate( 'nil' , function isNil( value ) {
      return value === null || value === void 0
    } )

  } )


  //
  // ### bundle:number
  //

  is.use( function numberBundle( util ) {

    //
    // __is.number( value )__
    //
    // Checks whether given value is a number.
    //

    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )


    //
    // __is.nan( value )__
    //
    // Checks whether given value is `NaN`.
    //

    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )


    //
    // __is.odd( number )__
    //
    // Checks whether given value is an odd number.
    //

    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.integer( number ) && number % 2 === 1
    } )


    //
    // __is.even( number )__
    //
    // Checks whether given value is an even number.
    //

    util.addPredicate( 'even' , function isEven( number ) {
      return is.integer( number ) && number % 2 === 0
    } )


    //
    // __is.finite( number )__
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
    // __is.infinite( number )__
    //
    // Checks whether given value is an infinite number, i.e: +∞ or -∞.
    //

    util.addPredicate( 'infinite' , function isInfinite( number ) {
      return number === +1 / 0 || number === -1 / 0
    } )


    //
    // __is.integer( number )__
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
    // __is.safeInteger( number )__
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


  //
  // ### bundle:string
  //

  is.use( function stringBundle( util ) {

    //
    // __is.string( value )__
    //
    // Checks whether given value is a string.
    //

    util.addPredicate( 'string' , function isString( value ) {
      return typeof value === 'string'
    } )


    //
    // __is.emptyString( string )__
    //
    // Checks whether given value is an empty string, i.e, a string with whitespace characters only.
    //

    util.addPredicate( 'emptyString' , function isEmptyString( string ) {
      return is.string( string ) && /^\s*$/.test( string )
    } )


    //
    // __is.substring( substring , string , [offset=0] )__
    //
    // Checks whether one string may be found within another string.
    //

    util.addPredicate( 'substring' , function isSubstring( substring , string , offset ) {

      var length

      if ( getTag( string ) !== 'string' ) {
        throw new TypeError( 'expected string, got ' + getTag( string ) )
      }

      length = string.length
      offset = is.safeInteger( offset ) ? offset : 0

      // Allow negative offsets.
      if ( offset < 0 ) {
        offset = length + offset
      }

      if ( offset < 0 || offset >= length ) {
        throw new RangeError( 'offset out of range' )
      }

      return string.indexOf( substring , offset ) !== -1

    } )

    if ( String.prototype.startsWith && String.prototype.endsWith ) {

      //
      // __is.prefix( prefix , string )__
      //
      // Checks whether `string` starts with `prefix`.
      //

      util.addPredicate( 'prefix' , function isPrefix( prefix , string ) {

        if ( getTag( string ) !== 'string' ) {
          throw new TypeError( 'expected string, got ' + getTag( string ) )
        }

        return string.startsWith( prefix )

      } )


      //
      // __is.suffix( suffix , string )__
      //
      // Checks whether `string` ends with `suffix`.
      //

      util.addPredicate( 'suffix' , function isSuffix( suffix , string ) {

        if ( getTag( string ) !== 'string' ) {
          throw new TypeError( 'expected string, got ' + getTag( string ) )
        }

        return string.endsWith( suffix )

      } )

    } else {

      ( function ( makePredicate ) {

        util.addPredicate( 'prefix' , makePredicate() )
        util.addPredicate( 'suffix' , makePredicate( true ) )

      } )( function makePredicate( suffix ) {

        return function predicate( affix , string ) {

          var index
          var offset
          var affixLength
          var stringLength

          if ( getTag( string ) !== 'string' ) {
            throw new TypeError( 'expected string, got ' + getTag( string ) )
          }

          affix = String( affix )

          affixLength = affix.length
          stringLength = string.length

          if ( affixLength > stringLength ) {
            return false
          }

          offset = suffix ? stringLength - affixLength : 0

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


  //
  // ### bundle:boolean
  //

  is.use( function booleanBundle( util ) {

    //
    // __is.boolean( value )__
    //
    // Checks whether given value is a boolean.
    //

    util.addPredicate( 'boolean' , function isBoolean( value ) {
      return value === true || value === false
    } )

  } )


  //
  // ### bundle:type
  //

  is.use( function typeBundle( util ) {

    //
    // __is.sameType( value , other )__
    //
    // Checks whether given values are of the same type.
    //

    util.addPredicate( 'sameType' , function isSameType( value , other ) {

      var typeOfValue = typeof value
      var typeOfOther = typeof other

      return typeOfValue === typeOfOther && getTag( value ) === getTag( other )

    } )


    //
    // __is.primitive( value )__
    //
    // Checks whether given value is a primitive.
    //

    util.addPredicate( 'primitive' , function isPrimitive( value ) {
      return is.nil( value ) ||
             is.number( value ) ||
             is.string( value ) ||
             is.boolean( value ) ||
             is.symbol( value )
    } )


    //
    // Generate type check predicates for builtin classes:
    //
    // - __is.date( value )__: Checks whether given value is a `Date` object.
    // - __is.error( value )__: Checks whether given value is an `Error` object.
    // - __is.function( value )__: Checks whether given value is a function.
    // - __is.map( value )__: Checks whether given value is a `Map` object.
    // - __is.regex( value )__: Checks whether given value is a `RegExp` object.
    // - __is.set( value )__: Checks whether given value is a `Set` object.
    // - __is.symbol( value )__: Checks whether given value is a symbol.
    //

    ; ( function ( makePredicate , types ) { // eslint-disable-line semi-spacing

      var type
      var index
      var length = types.length

      for ( index = 0 ; index < length ; index += 1 ) {
        type = types[ index ]
        util.addPredicate( type , makePredicate( type ) )
      }

    } )( function makePredicate( type ) {

      return function predicate( value ) {
        return getTag( value ) === type
      }

    } , [ 'date' , 'error' , 'function' , 'map' , 'regexp' , 'set' , 'symbol' ] )

  } )


  //
  // ### bundle:equality
  //

  is.use( function equalityBundle( util ) {

    //
    // __is.equal( value , other )__
    //
    // Checks whether given values are equal, using _SameValueZero_ algorithm.
    //

    util.addPredicate( 'equal' , function isEqual( value , other ) {
      return value === other || ( is.nan( value ) && is.nan( other ) )
    } )


    //
    // __is.deepEqual( value , other )__
    //
    // Checks whether given values are deeply equal, i.e:
    //
    // - If `Type( value ) !== Type( other )`, returns `false`.
    // - For primitives, checks whether they are equal using _SameValueZero_.
    // - For arrays, checks whether they have same set of members, all of
    //   which are deeply equal.
    // - Otherwise, checks whether they have same set of own, enumerable, string
    //   keyed properties, all of which are deeply equal.
    //

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
          if ( !nativeHasOwnProperty.call( other , key ) ||
               is.not.deepEqual( value[ key ] , other[ key ] ) ) {
            return false
          }
        }

        return true

      } )()

    } )

  } )


  //
  // ### bundle:object
  //

  is.use( function objectBundle( util ) {

    //
    // __is.object( value )__
    //
    // Checks whether given value is an object.
    //

    util.addPredicate( 'object' , function isObject( value ) {
      return is.not.primitive( value )
    } )


    //
    // __is.emptyObject( object )__
    //
    // Checks whether given value is an empty object, i.e, an object without
    // any own, enumerable, string keyed properties.
    //

    util.addPredicate( 'emptyObject' , function isEmptyObject( object ) {
      return is.object( object ) && ownKeys( object ).length === 0
    } )


    //
    // __is.propertyDefined( object , keyPath )__
    //
    // Checks whether given property is defined(recursively) on `object`.
    //

    util.addPredicate( 'propertyDefined' , function isPropertyDefined( object , keyPath ) {

      var key
      var keys
      var context

      if ( is.not.string( keyPath ) ) {
        throw new TypeError( 'keyPath must be a string' )
      }

      context = object
      keys = keyPath.split( is.defaults.keyPathSeparator )

      while ( key = keys.shift() ) { // eslint-disable-line no-cond-assign

        if ( is.nil( context ) || !( key in context ) ) {
          return false
        }

        context = context[ key ]

      }

      return true

    } )

  } )


  //
  // ### bundle:array
  //

  is.use( function arrayBundle( util ) {

    //
    // __is.array( value )__
    //
    // Checks whether given value is an array.
    //

    if ( Array.isArray ) {
      util.addPredicate( 'array' , Array.isArray )
    } else {
      util.addPredicate( 'array' , function isArray( value ) {
        return getTag( value ) === 'array'
      } )
    }


    //
    // __is.arrayLikeObject( value )__
    //
    // Checks whether given value is an _array-like_ object.
    //
    // An object is qualified as _array-like_ if it has a property named
    // `length` that is a positive safe integer. As a special case, functions
    // are never qualified as _array-like_.
    //

    util.addPredicate( 'arrayLikeObject' , function isArrayLikeObject( value ) {

      if ( is.primitive( value ) || is[ 'function' ]( value ) ) {
        return false
      } else {
        return is.safeInteger( value.length ) && value.length >= 0
      }

    } )


    //
    // __is.inArray( value , array , [offset=0] , [comparator=is.equal] )__
    //
    // Checks whether given array or array-like object contains certain element.
    //
    // - __value__: The element to search.
    // - __array__: The array or array-like object to search from.
    // - __offset__: The index(inclusive) to search from.
    // - __comparator__: The comparator invoked per element against `value`.
    //
    // The default comparator, which is `is.equal`, can be configured by setting
    // `is.defaults.inArrayComparator` to another comparator function.
    //
    // By default, `is.inArray` skip _holes_ in sparse arrays. This behavior
    // can be turned off by setting `is.defaults.skipHoles` to `false`.
    //

    util.addPredicate( 'inArray' , function isInArray( value , array , offset , comparator ) {

      var index
      var length

      // Only works with genuine arrays or array-like objects.
      if ( is.not.arrayLikeObject( array ) ) {
        throw new TypeError( 'expected array or array-like object, got ' + getTag( array ) )
      }

      if ( is[ 'function' ]( offset ) ) {
        comparator = offset
        offset = 0
      } else {
        offset = is.safeInteger( offset ) ? offset : 0
        comparator = is[ 'function' ]( comparator ) ? comparator : is.defaults.inArrayComparator
      }

      length = array.length

      // Allow negative offsets.
      if ( offset < 0 ) {
        offset = length + offset
      }

      if ( offset < 0 || offset >= length ) {
        throw new RangeError( 'offset out of range' )
      }

      for ( index = offset ; index < length ; index += 1 ) {

        // Skip _holes_ in sparse arrays.
        // Configurable via `is.defaults.skipHoles`.
        if ( is.defaults.skipHoles &&
             !nativeHasOwnProperty.call( array , index ) ) {
          continue
        }

        if ( comparator( value , array[ index ] ) ) {
          return true
        }

      }

      return false

    } )

  } )


  //
  // ### Configuration
  //

  is.defaults = {

    // Default `keyPath` separator.
    keyPathSeparator : '.' ,

    // Whether or not skip holes when iterating over sparse arrays.
    skipHoles : true ,

    // Default comparator for `is.inArray`.
    inArrayComparator : is.equal

  }

  return is

} )
