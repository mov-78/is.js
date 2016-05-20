/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:date' , function () {

  it( 'is.date' , function () {

    expect( is.date( null ) ).to.be.false
    expect( is.date( void 0 ) ).to.be.false
    expect( is.date( 0 ) ).to.be.false
    expect( is.date( 0 / 0 ) ).to.be.false
    expect( is.date( +1 / 0 ) ).to.be.false
    expect( is.date( -1 / 0 ) ).to.be.false
    expect( is.date( new Number( 0 ) ) ).to.be.false
    expect( is.date( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.date( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.date( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.date( '' ) ).to.be.false
    expect( is.date( new String( '' ) ) ).to.be.false
    expect( is.date( true ) ).to.be.false
    expect( is.date( false ) ).to.be.false
    expect( is.date( new Boolean( true ) ) ).to.be.false
    expect( is.date( new Boolean( false ) ) ).to.be.false
    expect( is.date( {} ) ).to.be.false
    expect( is.date( [] ) ).to.be.false
    expect( is.date( arguments ) ).to.be.false
    expect( is.date( function () {} ) ).to.be.false
    expect( is.date( new Date() ) ).to.be.true
    expect( is.date( new Error() ) ).to.be.false
    expect( is.date( /^/ ) ).to.be.false

    expect( is.not.date( null ) ).to.be.true
    expect( is.not.date( void 0 ) ).to.be.true
    expect( is.not.date( 0 ) ).to.be.true
    expect( is.not.date( 0 / 0 ) ).to.be.true
    expect( is.not.date( +1 / 0 ) ).to.be.true
    expect( is.not.date( -1 / 0 ) ).to.be.true
    expect( is.not.date( new Number( 0 ) ) ).to.be.true
    expect( is.not.date( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.date( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.date( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.date( '' ) ).to.be.true
    expect( is.not.date( new String( '' ) ) ).to.be.true
    expect( is.not.date( true ) ).to.be.true
    expect( is.not.date( false ) ).to.be.true
    expect( is.not.date( new Boolean( true ) ) ).to.be.true
    expect( is.not.date( new Boolean( false ) ) ).to.be.true
    expect( is.not.date( {} ) ).to.be.true
    expect( is.not.date( [] ) ).to.be.true
    expect( is.not.date( arguments ) ).to.be.true
    expect( is.not.date( function () {} ) ).to.be.true
    expect( is.not.date( new Date() ) ).to.be.false
    expect( is.not.date( new Error() ) ).to.be.true
    expect( is.not.date( /^/ ) ).to.be.true

  } )

} )
