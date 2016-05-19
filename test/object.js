/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:object' , function () {

  it( 'is.object' , function () {

    expect( is.object( null ) ).to.be.false
    expect( is.object( void 0 ) ).to.be.false
    expect( is.object( 0 ) ).to.be.false
    expect( is.object( 0 / 0 ) ).to.be.false
    expect( is.object( +1 / 0 ) ).to.be.false
    expect( is.object( -1 / 0 ) ).to.be.false
    expect( is.object( new Number( 0 ) ) ).to.be.true
    expect( is.object( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.object( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.object( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.object( '' ) ).to.be.false
    expect( is.object( new String( '' ) ) ).to.be.true
    expect( is.object( true ) ).to.be.false
    expect( is.object( false ) ).to.be.false
    expect( is.object( new Boolean( true ) ) ).to.be.true
    expect( is.object( new Boolean( false ) ) ).to.be.true
    expect( is.object( {} ) ).to.be.true
    expect( is.object( [] ) ).to.be.true
    expect( is.object( function () {} ) ).to.be.true
    expect( is.object( /^/ ) ).to.be.true

    expect( is.not.object( null ) ).to.be.true
    expect( is.not.object( void 0 ) ).to.be.true
    expect( is.not.object( 0 ) ).to.be.true
    expect( is.not.object( 0 / 0 ) ).to.be.true
    expect( is.not.object( +1 / 0 ) ).to.be.true
    expect( is.not.object( -1 / 0 ) ).to.be.true
    expect( is.not.object( new Number( 0 ) ) ).to.be.false
    expect( is.not.object( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.object( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.not.object( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.not.object( '' ) ).to.be.true
    expect( is.not.object( new String( '' ) ) ).to.be.false
    expect( is.not.object( true ) ).to.be.true
    expect( is.not.object( false ) ).to.be.true
    expect( is.not.object( new Boolean( true ) ) ).to.be.false
    expect( is.not.object( new Boolean( false ) ) ).to.be.false
    expect( is.not.object( {} ) ).to.be.false
    expect( is.not.object( [] ) ).to.be.false
    expect( is.not.object( function () {} ) ).to.be.false
    expect( is.not.object( /^/ ) ).to.be.false

  } )
  it( 'is.objectLike' , function () {

    expect( is.objectLike( null ) ).to.be.false
    expect( is.objectLike( void 0 ) ).to.be.false
    expect( is.objectLike( 0 ) ).to.be.false
    expect( is.objectLike( 0 / 0 ) ).to.be.false
    expect( is.objectLike( +1 / 0 ) ).to.be.false
    expect( is.objectLike( -1 / 0 ) ).to.be.false
    expect( is.objectLike( new Number( 0 ) ) ).to.be.true
    expect( is.objectLike( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.objectLike( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.objectLike( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.objectLike( '' ) ).to.be.false
    expect( is.objectLike( new String( '' ) ) ).to.be.true
    expect( is.objectLike( true ) ).to.be.false
    expect( is.objectLike( false ) ).to.be.false
    expect( is.objectLike( new Boolean( true ) ) ).to.be.true
    expect( is.objectLike( new Boolean( false ) ) ).to.be.true
    expect( is.objectLike( {} ) ).to.be.true
    expect( is.objectLike( [] ) ).to.be.true
    expect( is.objectLike( function () {} ) ).to.be.false
    expect( is.objectLike( /^/ ) ).to.be.true

    expect( is.not.objectLike( null ) ).to.be.true
    expect( is.not.objectLike( void 0 ) ).to.be.true
    expect( is.not.objectLike( 0 ) ).to.be.true
    expect( is.not.objectLike( 0 / 0 ) ).to.be.true
    expect( is.not.objectLike( +1 / 0 ) ).to.be.true
    expect( is.not.objectLike( -1 / 0 ) ).to.be.true
    expect( is.not.objectLike( new Number( 0 ) ) ).to.be.false
    expect( is.not.objectLike( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.objectLike( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.not.objectLike( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.not.objectLike( '' ) ).to.be.true
    expect( is.not.objectLike( new String( '' ) ) ).to.be.false
    expect( is.not.objectLike( true ) ).to.be.true
    expect( is.not.objectLike( false ) ).to.be.true
    expect( is.not.objectLike( new Boolean( true ) ) ).to.be.false
    expect( is.not.objectLike( new Boolean( false ) ) ).to.be.false
    expect( is.not.objectLike( {} ) ).to.be.false
    expect( is.not.objectLike( [] ) ).to.be.false
    expect( is.not.objectLike( function () {} ) ).to.be.true
    expect( is.not.objectLike( /^/ ) ).to.be.false

  } )

  it( 'is.emptyObject' , function () {

    expect( is.emptyObject( {} ) ).to.be.true
    expect( is.emptyObject( { foo : 0 } ) ).to.be.false
    expect( is.emptyObject( Object.create( { foo : 0 } ) ) ).to.be.true
    expect( is.emptyObject( function () {} ) ).to.be.false

    expect( is.not.emptyObject( {} ) ).to.be.false
    expect( is.not.emptyObject( { foo : 0 } ) ).to.be.true
    expect( is.not.emptyObject( Object.create( { foo : 0 } ) ) ).to.be.false
    expect( is.not.emptyObject( function () {} ) ).to.be.true

  } )

  it( 'is.ownPropertyDefined' , function () {

    var proto = { foo : { bar : 0 } }
    var object = Object.create( proto )
    object.baz = { qux : Object.create( { quux : 1 } ) }

    expect( is.ownPropertyDefined( object , 'baz' ) ).to.be.true
    expect( is.ownPropertyDefined( object , 'wibble' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'baz.qux' ) ).to.be.true
    expect( is.ownPropertyDefined( object , 'baz.wobble' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'baz.qux.quux' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'qux.baz' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'foo' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'foo.bar' ) ).to.be.false
    expect( is.ownPropertyDefined( object , 'foo.wubble' ) ).to.be.false

    expect( is.not.ownPropertyDefined( object , 'baz' ) ).to.be.false
    expect( is.not.ownPropertyDefined( object , 'wibble' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'baz.qux' ) ).to.be.false
    expect( is.not.ownPropertyDefined( object , 'baz.wobble' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'baz.qux.quux' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'qux.baz' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'foo' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'foo.bar' ) ).to.be.true
    expect( is.not.ownPropertyDefined( object , 'foo.wubble' ) ).to.be.true

  } )
  it( 'is.propertyDefined' , function () {

    var proto = { foo : { bar : 0 } }
    var object = Object.create( proto )
    object.baz = { qux : Object.create( { quux : 1 } ) }

    expect( is.propertyDefined( object , 'baz' ) ).to.be.true
    expect( is.propertyDefined( object , 'wibble' ) ).to.be.false
    expect( is.propertyDefined( object , 'baz.qux' ) ).to.be.true
    expect( is.propertyDefined( object , 'baz.wobble' ) ).to.be.false
    expect( is.propertyDefined( object , 'baz.qux.quux' ) ).to.be.true
    expect( is.propertyDefined( object , 'qux.baz' ) ).to.be.false
    expect( is.propertyDefined( object , 'foo' ) ).to.be.true
    expect( is.propertyDefined( object , 'foo.bar' ) ).to.be.true
    expect( is.propertyDefined( object , 'foo.wubble' ) ).to.be.false

    expect( is.not.propertyDefined( object , 'baz' ) ).to.be.false
    expect( is.not.propertyDefined( object , 'wibble' ) ).to.be.true
    expect( is.not.propertyDefined( object , 'baz.qux' ) ).to.be.false
    expect( is.not.propertyDefined( object , 'baz.wobble' ) ).to.be.true
    expect( is.not.propertyDefined( object , 'baz.qux.quux' ) ).to.be.false
    expect( is.not.propertyDefined( object , 'qux.baz' ) ).to.be.true
    expect( is.not.propertyDefined( object , 'foo' ) ).to.be.false
    expect( is.not.propertyDefined( object , 'foo.bar' ) ).to.be.false
    expect( is.not.propertyDefined( object , 'foo.wubble' ) ).to.be.true

  } )

  it( 'is.extensible , is.sealed , is.frozen' , function () {

    var object = { foo : 'bar' }
    var nonObject = null

    expect( is.extensible( object ) ).to.be.true
    expect( is.extensible( nonObject ) ).to.be.false
    expect( is.sealed( object ) ).to.be.false
    expect( is.sealed( nonObject ) ).to.be.false
    expect( is.frozen( object ) ).to.be.false
    expect( is.frozen( nonObject ) ).to.be.false

    expect( is.not.extensible( object ) ).to.be.false
    expect( is.not.extensible( nonObject ) ).to.be.true
    expect( is.not.sealed( object ) ).to.be.true
    expect( is.not.sealed( nonObject ) ).to.be.true
    expect( is.not.frozen( object ) ).to.be.true
    expect( is.not.frozen( nonObject ) ).to.be.true

    Object.preventExtensions( object )

    expect( is.extensible( object ) ).to.be.false
    expect( is.extensible( nonObject ) ).to.be.false
    expect( is.sealed( object ) ).to.be.false
    expect( is.sealed( nonObject ) ).to.be.false
    expect( is.frozen( object ) ).to.be.false
    expect( is.frozen( nonObject ) ).to.be.false

    expect( is.not.extensible( object ) ).to.be.true
    expect( is.not.extensible( nonObject ) ).to.be.true
    expect( is.not.sealed( object ) ).to.be.true
    expect( is.not.sealed( nonObject ) ).to.be.true
    expect( is.not.frozen( object ) ).to.be.true
    expect( is.not.frozen( nonObject ) ).to.be.true

    Object.seal( object )

    expect( is.extensible( object ) ).to.be.false
    expect( is.extensible( nonObject ) ).to.be.false
    expect( is.sealed( object ) ).to.be.true
    expect( is.sealed( nonObject ) ).to.be.false
    expect( is.frozen( object ) ).to.be.false
    expect( is.frozen( nonObject ) ).to.be.false

    expect( is.not.extensible( object ) ).to.be.true
    expect( is.not.extensible( nonObject ) ).to.be.true
    expect( is.not.sealed( object ) ).to.be.false
    expect( is.not.sealed( nonObject ) ).to.be.true
    expect( is.not.frozen( object ) ).to.be.true
    expect( is.not.frozen( nonObject ) ).to.be.true

    Object.freeze( object )

    expect( is.extensible( object ) ).to.be.false
    expect( is.extensible( nonObject ) ).to.be.false
    expect( is.sealed( object ) ).to.be.true
    expect( is.sealed( nonObject ) ).to.be.false
    expect( is.frozen( object ) ).to.be.true
    expect( is.frozen( nonObject ) ).to.be.false

    expect( is.not.extensible( object ) ).to.be.true
    expect( is.not.extensible( nonObject ) ).to.be.true
    expect( is.not.sealed( object ) ).to.be.false
    expect( is.not.sealed( nonObject ) ).to.be.true
    expect( is.not.frozen( object ) ).to.be.false
    expect( is.not.frozen( nonObject ) ).to.be.true

  } )

} )
