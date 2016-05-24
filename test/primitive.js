/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:primitive' , function () {

  it( 'is.primitive' , function () {

    expect( is.primitive( null ) ).to.be.ok()
    expect( is.primitive( void 0 ) ).to.be.ok()
    expect( is.primitive( 0 ) ).to.be.ok()
    expect( is.primitive( 0 / 0 ) ).to.be.ok()
    expect( is.primitive( +1 / 0 ) ).to.be.ok()
    expect( is.primitive( -1 / 0 ) ).to.be.ok()
    expect( is.primitive( new Number( 0 ) ) ).to.not.be.ok()
    expect( is.primitive( new Number( 0 / 0 ) ) ).to.not.be.ok()
    expect( is.primitive( new Number( +1 / 0 ) ) ).to.not.be.ok()
    expect( is.primitive( new Number( -1 / 0 ) ) ).to.not.be.ok()
    expect( is.primitive( '' ) ).to.be.ok()
    expect( is.primitive( new String( '' ) ) ).to.not.be.ok()
    expect( is.primitive( true ) ).to.be.ok()
    expect( is.primitive( false ) ).to.be.ok()
    expect( is.primitive( new Boolean( true ) ) ).to.not.be.ok()
    expect( is.primitive( new Boolean( false ) ) ).to.not.be.ok()
    expect( is.primitive( {} ) ).to.not.be.ok()
    expect( is.primitive( [] ) ).to.not.be.ok()
    expect( is.primitive( arguments ) ).to.not.be.ok()
    expect( is.primitive( function () {} ) ).to.not.be.ok()
    expect( is.primitive( new Date() ) ).to.not.be.ok()
    expect( is.primitive( new Error() ) ).to.not.be.ok()
    expect( is.primitive( /^/ ) ).to.not.be.ok()

    expect( is.not.primitive( null ) ).to.not.be.ok()
    expect( is.not.primitive( void 0 ) ).to.not.be.ok()
    expect( is.not.primitive( 0 ) ).to.not.be.ok()
    expect( is.not.primitive( 0 / 0 ) ).to.not.be.ok()
    expect( is.not.primitive( +1 / 0 ) ).to.not.be.ok()
    expect( is.not.primitive( -1 / 0 ) ).to.not.be.ok()
    expect( is.not.primitive( new Number( 0 ) ) ).to.be.ok()
    expect( is.not.primitive( new Number( 0 / 0 ) ) ).to.be.ok()
    expect( is.not.primitive( new Number( +1 / 0 ) ) ).to.be.ok()
    expect( is.not.primitive( new Number( -1 / 0 ) ) ).to.be.ok()
    expect( is.not.primitive( '' ) ).to.not.be.ok()
    expect( is.not.primitive( new String( '' ) ) ).to.be.ok()
    expect( is.not.primitive( true ) ).to.not.be.ok()
    expect( is.not.primitive( false ) ).to.not.be.ok()
    expect( is.not.primitive( new Boolean( true ) ) ).to.be.ok()
    expect( is.not.primitive( new Boolean( false ) ) ).to.be.ok()
    expect( is.not.primitive( {} ) ).to.be.ok()
    expect( is.not.primitive( [] ) ).to.be.ok()
    expect( is.not.primitive( arguments ) ).to.be.ok()
    expect( is.not.primitive( function () {} ) ).to.be.ok()
    expect( is.not.primitive( new Date() ) ).to.be.ok()
    expect( is.not.primitive( new Error() ) ).to.be.ok()
    expect( is.not.primitive( /^/ ) ).to.be.ok()

  } )

} )
