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
    expect( is.object( function () {} ) ).to.be.false
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
    expect( is.not.object( function () {} ) ).to.be.true
    expect( is.not.object( /^/ ) ).to.be.false

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
