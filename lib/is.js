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
  var proto = {}


  // `Object.keys` ponyfill
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
        if ( hasOwnProperty.call( object , key ) ) {
          keys.push( key )
        }
      }

      // fix IE < 9 JScript DontEnum Bug
      if ( hasDontEnumBug ) {
        for ( index = 0 ; index < dontEnumsLength ; index += 1 ) {
          key = dontEnums[ index ]
          if ( hasOwnProperty.call( object , key ) ) {
            keys.push( key )
          }
        }
      }

      return keys

    }

  } )( [

    // these properties are marked as [[DontEnum]] in IE < 9
    // they will never show up in `for...in` loops nor pass `propertyIsEnumerable` check
    'toString' ,
    'toLocaleString' ,
    'valueOf' ,
    'isPrototypeOf' ,
    'hasOwnProperty' ,
    'propertyIsEnumerable' ,
    'constructor'

  ] )


  //
  // there're two type of checks in `is.js`:
  //
  //    is.predicate( ...args )     // positive check
  //    is.not.predicate( ...args ) // negative check
  //
  // all check methods, or predicates, are defined on the `proto` object
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

    // util.addPredicate( name:string , predicate:function )
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

      // we wrap the predicate in a delegate method and adds that delegate to the `proto` object
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

  // [[bundle:nil]]
  is.use( function nilBundle( util ) {

    // is.null( val:any )
    // checks whether given value is `null`
    util.addPredicate( 'null' , function isNull( value ) {
      return value === null
    } )

    // is.undefined( val:any )
    // checks whether given value is `undefined`
    util.addPredicate( 'undefined' , function isUndefined( value ) {
      return value === void 0
    } )

    // is.nil( val:any )
    // checks whether given value is either `null` or `undefined`
    util.addPredicate( 'nil' , function isNil( value ) {
      return value === null || value === void 0
    } )

  } )


  // [[bundle:number]]
  is.use( function numberBundle( util ) {

    // is.number( val:any )
    // checks whether given value is a number
    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )

    // is.nan( val:any )
    // checks whether given value is NaN
    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )

    // is.odd( num:number )
    // checks whether given value is an odd number
    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.integer( number ) && number % 2 === 1
    } )
    // is.even( num:number )
    // checks whether given value is an even number
    util.addPredicate( 'even' , function isEven( number ) {
      return is.integer( number ) && number % 2 === 0
    } )

    // is.finite( num:number )
    // checks whether given value is a finite number
    if ( Number.isFinite ) {
      util.addPredicate( 'finite' , Number.isFinite )
    } else {
      util.addPredicate( 'finite' , function isFiniteNumber( number ) {
        return is.number( number ) && isFinite( number )
      } )
    }
    // is.infinite( num:number )
    // checks whether given value is an infinite number, i.e, +∞ or -∞
    util.addPredicate( 'infinite' , function isInfinite( number ) {
      return number === +1 / 0 || number === -1 / 0
    } )

    // is.integer( num:number )
    // checks whether given value is an integer
    if ( Number.isInteger ) {
      util.addPredicate( 'integer' , Number.isInteger )
    } else {
      util.addPredicate( 'integer' , function isInteger( number ) {
        return is.finite( number ) && Math.floor( number ) === number
      } )
    }

    // is.safeInteger( num:number )
    // checks whether given value is a safe integer
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
      return is.object( object ) && is.emptyArray( ownKeys( object ) )
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

        var keys = ownKeys( value )

        if ( keys.length !== ownKeys( other ).length ) {
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
