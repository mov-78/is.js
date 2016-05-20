( function ( root , factory ) {

  if ( typeof define === 'object' && define.amd ) {
    define( factory )
  } else if ( typeof module === 'object' && module.exports ) {
    module.exports = factory()
  } else {
    ( function () {
      var is = factory()
      var predecessor = root.is
      root.is = is
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

  is = Object.create( proto )
  is.not = Object.create( proto )

  is.use = function use( bundle ) {
    if ( typeof bundle === 'function' ) {
      bundle( util )
    }
  }

  util = {
    getTag : ( function () {
      var reTag = /^\[object\s(\w+)\]$/
      var toString = Object.prototype.toString
      return function getTag( value ) {
        return toString.call( value ).match( reTag )[ 1 ].toLowerCase()
      }
    } )() ,
    addPredicate : function addPredicate( name , predicate ) {

      if ( /^(noConflict|not|use)$/.test( name ) ) {
        return false
      }

      if ( typeof predicate !== 'function' ) {
        return false
      }

      proto[ name ] = function method() {
        var result = predicate.apply( null , arguments )
        return this === is.not ? !result : !!result
      }
      return true

    }
  }

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

  is.use( function numberBundle( util ) {

    var nativeIsFinite = isFinite

    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )

    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )

    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.number( number ) && number % 2 === 1
    } )
    util.addPredicate( 'even' , function isEven( number ) {
      return is.number( number ) && number % 2 === 0
    } )

    util.addPredicate( 'finite' , function isFinite( number ) {
      return is.number( number ) && nativeIsFinite( number )
    } )
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
          return is.finite( number ) && number >= MIN && number <= MAX
        } )
      } )()
    }

  } )

  is.use( function stringBundle( util ) {

    util.addPredicate( 'string' , function isString( value ) {
      return typeof value === 'string'
    } )

    util.addPredicate( 'emptyString' , function isEmptyString( string ) {
      return is.string( string ) && /^\s*$/.test( string )
    } )

    if ( String.prototype.startsWith ) {

      util.addPredicate( 'startsWith' , function isStartsWith( string , prefix ) {

        string = String( string )
        prefix = String( prefix )

        return string.startsWith( prefix )

      } )
      util.addPredicate( 'endsWith' , function isEndsWith( string , suffix ) {

        string = String( string )
        suffix = String( suffix )

        return string.endsWith( suffix )

      } )

    } else {

      ( function ( makePredicate ) {

        util.addPredicate( 'startsWith' , makePredicate() )
        util.addPredicate( 'endsWith' , makePredicate( true ) )

      } )( function makePredicate( suffix ) {

        return function predicate( string , affix ) {

          var index
          var offset
          var affixLength
          var stringLength

          affix = String( affix )
          string = String( string )

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

  is.use( function primitiveBundle( util ) {

    util.addPredicate( 'primitive' , function isPrimitive( value ) {
      return is.nil( value ) || is.number( value ) || is.string( value ) || is.boolean( value )
    } )

  } )

  is.use( function objectBundle( util ) {

    var nativeIsExtensible = Object.isExtensible
    var nativeIsSealed = Object.isSealed
    var nativeIsFrozen = Object.isFrozen

    util.addPredicate( 'object' , function isObject( value ) {
      return is.objectLike( value ) || is.function( value )
    } )
    util.addPredicate( 'objectLike' , function isObjectLike( value ) {
      return typeof value === 'object' && is.not.null( value )
    } )

    util.addPredicate( 'emptyObject' , function isEmptyObject( object ) {
      return is.objectLike( object ) && Object.keys( object ).length === 0
    } )

    ; ( function ( makePredicate ) { // eslint-disable-line semi-spacing

      util.addPredicate( 'ownPropertyDefined' , makePredicate() )
      util.addPredicate( 'propertyDefined' , makePredicate( true ) )

    } )( function makePredicate( checkPrototypeChain ) {
      return function predicate( object , path ) {

        var context

        if ( is.nil( object ) ) {
          return false
        }

        context = object
        path = String( path )

        return path.split( '.' ).every( function every( key ) {
          var hasKey = checkPrototypeChain ? key in context : context.hasOwnProperty( key )
          context = context[ key ]
          return hasKey
        } )

      }
    } )

    util.addPredicate( 'extensible' , function isExtensible( object ) {
      return is.object( object ) && nativeIsExtensible( object )
    } )
    util.addPredicate( 'sealed' , function isSealed( object ) {
      return is.object( object ) && nativeIsSealed( object )
    } )
    util.addPredicate( 'frozen' , function isFrozen( object ) {
      return is.object( object ) && nativeIsFrozen( object )
    } )

  } )

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

  } )

  is.use( function functionBundle( util ) {

    util.addPredicate( 'function' , function isFunction( value ) {
      return typeof value === 'function'
    } )

  } )

  is.use( function dateBundle( util ) {

    util.addPredicate( 'date' , function isDate( value ) {
      return util.getTag( value ) === 'date'
    } )

  } )

  is.use( function regexBundle( util ) {

    util.addPredicate( 'regex' , function isRegExp( value ) {
      return util.getTag( value ) === 'regexp'
    } )

  } )

  is.use( function errorBundle( util ) {

    util.addPredicate( 'error' , function isError( value ) {
      return util.getTag( value ) === 'error'
    } )

  } )

  return is

} )
