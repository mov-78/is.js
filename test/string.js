/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:string' , function () {

  it( 'is.string' , function () {

    expect( is.string( null ) ).to.be.false
    expect( is.string( void 0 ) ).to.be.false
    expect( is.string( 0 ) ).to.be.false
    expect( is.string( 0 / 0 ) ).to.be.false
    expect( is.string( +1 / 0 ) ).to.be.false
    expect( is.string( -1 / 0 ) ).to.be.false
    expect( is.string( new Number( 0 ) ) ).to.be.false
    expect( is.string( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.string( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.string( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.string( '' ) ).to.be.true
    expect( is.string( new String( '' ) ) ).to.be.false
    expect( is.string( true ) ).to.be.false
    expect( is.string( false ) ).to.be.false
    expect( is.string( new Boolean( true ) ) ).to.be.false
    expect( is.string( new Boolean( false ) ) ).to.be.false
    expect( is.string( {} ) ).to.be.false
    expect( is.string( [] ) ).to.be.false
    expect( is.string( arguments ) ).to.be.false
    expect( is.string( function () {} ) ).to.be.false
    expect( is.string( new Date() ) ).to.be.false
    expect( is.string( new Error() ) ).to.be.false
    expect( is.string( /^/ ) ).to.be.false

    expect( is.not.string( null ) ).to.be.true
    expect( is.not.string( void 0 ) ).to.be.true
    expect( is.not.string( 0 ) ).to.be.true
    expect( is.not.string( 0 / 0 ) ).to.be.true
    expect( is.not.string( +1 / 0 ) ).to.be.true
    expect( is.not.string( -1 / 0 ) ).to.be.true
    expect( is.not.string( new Number( 0 ) ) ).to.be.true
    expect( is.not.string( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.string( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.string( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.string( '' ) ).to.be.false
    expect( is.not.string( new String( '' ) ) ).to.be.true
    expect( is.not.string( true ) ).to.be.true
    expect( is.not.string( false ) ).to.be.true
    expect( is.not.string( new Boolean( true ) ) ).to.be.true
    expect( is.not.string( new Boolean( false ) ) ).to.be.true
    expect( is.not.string( {} ) ).to.be.true
    expect( is.not.string( [] ) ).to.be.true
    expect( is.not.string( arguments ) ).to.be.true
    expect( is.not.string( function () {} ) ).to.be.true
    expect( is.not.string( new Date() ) ).to.be.true
    expect( is.not.string( new Error() ) ).to.be.true
    expect( is.not.string( /^/ ) ).to.be.true

  } )

  it( 'is.emptyString' , function () {

    expect( is.emptyString( null ) ).to.be.false
    expect( is.emptyString( void 0 ) ).to.be.false
    expect( is.emptyString( 0 ) ).to.be.false
    expect( is.emptyString( 0 / 0 ) ).to.be.false
    expect( is.emptyString( +1 / 0 ) ).to.be.false
    expect( is.emptyString( -1 / 0 ) ).to.be.false
    expect( is.emptyString( new Number( 0 ) ) ).to.be.false
    expect( is.emptyString( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.emptyString( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.emptyString( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.emptyString( '' ) ).to.be.true
    expect( is.emptyString( ' ' ) ).to.be.true
    expect( is.emptyString( '  ' ) ).to.be.true
    expect( is.emptyString( '\f\n\r\t\v' ) ).to.be.true
    expect( is.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).to.be.true
    expect( is.emptyString( 'lipsum' ) ).to.be.false
    expect( is.emptyString( new String( '' ) ) ).to.be.false
    expect( is.emptyString( new String( ' ' ) ) ).to.be.false
    expect( is.emptyString( new String( '  ' ) ) ).to.be.false
    expect( is.emptyString( new String( '\f\n\r\t\v' ) ) ).to.be.false
    expect( is.emptyString( new String( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ) ).to.be.false
    expect( is.emptyString( new String( 'lipsum' ) ) ).to.be.false
    expect( is.emptyString( true ) ).to.be.false
    expect( is.emptyString( false ) ).to.be.false
    expect( is.emptyString( new Boolean( true ) ) ).to.be.false
    expect( is.emptyString( new Boolean( false ) ) ).to.be.false
    expect( is.emptyString( {} ) ).to.be.false
    expect( is.emptyString( [] ) ).to.be.false
    expect( is.emptyString( arguments ) ).to.be.false
    expect( is.emptyString( function () {} ) ).to.be.false
    expect( is.emptyString( new Date() ) ).to.be.false
    expect( is.emptyString( new Error() ) ).to.be.false
    expect( is.emptyString( /^/ ) ).to.be.false

    expect( is.not.emptyString( null ) ).to.be.true
    expect( is.not.emptyString( void 0 ) ).to.be.true
    expect( is.not.emptyString( 0 ) ).to.be.true
    expect( is.not.emptyString( 0 / 0 ) ).to.be.true
    expect( is.not.emptyString( +1 / 0 ) ).to.be.true
    expect( is.not.emptyString( -1 / 0 ) ).to.be.true
    expect( is.not.emptyString( new Number( 0 ) ) ).to.be.true
    expect( is.not.emptyString( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.emptyString( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.emptyString( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.emptyString( '' ) ).to.be.false
    expect( is.not.emptyString( ' ' ) ).to.be.false
    expect( is.not.emptyString( '  ' ) ).to.be.false
    expect( is.not.emptyString( '\f\n\r\t\v' ) ).to.be.false
    expect( is.not.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).to.be.false
    expect( is.not.emptyString( 'lipsum' ) ).to.be.true
    expect( is.not.emptyString( new String( '' ) ) ).to.be.true
    expect( is.not.emptyString( new String( ' ' ) ) ).to.be.true
    expect( is.not.emptyString( new String( '  ' ) ) ).to.be.true
    expect( is.not.emptyString( new String( '\f\n\r\t\v' ) ) ).to.be.true
    expect( is.not.emptyString( new String( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ) ).to.be.true
    expect( is.not.emptyString( new String( 'lipsum' ) ) ).to.be.true
    expect( is.not.emptyString( true ) ).to.be.true
    expect( is.not.emptyString( false ) ).to.be.true
    expect( is.not.emptyString( new Boolean( true ) ) ).to.be.true
    expect( is.not.emptyString( new Boolean( false ) ) ).to.be.true
    expect( is.not.emptyString( {} ) ).to.be.true
    expect( is.not.emptyString( [] ) ).to.be.true
    expect( is.not.emptyString( arguments ) ).to.be.true
    expect( is.not.emptyString( function () {} ) ).to.be.true
    expect( is.not.emptyString( new Date() ) ).to.be.true
    expect( is.not.emptyString( new Error() ) ).to.be.true
    expect( is.not.emptyString( /^/ ) ).to.be.true

  } )

  it( 'is.startsWith' , function () {
    // TODO
  } )
  it( 'is.endsWith' , function () {
    // TODO
  } )

} )
