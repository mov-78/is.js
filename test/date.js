/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:date' , function () {

  it( 'is.date' , function () {

    expect( is.date( null ) ).to.not.be.ok()
    expect( is.date( void 0 ) ).to.not.be.ok()
    expect( is.date( 0 ) ).to.not.be.ok()
    expect( is.date( 0 / 0 ) ).to.not.be.ok()
    expect( is.date( +1 / 0 ) ).to.not.be.ok()
    expect( is.date( -1 / 0 ) ).to.not.be.ok()
    expect( is.date( new Number( 0 ) ) ).to.not.be.ok()
    expect( is.date( new Number( 0 / 0 ) ) ).to.not.be.ok()
    expect( is.date( new Number( +1 / 0 ) ) ).to.not.be.ok()
    expect( is.date( new Number( -1 / 0 ) ) ).to.not.be.ok()
    expect( is.date( '' ) ).to.not.be.ok()
    expect( is.date( new String( '' ) ) ).to.not.be.ok()
    expect( is.date( true ) ).to.not.be.ok()
    expect( is.date( false ) ).to.not.be.ok()
    expect( is.date( new Boolean( true ) ) ).to.not.be.ok()
    expect( is.date( new Boolean( false ) ) ).to.not.be.ok()
    expect( is.date( {} ) ).to.not.be.ok()
    expect( is.date( [] ) ).to.not.be.ok()
    expect( is.date( arguments ) ).to.not.be.ok()
    expect( is.date( function () {} ) ).to.not.be.ok()
    expect( is.date( new Date() ) ).to.be.ok()
    expect( is.date( new Error() ) ).to.not.be.ok()
    expect( is.date( /^/ ) ).to.not.be.ok()

    expect( is.not.date( null ) ).to.be.ok()
    expect( is.not.date( void 0 ) ).to.be.ok()
    expect( is.not.date( 0 ) ).to.be.ok()
    expect( is.not.date( 0 / 0 ) ).to.be.ok()
    expect( is.not.date( +1 / 0 ) ).to.be.ok()
    expect( is.not.date( -1 / 0 ) ).to.be.ok()
    expect( is.not.date( new Number( 0 ) ) ).to.be.ok()
    expect( is.not.date( new Number( 0 / 0 ) ) ).to.be.ok()
    expect( is.not.date( new Number( +1 / 0 ) ) ).to.be.ok()
    expect( is.not.date( new Number( -1 / 0 ) ) ).to.be.ok()
    expect( is.not.date( '' ) ).to.be.ok()
    expect( is.not.date( new String( '' ) ) ).to.be.ok()
    expect( is.not.date( true ) ).to.be.ok()
    expect( is.not.date( false ) ).to.be.ok()
    expect( is.not.date( new Boolean( true ) ) ).to.be.ok()
    expect( is.not.date( new Boolean( false ) ) ).to.be.ok()
    expect( is.not.date( {} ) ).to.be.ok()
    expect( is.not.date( [] ) ).to.be.ok()
    expect( is.not.date( arguments ) ).to.be.ok()
    expect( is.not.date( function () {} ) ).to.be.ok()
    expect( is.not.date( new Date() ) ).to.not.be.ok()
    expect( is.not.date( new Error() ) ).to.be.ok()
    expect( is.not.date( /^/ ) ).to.be.ok()

  } )

} )
