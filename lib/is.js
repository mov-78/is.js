/* eslint-env amd, node */
/* eslint no-shadow: 0 */

( function ( root , factory ) {

  if ( typeof define === 'object' && define.amd ) {
    define( factory )
  } else if ( typeof module === 'object' && module.exports ) {
    module.exports = factory()
  } else {
    root.is = factory()
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
    addPredicate : function addPredicate( name , predicate ) {
      if ( !/^(not|use)$/.test( name ) && typeof predicate === 'function' ) {
        proto[ name ] = function method() {
          var result = predicate.apply( null , arguments )
          return this === is.not ? !result : !!result
        }
      }
    }
  }

  return is

} )
