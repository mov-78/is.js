/* global expect, is */
/* eslint-env mocha */
/* eslint no-array-constructor: 0, no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:array' , function () {

  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1

  it( 'is.array' , function () {

    expect( is.array( null ) ).to.be.false
    expect( is.array( void 0 ) ).to.be.false
    expect( is.array( 0 ) ).to.be.false
    expect( is.array( 0 / 0 ) ).to.be.false
    expect( is.array( +1 / 0 ) ).to.be.false
    expect( is.array( -1 / 0 ) ).to.be.false
    expect( is.array( new Number( 0 ) ) ).to.be.false
    expect( is.array( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.array( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.array( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.array( '' ) ).to.be.false
    expect( is.array( new String( '' ) ) ).to.be.false
    expect( is.array( true ) ).to.be.false
    expect( is.array( false ) ).to.be.false
    expect( is.array( new Boolean( true ) ) ).to.be.false
    expect( is.array( new Boolean( false ) ) ).to.be.false
    expect( is.array( {} ) ).to.be.false
    expect( is.array( { length : 0 } ) ).to.be.false
    expect( is.array( { length : '0' } ) ).to.be.false
    expect( is.array( { length : 0.1 } ) ).to.be.false
    expect( is.array( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.false
    expect( is.array( [] ) ).to.be.true
    expect( is.array( new Array() ) ).to.be.true
    expect( is.array( new Array( 5 ) ) ).to.be.true
    expect( is.array( arguments ) ).to.be.false
    expect( is.array( function () {} ) ).to.be.false
    expect( is.array( new Date() ) ).to.be.false
    expect( is.array( new Error() ) ).to.be.false
    expect( is.array( /^/ ) ).to.be.false

    expect( is.not.array( null ) ).to.be.true
    expect( is.not.array( void 0 ) ).to.be.true
    expect( is.not.array( 0 ) ).to.be.true
    expect( is.not.array( 0 / 0 ) ).to.be.true
    expect( is.not.array( +1 / 0 ) ).to.be.true
    expect( is.not.array( -1 / 0 ) ).to.be.true
    expect( is.not.array( new Number( 0 ) ) ).to.be.true
    expect( is.not.array( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.array( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.array( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.array( '' ) ).to.be.true
    expect( is.not.array( new String( '' ) ) ).to.be.true
    expect( is.not.array( true ) ).to.be.true
    expect( is.not.array( false ) ).to.be.true
    expect( is.not.array( new Boolean( true ) ) ).to.be.true
    expect( is.not.array( new Boolean( false ) ) ).to.be.true
    expect( is.not.array( {} ) ).to.be.true
    expect( is.not.array( { length : 0 } ) ).to.be.true
    expect( is.not.array( { length : '0' } ) ).to.be.true
    expect( is.not.array( { length : 0.1 } ) ).to.be.true
    expect( is.not.array( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.true
    expect( is.not.array( [] ) ).to.be.false
    expect( is.not.array( new Array() ) ).to.be.false
    expect( is.not.array( new Array( 5 ) ) ).to.be.false
    expect( is.not.array( arguments ) ).to.be.true
    expect( is.not.array( function () {} ) ).to.be.true
    expect( is.not.array( new Date() ) ).to.be.true
    expect( is.not.array( new Error() ) ).to.be.true
    expect( is.not.array( /^/ ) ).to.be.true

  } )

  it( 'is.arrayLike' , function () {

    expect( is.arrayLike( null ) ).to.be.false
    expect( is.arrayLike( void 0 ) ).to.be.false
    expect( is.arrayLike( 0 ) ).to.be.false
    expect( is.arrayLike( 0 / 0 ) ).to.be.false
    expect( is.arrayLike( +1 / 0 ) ).to.be.false
    expect( is.arrayLike( -1 / 0 ) ).to.be.false
    expect( is.arrayLike( new Number( 0 ) ) ).to.be.false
    expect( is.arrayLike( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.arrayLike( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.arrayLike( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.arrayLike( '' ) ).to.be.true
    expect( is.arrayLike( new String( '' ) ) ).to.be.true
    expect( is.arrayLike( true ) ).to.be.false
    expect( is.arrayLike( false ) ).to.be.false
    expect( is.arrayLike( new Boolean( true ) ) ).to.be.false
    expect( is.arrayLike( new Boolean( false ) ) ).to.be.false
    expect( is.arrayLike( {} ) ).to.be.false
    expect( is.arrayLike( { length : 0 } ) ).to.be.true
    expect( is.arrayLike( { length : '0' } ) ).to.be.false
    expect( is.arrayLike( { length : 0.1 } ) ).to.be.false
    expect( is.arrayLike( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.false
    expect( is.arrayLike( [] ) ).to.be.true
    expect( is.arrayLike( new Array() ) ).to.be.true
    expect( is.arrayLike( new Array( 5 ) ) ).to.be.true
    expect( is.arrayLike( arguments ) ).to.be.true
    expect( is.arrayLike( function () {} ) ).to.be.false
    expect( is.arrayLike( new Date() ) ).to.be.false
    expect( is.arrayLike( new Error() ) ).to.be.false
    expect( is.arrayLike( /^/ ) ).to.be.false

    expect( is.not.arrayLike( null ) ).to.be.true
    expect( is.not.arrayLike( void 0 ) ).to.be.true
    expect( is.not.arrayLike( 0 ) ).to.be.true
    expect( is.not.arrayLike( 0 / 0 ) ).to.be.true
    expect( is.not.arrayLike( +1 / 0 ) ).to.be.true
    expect( is.not.arrayLike( -1 / 0 ) ).to.be.true
    expect( is.not.arrayLike( new Number( 0 ) ) ).to.be.true
    expect( is.not.arrayLike( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.arrayLike( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.arrayLike( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.arrayLike( '' ) ).to.be.false
    expect( is.not.arrayLike( new String( '' ) ) ).to.be.false
    expect( is.not.arrayLike( true ) ).to.be.true
    expect( is.not.arrayLike( false ) ).to.be.true
    expect( is.not.arrayLike( new Boolean( true ) ) ).to.be.true
    expect( is.not.arrayLike( new Boolean( false ) ) ).to.be.true
    expect( is.not.arrayLike( {} ) ).to.be.true
    expect( is.not.arrayLike( { length : 0 } ) ).to.be.false
    expect( is.not.arrayLike( { length : '0' } ) ).to.be.true
    expect( is.not.arrayLike( { length : 0.1 } ) ).to.be.true
    expect( is.not.arrayLike( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.true
    expect( is.not.arrayLike( [] ) ).to.be.false
    expect( is.not.arrayLike( new Array() ) ).to.be.false
    expect( is.not.arrayLike( new Array( 5 ) ) ).to.be.false
    expect( is.not.arrayLike( arguments ) ).to.be.false
    expect( is.not.arrayLike( function () {} ) ).to.be.true
    expect( is.not.arrayLike( new Date() ) ).to.be.true
    expect( is.not.arrayLike( new Error() ) ).to.be.true
    expect( is.not.arrayLike( /^/ ) ).to.be.true

  } )

  it( 'is.arguments' , function () {

    expect( is.arguments( null ) ).to.be.false
    expect( is.arguments( void 0 ) ).to.be.false
    expect( is.arguments( 0 ) ).to.be.false
    expect( is.arguments( 0 / 0 ) ).to.be.false
    expect( is.arguments( +1 / 0 ) ).to.be.false
    expect( is.arguments( -1 / 0 ) ).to.be.false
    expect( is.arguments( new Number( 0 ) ) ).to.be.false
    expect( is.arguments( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.arguments( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.arguments( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.arguments( '' ) ).to.be.false
    expect( is.arguments( new String( '' ) ) ).to.be.false
    expect( is.arguments( true ) ).to.be.false
    expect( is.arguments( false ) ).to.be.false
    expect( is.arguments( new Boolean( true ) ) ).to.be.false
    expect( is.arguments( new Boolean( false ) ) ).to.be.false
    expect( is.arguments( {} ) ).to.be.false
    expect( is.arguments( { length : 0 } ) ).to.be.false
    expect( is.arguments( { length : '0' } ) ).to.be.false
    expect( is.arguments( { length : 0.1 } ) ).to.be.false
    expect( is.arguments( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.false
    expect( is.arguments( [] ) ).to.be.false
    expect( is.arguments( new Array() ) ).to.be.false
    expect( is.arguments( new Array( 5 ) ) ).to.be.false
    expect( is.arguments( arguments ) ).to.be.true
    expect( is.arguments( function () {} ) ).to.be.false
    expect( is.arguments( new Date() ) ).to.be.false
    expect( is.arguments( new Error() ) ).to.be.false
    expect( is.arguments( /^/ ) ).to.be.false

    expect( is.not.arguments( null ) ).to.be.true
    expect( is.not.arguments( void 0 ) ).to.be.true
    expect( is.not.arguments( 0 ) ).to.be.true
    expect( is.not.arguments( 0 / 0 ) ).to.be.true
    expect( is.not.arguments( +1 / 0 ) ).to.be.true
    expect( is.not.arguments( -1 / 0 ) ).to.be.true
    expect( is.not.arguments( new Number( 0 ) ) ).to.be.true
    expect( is.not.arguments( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.arguments( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.arguments( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.arguments( '' ) ).to.be.true
    expect( is.not.arguments( new String( '' ) ) ).to.be.true
    expect( is.not.arguments( true ) ).to.be.true
    expect( is.not.arguments( false ) ).to.be.true
    expect( is.not.arguments( new Boolean( true ) ) ).to.be.true
    expect( is.not.arguments( new Boolean( false ) ) ).to.be.true
    expect( is.not.arguments( {} ) ).to.be.true
    expect( is.not.arguments( { length : 0 } ) ).to.be.true
    expect( is.not.arguments( { length : '0' } ) ).to.be.true
    expect( is.not.arguments( { length : 0.1 } ) ).to.be.true
    expect( is.not.arguments( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.true
    expect( is.not.arguments( [] ) ).to.be.true
    expect( is.not.arguments( new Array() ) ).to.be.true
    expect( is.not.arguments( new Array( 5 ) ) ).to.be.true
    expect( is.not.arguments( arguments ) ).to.be.false
    expect( is.not.arguments( function () {} ) ).to.be.true
    expect( is.not.arguments( new Date() ) ).to.be.true
    expect( is.not.arguments( new Error() ) ).to.be.true
    expect( is.not.arguments( /^/ ) ).to.be.true

  } )

  it( 'is.emptyArray' , function () {

    expect( is.emptyArray( null ) ).to.be.false
    expect( is.emptyArray( void 0 ) ).to.be.false
    expect( is.emptyArray( 0 ) ).to.be.false
    expect( is.emptyArray( 0 / 0 ) ).to.be.false
    expect( is.emptyArray( +1 / 0 ) ).to.be.false
    expect( is.emptyArray( -1 / 0 ) ).to.be.false
    expect( is.emptyArray( new Number( 0 ) ) ).to.be.false
    expect( is.emptyArray( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.emptyArray( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.emptyArray( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.emptyArray( '' ) ).to.be.false
    expect( is.emptyArray( 'lipsum' ) ).to.be.false
    expect( is.emptyArray( new String( '' ) ) ).to.be.false
    expect( is.emptyArray( true ) ).to.be.false
    expect( is.emptyArray( false ) ).to.be.false
    expect( is.emptyArray( new Boolean( true ) ) ).to.be.false
    expect( is.emptyArray( new Boolean( false ) ) ).to.be.false
    expect( is.emptyArray( {} ) ).to.be.false
    expect( is.emptyArray( { length : 0 } ) ).to.be.false
    expect( is.emptyArray( { length : 1 } ) ).to.be.false
    expect( is.emptyArray( { length : '0' } ) ).to.be.false
    expect( is.emptyArray( { length : 0.1 } ) ).to.be.false
    expect( is.emptyArray( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.false
    expect( is.emptyArray( [] ) ).to.be.true
    expect( is.emptyArray( [ 0 ] ) ).to.be.false
    expect( is.emptyArray( new Array() ) ).to.be.true
    expect( is.emptyArray( new Array( 5 ) ) ).to.be.false
    expect( is.emptyArray( arguments ) ).to.be.false
    expect( is.emptyArray( function () {} ) ).to.be.false
    expect( is.emptyArray( new Date() ) ).to.be.false
    expect( is.emptyArray( new Error() ) ).to.be.false
    expect( is.emptyArray( /^/ ) ).to.be.false

    expect( is.not.emptyArray( null ) ).to.be.true
    expect( is.not.emptyArray( void 0 ) ).to.be.true
    expect( is.not.emptyArray( 0 ) ).to.be.true
    expect( is.not.emptyArray( 0 / 0 ) ).to.be.true
    expect( is.not.emptyArray( +1 / 0 ) ).to.be.true
    expect( is.not.emptyArray( -1 / 0 ) ).to.be.true
    expect( is.not.emptyArray( new Number( 0 ) ) ).to.be.true
    expect( is.not.emptyArray( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.emptyArray( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.emptyArray( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.emptyArray( '' ) ).to.be.true
    expect( is.not.emptyArray( 'lipsum' ) ).to.be.true
    expect( is.not.emptyArray( new String( '' ) ) ).to.be.true
    expect( is.not.emptyArray( true ) ).to.be.true
    expect( is.not.emptyArray( false ) ).to.be.true
    expect( is.not.emptyArray( new Boolean( true ) ) ).to.be.true
    expect( is.not.emptyArray( new Boolean( false ) ) ).to.be.true
    expect( is.not.emptyArray( {} ) ).to.be.true
    expect( is.not.emptyArray( { length : 0 } ) ).to.be.true
    expect( is.not.emptyArray( { length : 1 } ) ).to.be.true
    expect( is.not.emptyArray( { length : '0' } ) ).to.be.true
    expect( is.not.emptyArray( { length : 0.1 } ) ).to.be.true
    expect( is.not.emptyArray( { length : MAX_SAFE_INTEGER + 1 } ) ).to.be.true
    expect( is.not.emptyArray( [] ) ).to.be.false
    expect( is.not.emptyArray( [ 0 ] ) ).to.be.true
    expect( is.not.emptyArray( new Array() ) ).to.be.false
    expect( is.not.emptyArray( new Array( 5 ) ) ).to.be.true
    expect( is.not.emptyArray( arguments ) ).to.be.true
    expect( is.not.emptyArray( function () {} ) ).to.be.true
    expect( is.not.emptyArray( new Date() ) ).to.be.true
    expect( is.not.emptyArray( new Error() ) ).to.be.true
    expect( is.not.emptyArray( /^/ ) ).to.be.true

  } )

} )
