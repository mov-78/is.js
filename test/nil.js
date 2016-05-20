/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:nil' , function () {

  it( 'is.null' , function () {

    expect( is.null( null ) ).to.be.true
    expect( is.null( void 0 ) ).to.be.false
    expect( is.null( 0 ) ).to.be.false
    expect( is.null( 0 / 0 ) ).to.be.false
    expect( is.null( +1 / 0 ) ).to.be.false
    expect( is.null( -1 / 0 ) ).to.be.false
    expect( is.null( new Number( 0 ) ) ).to.be.false
    expect( is.null( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.null( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.null( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.null( '' ) ).to.be.false
    expect( is.null( new String( '' ) ) ).to.be.false
    expect( is.null( true ) ).to.be.false
    expect( is.null( false ) ).to.be.false
    expect( is.null( new Boolean( true ) ) ).to.be.false
    expect( is.null( new Boolean( false ) ) ).to.be.false
    expect( is.null( {} ) ).to.be.false
    expect( is.null( [] ) ).to.be.false
    expect( is.null( arguments ) ).to.be.false
    expect( is.null( function () {} ) ).to.be.false
    expect( is.null( new Date() ) ).to.be.false
    expect( is.null( new Error() ) ).to.be.false
    expect( is.null( /^/ ) ).to.be.false

    expect( is.not.null( null ) ).to.be.false
    expect( is.not.null( void 0 ) ).to.be.true
    expect( is.not.null( 0 ) ).to.be.true
    expect( is.not.null( 0 / 0 ) ).to.be.true
    expect( is.not.null( +1 / 0 ) ).to.be.true
    expect( is.not.null( -1 / 0 ) ).to.be.true
    expect( is.not.null( new Number( 0 ) ) ).to.be.true
    expect( is.not.null( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.null( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.null( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.null( '' ) ).to.be.true
    expect( is.not.null( new String( '' ) ) ).to.be.true
    expect( is.not.null( true ) ).to.be.true
    expect( is.not.null( false ) ).to.be.true
    expect( is.not.null( new Boolean( true ) ) ).to.be.true
    expect( is.not.null( new Boolean( false ) ) ).to.be.true
    expect( is.not.null( {} ) ).to.be.true
    expect( is.not.null( [] ) ).to.be.true
    expect( is.not.null( arguments ) ).to.be.true
    expect( is.not.null( function () {} ) ).to.be.true
    expect( is.not.null( new Date() ) ).to.be.true
    expect( is.not.null( new Error() ) ).to.be.true
    expect( is.not.null( /^/ ) ).to.be.true

  } )

  it( 'is.undefined' , function () {

    expect( is.undefined( null ) ).to.be.false
    expect( is.undefined( void 0 ) ).to.be.true
    expect( is.undefined( 0 ) ).to.be.false
    expect( is.undefined( 0 / 0 ) ).to.be.false
    expect( is.undefined( +1 / 0 ) ).to.be.false
    expect( is.undefined( -1 / 0 ) ).to.be.false
    expect( is.undefined( new Number( 0 ) ) ).to.be.false
    expect( is.undefined( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.undefined( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.undefined( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.undefined( '' ) ).to.be.false
    expect( is.undefined( new String( '' ) ) ).to.be.false
    expect( is.undefined( true ) ).to.be.false
    expect( is.undefined( false ) ).to.be.false
    expect( is.undefined( new Boolean( true ) ) ).to.be.false
    expect( is.undefined( new Boolean( false ) ) ).to.be.false
    expect( is.undefined( {} ) ).to.be.false
    expect( is.undefined( [] ) ).to.be.false
    expect( is.undefined( arguments ) ).to.be.false
    expect( is.undefined( function () {} ) ).to.be.false
    expect( is.undefined( new Date() ) ).to.be.false
    expect( is.undefined( new Error() ) ).to.be.false
    expect( is.undefined( /^/ ) ).to.be.false

    expect( is.not.undefined( null ) ).to.be.true
    expect( is.not.undefined( void 0 ) ).to.be.false
    expect( is.not.undefined( 0 ) ).to.be.true
    expect( is.not.undefined( 0 / 0 ) ).to.be.true
    expect( is.not.undefined( +1 / 0 ) ).to.be.true
    expect( is.not.undefined( -1 / 0 ) ).to.be.true
    expect( is.not.undefined( new Number( 0 ) ) ).to.be.true
    expect( is.not.undefined( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.undefined( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.undefined( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.undefined( '' ) ).to.be.true
    expect( is.not.undefined( new String( '' ) ) ).to.be.true
    expect( is.not.undefined( true ) ).to.be.true
    expect( is.not.undefined( false ) ).to.be.true
    expect( is.not.undefined( new Boolean( true ) ) ).to.be.true
    expect( is.not.undefined( new Boolean( false ) ) ).to.be.true
    expect( is.not.undefined( {} ) ).to.be.true
    expect( is.not.undefined( [] ) ).to.be.true
    expect( is.not.undefined( arguments ) ).to.be.true
    expect( is.not.undefined( function () {} ) ).to.be.true
    expect( is.not.undefined( new Date() ) ).to.be.true
    expect( is.not.undefined( new Error() ) ).to.be.true
    expect( is.not.undefined( /^/ ) ).to.be.true

  } )

  it( 'is.nil' , function () {

    expect( is.nil( null ) ).to.be.true
    expect( is.nil( void 0 ) ).to.be.true
    expect( is.nil( 0 ) ).to.be.false
    expect( is.nil( 0 / 0 ) ).to.be.false
    expect( is.nil( +1 / 0 ) ).to.be.false
    expect( is.nil( -1 / 0 ) ).to.be.false
    expect( is.nil( new Number( 0 ) ) ).to.be.false
    expect( is.nil( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.nil( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.nil( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.nil( '' ) ).to.be.false
    expect( is.nil( new String( '' ) ) ).to.be.false
    expect( is.nil( true ) ).to.be.false
    expect( is.nil( false ) ).to.be.false
    expect( is.nil( new Boolean( true ) ) ).to.be.false
    expect( is.nil( new Boolean( false ) ) ).to.be.false
    expect( is.nil( {} ) ).to.be.false
    expect( is.nil( [] ) ).to.be.false
    expect( is.nil( arguments ) ).to.be.false
    expect( is.nil( function () {} ) ).to.be.false
    expect( is.nil( new Date() ) ).to.be.false
    expect( is.nil( new Error() ) ).to.be.false
    expect( is.nil( /^/ ) ).to.be.false

    expect( is.not.nil( null ) ).to.be.false
    expect( is.not.nil( void 0 ) ).to.be.false
    expect( is.not.nil( 0 ) ).to.be.true
    expect( is.not.nil( 0 / 0 ) ).to.be.true
    expect( is.not.nil( +1 / 0 ) ).to.be.true
    expect( is.not.nil( -1 / 0 ) ).to.be.true
    expect( is.not.nil( new Number( 0 ) ) ).to.be.true
    expect( is.not.nil( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.nil( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.nil( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.nil( '' ) ).to.be.true
    expect( is.not.nil( new String( '' ) ) ).to.be.true
    expect( is.not.nil( true ) ).to.be.true
    expect( is.not.nil( false ) ).to.be.true
    expect( is.not.nil( new Boolean( true ) ) ).to.be.true
    expect( is.not.nil( new Boolean( false ) ) ).to.be.true
    expect( is.not.nil( {} ) ).to.be.true
    expect( is.not.nil( [] ) ).to.be.true
    expect( is.not.nil( arguments ) ).to.be.true
    expect( is.not.nil( function () {} ) ).to.be.true
    expect( is.not.nil( new Date() ) ).to.be.true
    expect( is.not.nil( new Error() ) ).to.be.true
    expect( is.not.nil( /^/ ) ).to.be.true

  } )

} )
