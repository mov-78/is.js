/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:error' , function () {

  it( 'is.error' , function () {

    expect( is.error( null ) ).to.not.be.ok()
    expect( is.error( void 0 ) ).to.not.be.ok()
    expect( is.error( 0 ) ).to.not.be.ok()
    expect( is.error( 0 / 0 ) ).to.not.be.ok()
    expect( is.error( +1 / 0 ) ).to.not.be.ok()
    expect( is.error( -1 / 0 ) ).to.not.be.ok()
    expect( is.error( new Number( 0 ) ) ).to.not.be.ok()
    expect( is.error( new Number( 0 / 0 ) ) ).to.not.be.ok()
    expect( is.error( new Number( +1 / 0 ) ) ).to.not.be.ok()
    expect( is.error( new Number( -1 / 0 ) ) ).to.not.be.ok()
    expect( is.error( '' ) ).to.not.be.ok()
    expect( is.error( new String( '' ) ) ).to.not.be.ok()
    expect( is.error( true ) ).to.not.be.ok()
    expect( is.error( false ) ).to.not.be.ok()
    expect( is.error( new Boolean( true ) ) ).to.not.be.ok()
    expect( is.error( new Boolean( false ) ) ).to.not.be.ok()
    expect( is.error( {} ) ).to.not.be.ok()
    expect( is.error( [] ) ).to.not.be.ok()
    expect( is.error( arguments ) ).to.not.be.ok()
    expect( is.error( function () {} ) ).to.not.be.ok()
    expect( is.error( new Date() ) ).to.not.be.ok()
    expect( is.error( new Error() ) ).to.be.ok()
    expect( is.error( /^/ ) ).to.not.be.ok()

    expect( is.not.error( null ) ).to.be.ok()
    expect( is.not.error( void 0 ) ).to.be.ok()
    expect( is.not.error( 0 ) ).to.be.ok()
    expect( is.not.error( 0 / 0 ) ).to.be.ok()
    expect( is.not.error( +1 / 0 ) ).to.be.ok()
    expect( is.not.error( -1 / 0 ) ).to.be.ok()
    expect( is.not.error( new Number( 0 ) ) ).to.be.ok()
    expect( is.not.error( new Number( 0 / 0 ) ) ).to.be.ok()
    expect( is.not.error( new Number( +1 / 0 ) ) ).to.be.ok()
    expect( is.not.error( new Number( -1 / 0 ) ) ).to.be.ok()
    expect( is.not.error( '' ) ).to.be.ok()
    expect( is.not.error( new String( '' ) ) ).to.be.ok()
    expect( is.not.error( true ) ).to.be.ok()
    expect( is.not.error( false ) ).to.be.ok()
    expect( is.not.error( new Boolean( true ) ) ).to.be.ok()
    expect( is.not.error( new Boolean( false ) ) ).to.be.ok()
    expect( is.not.error( {} ) ).to.be.ok()
    expect( is.not.error( [] ) ).to.be.ok()
    expect( is.not.error( arguments ) ).to.be.ok()
    expect( is.not.error( function () {} ) ).to.be.ok()
    expect( is.not.error( new Date() ) ).to.be.ok()
    expect( is.not.error( new Error() ) ).to.not.be.ok()
    expect( is.not.error( /^/ ) ).to.be.ok()

  } )

} )
