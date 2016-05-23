//
// is.js
// an extensible check library
// Pwn <hi@pwn.buzz>
//

( function ( root , factory ) {

  if ( typeof define === 'object' && define.amd ) {

    // define `is` as an annonymous AMD module
    define( factory )

  } else if ( typeof module === 'object' && module.exports ) {

    // define `is` as a Node module
    module.exports = factory()

  } else {

    // otherwise define `is` as a browser global
    ( function () {

      var is = factory()
      var predecessor = root.is

      root.is = is

      // is.noConflict(): object
      // restore `root.is` to its previous owner and returns `is` export
      // the `noConflict` method only presents if `is` is defined as a browser global
      is.noConflict = function noConflict() {
        root.is = predecessor
        return is
      }

    } )()

  }

} )( this , function factory() {

  var is
  var util
  var proto = Object.create( null )

  //
  // there're two type of checks in `is.js`:
  //
  //    is.predicate( ...args ): boolean      // positive check
  //    is.not.predicate( ...args ): boolean  // negative check
  //
  // all check methods, or predicates, are defined on the `proto` object
  //

  is = Object.create( proto )
  is.not = Object.create( proto )


  //
  // the utility belt, contains:
  //
  //    - general purpose helper functions
  //    - method that adds new predicates
  //

  util = {

    // util.getTag( value:any ): string
    // get the class, or tag in `is.js` terminology, of any given value
    getTag : ( function () {

      var reTag = /^\[object\s(\w+)\]$/
      var toString = Object.prototype.toString

      return function getTag( value ) {
        // the tag is normalized(to lowercase) for easier comparision
        return toString.call( value ).match( reTag )[ 1 ].toLowerCase()
      }

    } )() ,

    // util.addPredicate( name:string , predicate:function ): boolean
    // add new checks(or predicates in `is.js` terminology)
    addPredicate : function addPredicate( name , predicate ) {

      // `noConflict`, `not` and `use` are reserved names
      if ( /^(noConflict|not|use)$/.test( name ) ) {
        return false
      }

      // and the predicate must be a function
      if ( typeof predicate !== 'function' ) {
        return false
      }

      // we wrap the predicate in a delegate method
      // and adds that delegate to the `proto` object
      // so that the predicate method is accessible(via delegate) in both `is` and `is.not`
      // the delegate also handles positive/negative cases on behave of the predicate
      proto[ name ] = function predicateDelegate() {
        var result = predicate.apply( null , arguments )
        return this === is.not ? !result : !!result // results are coerced to boolean for consistency
      }

      return true

    }

  }


  //
  // is.use( bundle:function ): void
  // defines a new bundle(collection of predicates)
  //

  is.use = function use( bundle ) {
    if ( typeof bundle === 'function' ) {

      //
      // `bundle` takes two parameters(order matters):
      //
      //    - `util`: the utility belt
      //    - `is`: the `is` export
      //
      // the `util` and `is` export is included to allow bundles to be
      // distributed as standalone modules, e.g:
      //
      //    module.exports = function bundle( util , is ) {
      //      util.addPredicate( 'ok' , function ( value ) {
      //        return is.truthy( value )
      //      } )
      //    }
      //
      // then in client code:
      //
      //    is.use( require( 'path/to/bundle' ) )
      //

      bundle( util , is )

    }
  }


  //
  // core bundles
  // `is.js` default predicates, packaged in various bundles
  //

  // bundle:nil
  is.use( function nilBundle( util ) {

    util.addPredicate( 'null' , function isNull( value ) {
      return value === null
    } )

    util.addPredicate( 'undefined' , function isUndefined( value ) {
      return value === void 0
    } )

    util.addPredicate( 'nil' , function isNil( value ) {
      return is.null( value ) || is.undefined( value )
    } )

  } )

  // bundle:number
  is.use( function numberBundle( util ) {

    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )

    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )

    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.integer( number ) && number % 2 === 1
    } )
    util.addPredicate( 'even' , function isEven( number ) {
      return is.integer( number ) && number % 2 === 0
    } )

    if ( Number.isFinite ) {
      util.addPredicate( 'finite' , Number.isFinite )
    } else {
      util.addPredicate( 'finite' , function isFiniteNumber( number ) {
        return is.number( number ) && isFinite( number )
      } )
    }
    util.addPredicate( 'infinite' , function isInfinite( number ) {
      return number === +1 / 0 || number === -1 / 0
    } )

    if ( Number.isInteger ) {
      util.addPredicate( 'integer' , Number.isInteger )
    } else {
      util.addPredicate( 'integer' , function isInteger( number ) {
        return is.finite( number ) && Math.floor( number ) === number
      } )
    }

    if ( Number.isSafeInteger ) {
      util.addPredicate( 'safeInteger' , Number.isSafeInteger )
    } else {
      ( function () {

        var MAX = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
        var MIN = Number.MIN_SAFE_INTEGER || -MAX

        util.addPredicate( 'safeInteger' , function isSafeInteger( number ) {
          return is.integer( number ) && number >= MIN && number <= MAX
        } )

      } )()
    }

  } )

  // bundle:string
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

  // bundle:boolean
  is.use( function booleanBundle( util ) {

    util.addPredicate( 'boolean' , function isBoolean( value ) {
      return is.true( value ) || is.false( value )
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

  // bundle:primitive
  is.use( function primitiveBundle( util ) {

    util.addPredicate( 'primitive' , function isPrimitive( value ) {
      return is.nil( value ) || is.number( value ) || is.string( value ) || is.boolean( value )
    } )

  } )

  // bundle:object
  is.use( function objectBundle( util ) {

    util.addPredicate( 'object' , function isObject( value ) {
      return is.function( value ) || is.not.primitive( value )
    } )

    util.addPredicate( 'emptyObject' , function isEmptyObject( object ) {
      return is.object( object ) && is.emptyArray( Object.keys( object ) )
    } )

    util.addPredicate( 'ownPropertyDefined' , function isOwnPropertyDefined( object , key ) {
      return is.not.nil( object ) && object.hasOwnProperty( key )
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

  // bundle:array
  is.use( function arrayBundle( util ) {

    util.addPredicate( 'array' , Array.isArray )

    util.addPredicate( 'arrayLike' , function isArrayLike( value ) {

      if ( is.nil( value ) || is.function( value ) ) {
        return false
      } else {
        return is.safeInteger( value.length ) && value.length >= 0
      }

    } )

    util.addPredicate( 'arguments' , function isArguments( value ) {
      return util.getTag( value ) === 'arguments'
    } )

    util.addPredicate( 'emptyArray' , function isEmptyArray( array ) {
      return is.array( array ) && array.length === 0
    } )

    util.addPredicate( 'arrayIncludes' , function isArrayIncludes( array , member ) {
      return is.array( array ) && array.some( function ( arrayMember ) {
        return is.equal( member , arrayMember )
      } )
    } )
    util.addPredicate( 'arrayDeepIncludes' , function isArrayDeepIncludes( array , member ) {
      return is.array( array ) && array.some( function ( arrayMember ) {
        return is.deepEqual( member , arrayMember )
      } )
    } )

  } )

  // bundle:function
  is.use( function functionBundle( util ) {

    util.addPredicate( 'function' , function isFunction( value ) {
      return typeof value === 'function'
    } )

  } )

  // bundle:date
  is.use( function dateBundle( util ) {

    util.addPredicate( 'date' , function isDate( value ) {
      return util.getTag( value ) === 'date'
    } )

  } )

  // bundle:error
  is.use( function errorBundle( util ) {

    util.addPredicate( 'error' , function isError( value ) {
      return util.getTag( value ) === 'error'
    } )

  } )

  // bundle:regex
  is.use( function regexBundle( util ) {

    util.addPredicate( 'regex' , function isRegExp( value ) {
      return util.getTag( value ) === 'regexp'
    } )

  } )

  // bundle:type
  is.use( function typeBundle( util ) {

    util.addPredicate( 'sameType' , function isSameType( value , other ) {

      var typeOfValue = typeof value
      var typeOfOther = typeof other

      return typeOfValue === typeOfOther && util.getTag( value ) === util.getTag( other )

    } )

    util.addPredicate( 'instanceOf' , function isInstanceOf( object , constructor ) {
      return is.function( constructor ) && object instanceof constructor
    } )

    util.addPredicate( 'prototypeOf' , function isPrototypeOf( prototype , object ) {
      return is.nil( prototype ) && prototype.isPrototypeOf( object )
    } )

  } )

  // bundle:equality
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
        return value.length === other.length && value.every( function ( member , index ) {
          return is.deepEqual( member , other[ index ] )
        } )
      }

      return ( function () {

        var keys = Object.keys( value )

        if ( keys.length !== Object.keys( other ).length ) {
          return false
        }

        return keys.every( function ( key ) {
          return is.deepEqual( value[ key ] , other[ key ] )
        } )

      } )()

    } )

  } )

  return is

} )
