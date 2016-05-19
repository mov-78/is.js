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

    util.addPredicate( 'number' , function isNumber( value ) {
      return typeof value === 'number'
    } )

    util.addPredicate( 'nan' , function isNaN( value ) {
      return value !== value // eslint-disable-line no-self-compare
    } )

    util.addPredicate( 'positive' , function isPositive( number ) {
      return is.number( number ) && number > 0
    } )
    util.addPredicate( 'negative' , function isNegative( number ) {
      return is.number( number ) && number < 0
    } )

    util.addPredicate( 'odd' , function isOdd( number ) {
      return is.number( number ) && number % 2 === 1
    } )
    util.addPredicate( 'even' , function isEven( number ) {
      return is.number( number ) && number % 2 === 0
    } )

    util.addPredicate( 'gt' , function isGreaterThan( number , other ) {
      return number > other
    } )
    util.addPredicate( 'gte' , function isGreaterThanOrEqualTo( number , other ) {
      return number >= other
    } )
    util.addPredicate( 'lt' , function isLessThan( number , other ) {
      return number < other
    } )
    util.addPredicate( 'lte' , function isLessThanOrEqualTo( number , other ) {
      return number <= other
    } )
    util.addPredicate( 'within' , function isWithin( number , lower , upper ) {
      return is.gte( number , lower ) && is.lte( number , upper )
    } )

  } )

  is.use( function stringBundle( util ) {

    util.addPredicate( 'string' , function isString( value ) {
      return typeof value === 'string'
    } )

    util.addPredicate( 'startsWith' , function isStartsWith( string , prefix ) {

      var i
      var prefixLength

      string = String( string )
      prefix = String( prefix )

      prefixLength = prefix.length

      if ( prefixLength > string.length ) {
        return false
      }

      for ( i = 0 ; i < prefixLength ; i += 1 ) {
        if ( string.charCodeAt( i ) !== prefix.charCodeAt( i ) ) {
          return false
        }
      }

      return true

    } )

    util.addPredicate( 'endsWith' , function isEndsWith( string , suffix ) {

      var i
      var offset
      var stringLength
      var suffixLength

      string = String( string )
      suffix = String( suffix )

      stringLength = string.length
      suffixLength = suffix.length

      if ( suffixLength > stringLength ) {
        return false
      }

      offset = stringLength - suffixLength

      for ( i = 0 ; i < suffixLength ; i += 1 ) {
        if ( string.charCodeAt( offset + i ) !== suffix.charCodeAt( i ) ) {
          return false
        }
      }

      return true

    } )

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

  return is

} )
