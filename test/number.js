/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:number' , function () {

  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
  var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -MAX_SAFE_INTEGER

  it( 'is.number' , function () {

    expect( is.number( null ) ).to.be.false
    expect( is.number( void 0 ) ).to.be.false
    expect( is.number( 0 ) ).to.be.true
    expect( is.number( 0 / 0 ) ).to.be.true
    expect( is.number( +1 / 0 ) ).to.be.true
    expect( is.number( -1 / 0 ) ).to.be.true
    expect( is.number( new Number( 0 ) ) ).to.be.true
    expect( is.number( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.number( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.number( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.number( '' ) ).to.be.false
    expect( is.number( new String( '' ) ) ).to.be.false
    expect( is.number( true ) ).to.be.false
    expect( is.number( false ) ).to.be.false
    expect( is.number( new Boolean( true ) ) ).to.be.false
    expect( is.number( new Boolean( false ) ) ).to.be.false
    expect( is.number( {} ) ).to.be.false
    expect( is.number( [] ) ).to.be.false
    expect( is.number( arguments ) ).to.be.false
    expect( is.number( function () {} ) ).to.be.false
    expect( is.number( new Date() ) ).to.be.false
    expect( is.number( new Error() ) ).to.be.false
    expect( is.number( /^/ ) ).to.be.false

    expect( is.not.number( null ) ).to.be.true
    expect( is.not.number( void 0 ) ).to.be.true
    expect( is.not.number( 0 ) ).to.be.false
    expect( is.not.number( 0 / 0 ) ).to.be.false
    expect( is.not.number( +1 / 0 ) ).to.be.false
    expect( is.not.number( -1 / 0 ) ).to.be.false
    expect( is.not.number( new Number( 0 ) ) ).to.be.false
    expect( is.not.number( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.number( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.not.number( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.not.number( '' ) ).to.be.true
    expect( is.not.number( new String( '' ) ) ).to.be.true
    expect( is.not.number( true ) ).to.be.true
    expect( is.not.number( false ) ).to.be.true
    expect( is.not.number( new Boolean( true ) ) ).to.be.true
    expect( is.not.number( new Boolean( false ) ) ).to.be.true
    expect( is.not.number( {} ) ).to.be.true
    expect( is.not.number( [] ) ).to.be.true
    expect( is.not.number( arguments ) ).to.be.true
    expect( is.not.number( function () {} ) ).to.be.true
    expect( is.not.number( new Date() ) ).to.be.true
    expect( is.not.number( new Error() ) ).to.be.true
    expect( is.not.number( /^/ ) ).to.be.true

  } )

  it( 'is.nan' , function () {

    expect( is.nan( null ) ).to.be.false
    expect( is.nan( void 0 ) ).to.be.false
    expect( is.nan( 0 ) ).to.be.false
    expect( is.nan( 0 / 0 ) ).to.be.true
    expect( is.nan( +1 / 0 ) ).to.be.false
    expect( is.nan( -1 / 0 ) ).to.be.false
    expect( is.nan( new Number( 0 ) ) ).to.be.false
    expect( is.nan( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.nan( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.nan( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.nan( '' ) ).to.be.false
    expect( is.nan( new String( '' ) ) ).to.be.false
    expect( is.nan( true ) ).to.be.false
    expect( is.nan( false ) ).to.be.false
    expect( is.nan( new Boolean( true ) ) ).to.be.false
    expect( is.nan( new Boolean( false ) ) ).to.be.false
    expect( is.nan( {} ) ).to.be.false
    expect( is.nan( [] ) ).to.be.false
    expect( is.nan( arguments ) ).to.be.false
    expect( is.nan( function () {} ) ).to.be.false
    expect( is.nan( new Date() ) ).to.be.false
    expect( is.nan( new Error() ) ).to.be.false
    expect( is.nan( /^/ ) ).to.be.false

    expect( is.not.nan( null ) ).to.be.true
    expect( is.not.nan( void 0 ) ).to.be.true
    expect( is.not.nan( 0 ) ).to.be.true
    expect( is.not.nan( 0 / 0 ) ).to.be.false
    expect( is.not.nan( +1 / 0 ) ).to.be.true
    expect( is.not.nan( -1 / 0 ) ).to.be.true
    expect( is.not.nan( new Number( 0 ) ) ).to.be.true
    expect( is.not.nan( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.nan( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.nan( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.nan( '' ) ).to.be.true
    expect( is.not.nan( new String( '' ) ) ).to.be.true
    expect( is.not.nan( true ) ).to.be.true
    expect( is.not.nan( false ) ).to.be.true
    expect( is.not.nan( new Boolean( true ) ) ).to.be.true
    expect( is.not.nan( new Boolean( false ) ) ).to.be.true
    expect( is.not.nan( {} ) ).to.be.true
    expect( is.not.nan( [] ) ).to.be.true
    expect( is.not.nan( arguments ) ).to.be.true
    expect( is.not.nan( function () {} ) ).to.be.true
    expect( is.not.nan( new Date() ) ).to.be.true
    expect( is.not.nan( new Error() ) ).to.be.true
    expect( is.not.nan( /^/ ) ).to.be.true

  } )

  it( 'is.odd' , function () {

    expect( is.odd( null ) ).to.be.false
    expect( is.odd( void 0 ) ).to.be.false
    expect( is.odd( 1 ) ).to.be.true
    expect( is.odd( 1.1 ) ).to.be.false
    expect( is.odd( 2 ) ).to.be.false
    expect( is.odd( 2.2 ) ).to.be.false
    expect( is.odd( 0 / 0 ) ).to.be.false
    expect( is.odd( +1 / 0 ) ).to.be.false
    expect( is.odd( -1 / 0 ) ).to.be.false
    expect( is.odd( new Number( 1 ) ) ).to.be.false
    expect( is.odd( new Number( 1.1 ) ) ).to.be.false
    expect( is.odd( new Number( 2 ) ) ).to.be.false
    expect( is.odd( new Number( 2.2 ) ) ).to.be.false
    expect( is.odd( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.odd( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.odd( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.odd( '' ) ).to.be.false
    expect( is.odd( '1' ) ).to.be.false
    expect( is.odd( '2' ) ).to.be.false
    expect( is.odd( new String( '' ) ) ).to.be.false
    expect( is.odd( new String( '1' ) ) ).to.be.false
    expect( is.odd( new String( '2' ) ) ).to.be.false
    expect( is.odd( true ) ).to.be.false
    expect( is.odd( false ) ).to.be.false
    expect( is.odd( new Boolean( true ) ) ).to.be.false
    expect( is.odd( new Boolean( false ) ) ).to.be.false
    expect( is.odd( {} ) ).to.be.false
    expect( is.odd( [] ) ).to.be.false
    expect( is.odd( arguments ) ).to.be.false
    expect( is.odd( function () {} ) ).to.be.false
    expect( is.odd( new Date() ) ).to.be.false
    expect( is.odd( new Error() ) ).to.be.false
    expect( is.odd( /^/ ) ).to.be.false

    expect( is.not.odd( null ) ).to.be.true
    expect( is.not.odd( void 0 ) ).to.be.true
    expect( is.not.odd( 1 ) ).to.be.false
    expect( is.not.odd( 1.1 ) ).to.be.true
    expect( is.not.odd( 2 ) ).to.be.true
    expect( is.not.odd( 2.2 ) ).to.be.true
    expect( is.not.odd( 0 / 0 ) ).to.be.true
    expect( is.not.odd( +1 / 0 ) ).to.be.true
    expect( is.not.odd( -1 / 0 ) ).to.be.true
    expect( is.not.odd( new Number( 1 ) ) ).to.be.true
    expect( is.not.odd( new Number( 1.1 ) ) ).to.be.true
    expect( is.not.odd( new Number( 2 ) ) ).to.be.true
    expect( is.not.odd( new Number( 2.2 ) ) ).to.be.true
    expect( is.not.odd( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.odd( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.odd( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.odd( '' ) ).to.be.true
    expect( is.not.odd( '1' ) ).to.be.true
    expect( is.not.odd( '2' ) ).to.be.true
    expect( is.not.odd( new String( '' ) ) ).to.be.true
    expect( is.not.odd( new String( '1' ) ) ).to.be.true
    expect( is.not.odd( new String( '2' ) ) ).to.be.true
    expect( is.not.odd( true ) ).to.be.true
    expect( is.not.odd( false ) ).to.be.true
    expect( is.not.odd( new Boolean( true ) ) ).to.be.true
    expect( is.not.odd( new Boolean( false ) ) ).to.be.true
    expect( is.not.odd( {} ) ).to.be.true
    expect( is.not.odd( [] ) ).to.be.true
    expect( is.not.odd( arguments ) ).to.be.true
    expect( is.not.odd( function () {} ) ).to.be.true
    expect( is.not.odd( new Date() ) ).to.be.true
    expect( is.not.odd( new Error() ) ).to.be.true
    expect( is.not.odd( /^/ ) ).to.be.true

  } )
  it( 'is.even' , function () {

    expect( is.even( null ) ).to.be.false
    expect( is.even( void 0 ) ).to.be.false
    expect( is.even( 1 ) ).to.be.false
    expect( is.even( 1.1 ) ).to.be.false
    expect( is.even( 2 ) ).to.be.true
    expect( is.even( 2.2 ) ).to.be.false
    expect( is.even( 0 / 0 ) ).to.be.false
    expect( is.even( +1 / 0 ) ).to.be.false
    expect( is.even( -1 / 0 ) ).to.be.false
    expect( is.even( new Number( 1 ) ) ).to.be.false
    expect( is.even( new Number( 1.1 ) ) ).to.be.false
    expect( is.even( new Number( 2 ) ) ).to.be.false
    expect( is.even( new Number( 2.2 ) ) ).to.be.false
    expect( is.even( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.even( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.even( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.even( '' ) ).to.be.false
    expect( is.even( '1' ) ).to.be.false
    expect( is.even( '2' ) ).to.be.false
    expect( is.even( new String( '' ) ) ).to.be.false
    expect( is.even( new String( '1' ) ) ).to.be.false
    expect( is.even( new String( '2' ) ) ).to.be.false
    expect( is.even( true ) ).to.be.false
    expect( is.even( false ) ).to.be.false
    expect( is.even( new Boolean( true ) ) ).to.be.false
    expect( is.even( new Boolean( false ) ) ).to.be.false
    expect( is.even( {} ) ).to.be.false
    expect( is.even( [] ) ).to.be.false
    expect( is.even( arguments ) ).to.be.false
    expect( is.even( function () {} ) ).to.be.false
    expect( is.even( new Date() ) ).to.be.false
    expect( is.even( new Error() ) ).to.be.false
    expect( is.even( /^/ ) ).to.be.false

    expect( is.not.even( null ) ).to.be.true
    expect( is.not.even( void 0 ) ).to.be.true
    expect( is.not.even( 1 ) ).to.be.true
    expect( is.not.even( 1.1 ) ).to.be.true
    expect( is.not.even( 2 ) ).to.be.false
    expect( is.not.even( 2.2 ) ).to.be.true
    expect( is.not.even( 0 / 0 ) ).to.be.true
    expect( is.not.even( +1 / 0 ) ).to.be.true
    expect( is.not.even( -1 / 0 ) ).to.be.true
    expect( is.not.even( new Number( 1 ) ) ).to.be.true
    expect( is.not.even( new Number( 1.1 ) ) ).to.be.true
    expect( is.not.even( new Number( 2 ) ) ).to.be.true
    expect( is.not.even( new Number( 2.2 ) ) ).to.be.true
    expect( is.not.even( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.even( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.even( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.even( '' ) ).to.be.true
    expect( is.not.even( '1' ) ).to.be.true
    expect( is.not.even( '2' ) ).to.be.true
    expect( is.not.even( new String( '' ) ) ).to.be.true
    expect( is.not.even( new String( '1' ) ) ).to.be.true
    expect( is.not.even( new String( '2' ) ) ).to.be.true
    expect( is.not.even( true ) ).to.be.true
    expect( is.not.even( false ) ).to.be.true
    expect( is.not.even( new Boolean( true ) ) ).to.be.true
    expect( is.not.even( new Boolean( false ) ) ).to.be.true
    expect( is.not.even( {} ) ).to.be.true
    expect( is.not.even( [] ) ).to.be.true
    expect( is.not.even( arguments ) ).to.be.true
    expect( is.not.even( function () {} ) ).to.be.true
    expect( is.not.even( new Date() ) ).to.be.true
    expect( is.not.even( new Error() ) ).to.be.true
    expect( is.not.even( /^/ ) ).to.be.true

  } )

  it( 'is.finite' , function () {

    expect( is.finite( null ) ).to.be.false
    expect( is.finite( void 0 ) ).to.be.false
    expect( is.finite( 0 ) ).to.be.true
    expect( is.finite( 0 / 0 ) ).to.be.false
    expect( is.finite( +1 / 0 ) ).to.be.false
    expect( is.finite( -1 / 0 ) ).to.be.false
    expect( is.finite( new Number( 0 ) ) ).to.be.false
    expect( is.finite( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.finite( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.finite( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.finite( '' ) ).to.be.false
    expect( is.finite( new String( '' ) ) ).to.be.false
    expect( is.finite( true ) ).to.be.false
    expect( is.finite( false ) ).to.be.false
    expect( is.finite( new Boolean( true ) ) ).to.be.false
    expect( is.finite( new Boolean( false ) ) ).to.be.false
    expect( is.finite( {} ) ).to.be.false
    expect( is.finite( [] ) ).to.be.false
    expect( is.finite( arguments ) ).to.be.false
    expect( is.finite( function () {} ) ).to.be.false
    expect( is.finite( new Date() ) ).to.be.false
    expect( is.finite( new Error() ) ).to.be.false
    expect( is.finite( /^/ ) ).to.be.false

    expect( is.not.finite( null ) ).to.be.true
    expect( is.not.finite( void 0 ) ).to.be.true
    expect( is.not.finite( 0 ) ).to.be.false
    expect( is.not.finite( 0 / 0 ) ).to.be.true
    expect( is.not.finite( +1 / 0 ) ).to.be.true
    expect( is.not.finite( -1 / 0 ) ).to.be.true
    expect( is.not.finite( new Number( 0 ) ) ).to.be.true
    expect( is.not.finite( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.finite( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.finite( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.finite( '' ) ).to.be.true
    expect( is.not.finite( new String( '' ) ) ).to.be.true
    expect( is.not.finite( true ) ).to.be.true
    expect( is.not.finite( false ) ).to.be.true
    expect( is.not.finite( new Boolean( true ) ) ).to.be.true
    expect( is.not.finite( new Boolean( false ) ) ).to.be.true
    expect( is.not.finite( {} ) ).to.be.true
    expect( is.not.finite( [] ) ).to.be.true
    expect( is.not.finite( arguments ) ).to.be.true
    expect( is.not.finite( function () {} ) ).to.be.true
    expect( is.not.finite( new Date() ) ).to.be.true
    expect( is.not.finite( new Error() ) ).to.be.true
    expect( is.not.finite( /^/ ) ).to.be.true

  } )
  it( 'is.infinite' , function () {

    expect( is.infinite( null ) ).to.be.false
    expect( is.infinite( void 0 ) ).to.be.false
    expect( is.infinite( 0 ) ).to.be.false
    expect( is.infinite( 0 / 0 ) ).to.be.false
    expect( is.infinite( +1 / 0 ) ).to.be.true
    expect( is.infinite( -1 / 0 ) ).to.be.true
    expect( is.infinite( new Number( 0 ) ) ).to.be.false
    expect( is.infinite( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.infinite( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.infinite( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.infinite( '' ) ).to.be.false
    expect( is.infinite( new String( '' ) ) ).to.be.false
    expect( is.infinite( true ) ).to.be.false
    expect( is.infinite( false ) ).to.be.false
    expect( is.infinite( new Boolean( true ) ) ).to.be.false
    expect( is.infinite( new Boolean( false ) ) ).to.be.false
    expect( is.infinite( {} ) ).to.be.false
    expect( is.infinite( [] ) ).to.be.false
    expect( is.infinite( arguments ) ).to.be.false
    expect( is.infinite( function () {} ) ).to.be.false
    expect( is.infinite( new Date() ) ).to.be.false
    expect( is.infinite( new Error() ) ).to.be.false
    expect( is.infinite( /^/ ) ).to.be.false

    expect( is.not.infinite( null ) ).to.be.true
    expect( is.not.infinite( void 0 ) ).to.be.true
    expect( is.not.infinite( 0 ) ).to.be.true
    expect( is.not.infinite( 0 / 0 ) ).to.be.true
    expect( is.not.infinite( +1 / 0 ) ).to.be.false
    expect( is.not.infinite( -1 / 0 ) ).to.be.false
    expect( is.not.infinite( new Number( 0 ) ) ).to.be.true
    expect( is.not.infinite( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.infinite( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.infinite( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.infinite( '' ) ).to.be.true
    expect( is.not.infinite( new String( '' ) ) ).to.be.true
    expect( is.not.infinite( true ) ).to.be.true
    expect( is.not.infinite( false ) ).to.be.true
    expect( is.not.infinite( new Boolean( true ) ) ).to.be.true
    expect( is.not.infinite( new Boolean( false ) ) ).to.be.true
    expect( is.not.infinite( {} ) ).to.be.true
    expect( is.not.infinite( [] ) ).to.be.true
    expect( is.not.infinite( arguments ) ).to.be.true
    expect( is.not.infinite( function () {} ) ).to.be.true
    expect( is.not.infinite( new Date() ) ).to.be.true
    expect( is.not.infinite( new Error() ) ).to.be.true
    expect( is.not.infinite( /^/ ) ).to.be.true

  } )

  it( 'is.integer' , function () {

    expect( is.integer( null ) ).to.be.false
    expect( is.integer( void 0 ) ).to.be.false
    expect( is.integer( 0 ) ).to.be.true
    expect( is.integer( 0.1 ) ).to.be.false
    expect( is.integer( 0 / 0 ) ).to.be.false
    expect( is.integer( +1 / 0 ) ).to.be.false
    expect( is.integer( -1 / 0 ) ).to.be.false
    expect( is.integer( new Number( 0 ) ) ).to.be.false
    expect( is.integer( new Number( 0.1 ) ) ).to.be.false
    expect( is.integer( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.integer( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.integer( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.integer( '' ) ).to.be.false
    expect( is.integer( new String( '' ) ) ).to.be.false
    expect( is.integer( true ) ).to.be.false
    expect( is.integer( false ) ).to.be.false
    expect( is.integer( new Boolean( true ) ) ).to.be.false
    expect( is.integer( new Boolean( false ) ) ).to.be.false
    expect( is.integer( {} ) ).to.be.false
    expect( is.integer( [] ) ).to.be.false
    expect( is.integer( arguments ) ).to.be.false
    expect( is.integer( function () {} ) ).to.be.false
    expect( is.integer( new Date() ) ).to.be.false
    expect( is.integer( new Error() ) ).to.be.false
    expect( is.integer( /^/ ) ).to.be.false

    expect( is.not.integer( null ) ).to.be.true
    expect( is.not.integer( void 0 ) ).to.be.true
    expect( is.not.integer( 0 ) ).to.be.false
    expect( is.not.integer( 0.1 ) ).to.be.true
    expect( is.not.integer( 0 / 0 ) ).to.be.true
    expect( is.not.integer( +1 / 0 ) ).to.be.true
    expect( is.not.integer( -1 / 0 ) ).to.be.true
    expect( is.not.integer( new Number( 0 ) ) ).to.be.true
    expect( is.not.integer( new Number( 0.1 ) ) ).to.be.true
    expect( is.not.integer( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.integer( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.integer( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.integer( '' ) ).to.be.true
    expect( is.not.integer( new String( '' ) ) ).to.be.true
    expect( is.not.integer( true ) ).to.be.true
    expect( is.not.integer( false ) ).to.be.true
    expect( is.not.integer( new Boolean( true ) ) ).to.be.true
    expect( is.not.integer( new Boolean( false ) ) ).to.be.true
    expect( is.not.integer( {} ) ).to.be.true
    expect( is.not.integer( [] ) ).to.be.true
    expect( is.not.integer( arguments ) ).to.be.true
    expect( is.not.integer( function () {} ) ).to.be.true
    expect( is.not.integer( new Date() ) ).to.be.true
    expect( is.not.integer( new Error() ) ).to.be.true
    expect( is.not.integer( /^/ ) ).to.be.true

  } )
  it( 'is.safeInteger' , function () {

    expect( is.safeInteger( null ) ).to.be.false
    expect( is.safeInteger( void 0 ) ).to.be.false
    expect( is.safeInteger( 0 ) ).to.be.true
    expect( is.safeInteger( 0.1 ) ).to.be.false
    expect( is.safeInteger( MAX_SAFE_INTEGER ) ).to.be.true
    expect( is.safeInteger( MAX_SAFE_INTEGER + 1 ) ).to.be.false
    expect( is.safeInteger( MIN_SAFE_INTEGER ) ).to.be.true
    expect( is.safeInteger( MIN_SAFE_INTEGER - 1 ) ).to.be.false
    expect( is.safeInteger( 0 / 0 ) ).to.be.false
    expect( is.safeInteger( +1 / 0 ) ).to.be.false
    expect( is.safeInteger( -1 / 0 ) ).to.be.false
    expect( is.safeInteger( new Number( 0 ) ) ).to.be.false
    expect( is.safeInteger( new Number( 0.1 ) ) ).to.be.false
    expect( is.safeInteger( new Number( MAX_SAFE_INTEGER ) ) ).to.be.false
    expect( is.safeInteger( new Number( MAX_SAFE_INTEGER + 1 ) ) ).to.be.false
    expect( is.safeInteger( new Number( MIN_SAFE_INTEGER ) ) ).to.be.false
    expect( is.safeInteger( new Number( MIN_SAFE_INTEGER - 1 ) ) ).to.be.false
    expect( is.safeInteger( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.safeInteger( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.safeInteger( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.safeInteger( '' ) ).to.be.false
    expect( is.safeInteger( new String( '' ) ) ).to.be.false
    expect( is.safeInteger( true ) ).to.be.false
    expect( is.safeInteger( false ) ).to.be.false
    expect( is.safeInteger( new Boolean( true ) ) ).to.be.false
    expect( is.safeInteger( new Boolean( false ) ) ).to.be.false
    expect( is.safeInteger( {} ) ).to.be.false
    expect( is.safeInteger( [] ) ).to.be.false
    expect( is.safeInteger( arguments ) ).to.be.false
    expect( is.safeInteger( function () {} ) ).to.be.false
    expect( is.safeInteger( new Date() ) ).to.be.false
    expect( is.safeInteger( new Error() ) ).to.be.false
    expect( is.safeInteger( /^/ ) ).to.be.false

    expect( is.not.safeInteger( null ) ).to.be.true
    expect( is.not.safeInteger( void 0 ) ).to.be.true
    expect( is.not.safeInteger( 0 ) ).to.be.false
    expect( is.not.safeInteger( 0.1 ) ).to.be.true
    expect( is.not.safeInteger( MAX_SAFE_INTEGER ) ).to.be.false
    expect( is.not.safeInteger( MAX_SAFE_INTEGER + 1 ) ).to.be.true
    expect( is.not.safeInteger( MIN_SAFE_INTEGER ) ).to.be.false
    expect( is.not.safeInteger( MIN_SAFE_INTEGER - 1 ) ).to.be.true
    expect( is.not.safeInteger( 0 / 0 ) ).to.be.true
    expect( is.not.safeInteger( +1 / 0 ) ).to.be.true
    expect( is.not.safeInteger( -1 / 0 ) ).to.be.true
    expect( is.not.safeInteger( new Number( 0 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( 0.1 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( MAX_SAFE_INTEGER ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( MAX_SAFE_INTEGER + 1 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( MIN_SAFE_INTEGER ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( MIN_SAFE_INTEGER - 1 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.safeInteger( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.safeInteger( '' ) ).to.be.true
    expect( is.not.safeInteger( new String( '' ) ) ).to.be.true
    expect( is.not.safeInteger( true ) ).to.be.true
    expect( is.not.safeInteger( false ) ).to.be.true
    expect( is.not.safeInteger( new Boolean( true ) ) ).to.be.true
    expect( is.not.safeInteger( new Boolean( false ) ) ).to.be.true
    expect( is.not.safeInteger( {} ) ).to.be.true
    expect( is.not.safeInteger( [] ) ).to.be.true
    expect( is.not.safeInteger( arguments ) ).to.be.true
    expect( is.not.safeInteger( function () {} ) ).to.be.true
    expect( is.not.safeInteger( new Date() ) ).to.be.true
    expect( is.not.safeInteger( new Error() ) ).to.be.true
    expect( is.not.safeInteger( /^/ ) ).to.be.true

  } )

} )
