/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-func: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:function' , function () {

  it( 'is.function' , function () {

    expect( is.function( null ) ).to.be.false
    expect( is.function( void 0 ) ).to.be.false
    expect( is.function( 0 ) ).to.be.false
    expect( is.function( 0 / 0 ) ).to.be.false
    expect( is.function( +1 / 0 ) ).to.be.false
    expect( is.function( -1 / 0 ) ).to.be.false
    expect( is.function( new Number( 0 ) ) ).to.be.false
    expect( is.function( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.function( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.function( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.function( '' ) ).to.be.false
    expect( is.function( new String( '' ) ) ).to.be.false
    expect( is.function( true ) ).to.be.false
    expect( is.function( false ) ).to.be.false
    expect( is.function( new Boolean( true ) ) ).to.be.false
    expect( is.function( new Boolean( false ) ) ).to.be.false
    expect( is.function( {} ) ).to.be.false
    expect( is.function( [] ) ).to.be.false
    expect( is.function( arguments ) ).to.be.false
    expect( is.function( function () {} ) ).to.be.true
    expect( is.function( new Function() ) ).to.be.true
    expect( is.function( new Date() ) ).to.be.false
    expect( is.function( new Error() ) ).to.be.false
    expect( is.function( /^/ ) ).to.be.false

    expect( is.not.function( null ) ).to.be.true
    expect( is.not.function( void 0 ) ).to.be.true
    expect( is.not.function( 0 ) ).to.be.true
    expect( is.not.function( 0 / 0 ) ).to.be.true
    expect( is.not.function( +1 / 0 ) ).to.be.true
    expect( is.not.function( -1 / 0 ) ).to.be.true
    expect( is.not.function( new Number( 0 ) ) ).to.be.true
    expect( is.not.function( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.function( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.function( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.function( '' ) ).to.be.true
    expect( is.not.function( new String( '' ) ) ).to.be.true
    expect( is.not.function( true ) ).to.be.true
    expect( is.not.function( false ) ).to.be.true
    expect( is.not.function( new Boolean( true ) ) ).to.be.true
    expect( is.not.function( new Boolean( false ) ) ).to.be.true
    expect( is.not.function( {} ) ).to.be.true
    expect( is.not.function( [] ) ).to.be.true
    expect( is.not.function( arguments ) ).to.be.true
    expect( is.not.function( function () {} ) ).to.be.false
    expect( is.not.function( new Function() ) ).to.be.false
    expect( is.not.function( new Date() ) ).to.be.true
    expect( is.not.function( new Error() ) ).to.be.true
    expect( is.not.function( /^/ ) ).to.be.true

  } )

} )
