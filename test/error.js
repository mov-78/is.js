/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:error' , function () {

  it( 'is.error' , function () {

    expect( is.error( null ) ).to.be.false
    expect( is.error( void 0 ) ).to.be.false
    expect( is.error( 0 ) ).to.be.false
    expect( is.error( 0 / 0 ) ).to.be.false
    expect( is.error( +1 / 0 ) ).to.be.false
    expect( is.error( -1 / 0 ) ).to.be.false
    expect( is.error( new Number( 0 ) ) ).to.be.false
    expect( is.error( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.error( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.error( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.error( '' ) ).to.be.false
    expect( is.error( new String( '' ) ) ).to.be.false
    expect( is.error( true ) ).to.be.false
    expect( is.error( false ) ).to.be.false
    expect( is.error( new Boolean( true ) ) ).to.be.false
    expect( is.error( new Boolean( false ) ) ).to.be.false
    expect( is.error( {} ) ).to.be.false
    expect( is.error( [] ) ).to.be.false
    expect( is.error( arguments ) ).to.be.false
    expect( is.error( function () {} ) ).to.be.false
    expect( is.error( new Date() ) ).to.be.false
    expect( is.error( new Error() ) ).to.be.true
    expect( is.error( /^/ ) ).to.be.false

    expect( is.not.error( null ) ).to.be.true
    expect( is.not.error( void 0 ) ).to.be.true
    expect( is.not.error( 0 ) ).to.be.true
    expect( is.not.error( 0 / 0 ) ).to.be.true
    expect( is.not.error( +1 / 0 ) ).to.be.true
    expect( is.not.error( -1 / 0 ) ).to.be.true
    expect( is.not.error( new Number( 0 ) ) ).to.be.true
    expect( is.not.error( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.error( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.error( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.error( '' ) ).to.be.true
    expect( is.not.error( new String( '' ) ) ).to.be.true
    expect( is.not.error( true ) ).to.be.true
    expect( is.not.error( false ) ).to.be.true
    expect( is.not.error( new Boolean( true ) ) ).to.be.true
    expect( is.not.error( new Boolean( false ) ) ).to.be.true
    expect( is.not.error( {} ) ).to.be.true
    expect( is.not.error( [] ) ).to.be.true
    expect( is.not.error( arguments ) ).to.be.true
    expect( is.not.error( function () {} ) ).to.be.true
    expect( is.not.error( new Date() ) ).to.be.true
    expect( is.not.error( new Error() ) ).to.be.false
    expect( is.not.error( /^/ ) ).to.be.true

  } )

} )
