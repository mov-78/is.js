/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:regex' , function () {

  it( 'is.regex' , function () {

    expect( is.regex( null ) ).to.be.false
    expect( is.regex( void 0 ) ).to.be.false
    expect( is.regex( 0 ) ).to.be.false
    expect( is.regex( 0 / 0 ) ).to.be.false
    expect( is.regex( +1 / 0 ) ).to.be.false
    expect( is.regex( -1 / 0 ) ).to.be.false
    expect( is.regex( new Number( 0 ) ) ).to.be.false
    expect( is.regex( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.regex( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.regex( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.regex( '' ) ).to.be.false
    expect( is.regex( new String( '' ) ) ).to.be.false
    expect( is.regex( true ) ).to.be.false
    expect( is.regex( false ) ).to.be.false
    expect( is.regex( new Boolean( true ) ) ).to.be.false
    expect( is.regex( new Boolean( false ) ) ).to.be.false
    expect( is.regex( {} ) ).to.be.false
    expect( is.regex( [] ) ).to.be.false
    expect( is.regex( arguments ) ).to.be.false
    expect( is.regex( function () {} ) ).to.be.false
    expect( is.regex( new Date() ) ).to.be.false
    expect( is.regex( new Error() ) ).to.be.false
    expect( is.regex( /^/ ) ).to.be.true
    expect( is.regex( new RegExp() ) ).to.be.true

    expect( is.not.regex( null ) ).to.be.true
    expect( is.not.regex( void 0 ) ).to.be.true
    expect( is.not.regex( 0 ) ).to.be.true
    expect( is.not.regex( 0 / 0 ) ).to.be.true
    expect( is.not.regex( +1 / 0 ) ).to.be.true
    expect( is.not.regex( -1 / 0 ) ).to.be.true
    expect( is.not.regex( new Number( 0 ) ) ).to.be.true
    expect( is.not.regex( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.regex( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.regex( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.regex( '' ) ).to.be.true
    expect( is.not.regex( new String( '' ) ) ).to.be.true
    expect( is.not.regex( true ) ).to.be.true
    expect( is.not.regex( false ) ).to.be.true
    expect( is.not.regex( new Boolean( true ) ) ).to.be.true
    expect( is.not.regex( new Boolean( false ) ) ).to.be.true
    expect( is.not.regex( {} ) ).to.be.true
    expect( is.not.regex( [] ) ).to.be.true
    expect( is.not.regex( arguments ) ).to.be.true
    expect( is.not.regex( function () {} ) ).to.be.true
    expect( is.not.regex( new Date() ) ).to.be.true
    expect( is.not.regex( new Error() ) ).to.be.true
    expect( is.not.regex( /^/ ) ).to.be.false
    expect( is.not.regex( new RegExp() ) ).to.be.false

  } )

} )
