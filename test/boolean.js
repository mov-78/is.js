/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:boolean' , function () {

  it( 'is.boolean' , function () {

    expect( is.boolean( null ) ).to.be.false
    expect( is.boolean( void 0 ) ).to.be.false
    expect( is.boolean( 0 ) ).to.be.false
    expect( is.boolean( 1 ) ).to.be.false
    expect( is.boolean( 0 / 0 ) ).to.be.false
    expect( is.boolean( +1 / 0 ) ).to.be.false
    expect( is.boolean( -1 / 0 ) ).to.be.false
    expect( is.boolean( new Number( 0 ) ) ).to.be.false
    expect( is.boolean( new Number( 1 ) ) ).to.be.false
    expect( is.boolean( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.boolean( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.boolean( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.boolean( '' ) ).to.be.false
    expect( is.boolean( 'lipsum' ) ).to.be.false
    expect( is.boolean( new String( '' ) ) ).to.be.false
    expect( is.boolean( new String( 'lipsum' ) ) ).to.be.false
    expect( is.boolean( true ) ).to.be.true
    expect( is.boolean( false ) ).to.be.true
    expect( is.boolean( new Boolean( true ) ) ).to.be.true
    expect( is.boolean( new Boolean( false ) ) ).to.be.true
    expect( is.boolean( {} ) ).to.be.false
    expect( is.boolean( [] ) ).to.be.false
    expect( is.boolean( arguments ) ).to.be.false
    expect( is.boolean( function () {} ) ).to.be.false
    expect( is.boolean( new Date() ) ).to.be.false
    expect( is.boolean( new Error() ) ).to.be.false
    expect( is.boolean( /^/ ) ).to.be.false

    expect( is.not.boolean( null ) ).to.be.true
    expect( is.not.boolean( void 0 ) ).to.be.true
    expect( is.not.boolean( 0 ) ).to.be.true
    expect( is.not.boolean( 1 ) ).to.be.true
    expect( is.not.boolean( 0 / 0 ) ).to.be.true
    expect( is.not.boolean( +1 / 0 ) ).to.be.true
    expect( is.not.boolean( -1 / 0 ) ).to.be.true
    expect( is.not.boolean( new Number( 0 ) ) ).to.be.true
    expect( is.not.boolean( new Number( 1 ) ) ).to.be.true
    expect( is.not.boolean( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.boolean( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.boolean( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.boolean( '' ) ).to.be.true
    expect( is.not.boolean( 'lipsum' ) ).to.be.true
    expect( is.not.boolean( new String( '' ) ) ).to.be.true
    expect( is.not.boolean( new String( 'lipsum' ) ) ).to.be.true
    expect( is.not.boolean( true ) ).to.be.false
    expect( is.not.boolean( false ) ).to.be.false
    expect( is.not.boolean( new Boolean( true ) ) ).to.be.false
    expect( is.not.boolean( new Boolean( false ) ) ).to.be.false
    expect( is.not.boolean( {} ) ).to.be.true
    expect( is.not.boolean( [] ) ).to.be.true
    expect( is.not.boolean( arguments ) ).to.be.true
    expect( is.not.boolean( function () {} ) ).to.be.true
    expect( is.not.boolean( new Date() ) ).to.be.true
    expect( is.not.boolean( new Error() ) ).to.be.true
    expect( is.not.boolean( /^/ ) ).to.be.true

  } )

  it( 'is.true' , function () {

    expect( is.true( null ) ).to.be.false
    expect( is.true( void 0 ) ).to.be.false
    expect( is.true( 0 ) ).to.be.false
    expect( is.true( 1 ) ).to.be.false
    expect( is.true( 0 / 0 ) ).to.be.false
    expect( is.true( +1 / 0 ) ).to.be.false
    expect( is.true( -1 / 0 ) ).to.be.false
    expect( is.true( new Number( 0 ) ) ).to.be.false
    expect( is.true( new Number( 1 ) ) ).to.be.false
    expect( is.true( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.true( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.true( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.true( '' ) ).to.be.false
    expect( is.true( 'lipsum' ) ).to.be.false
    expect( is.true( new String( '' ) ) ).to.be.false
    expect( is.true( new String( 'lipsum' ) ) ).to.be.false
    expect( is.true( true ) ).to.be.true
    expect( is.true( false ) ).to.be.false
    expect( is.true( new Boolean( true ) ) ).to.be.false
    expect( is.true( new Boolean( false ) ) ).to.be.false
    expect( is.true( {} ) ).to.be.false
    expect( is.true( [] ) ).to.be.false
    expect( is.true( arguments ) ).to.be.false
    expect( is.true( function () {} ) ).to.be.false
    expect( is.true( new Date() ) ).to.be.false
    expect( is.true( new Error() ) ).to.be.false
    expect( is.true( /^/ ) ).to.be.false

    expect( is.not.true( null ) ).to.be.true
    expect( is.not.true( void 0 ) ).to.be.true
    expect( is.not.true( 0 ) ).to.be.true
    expect( is.not.true( 1 ) ).to.be.true
    expect( is.not.true( 0 / 0 ) ).to.be.true
    expect( is.not.true( +1 / 0 ) ).to.be.true
    expect( is.not.true( -1 / 0 ) ).to.be.true
    expect( is.not.true( new Number( 0 ) ) ).to.be.true
    expect( is.not.true( new Number( 1 ) ) ).to.be.true
    expect( is.not.true( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.true( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.true( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.true( '' ) ).to.be.true
    expect( is.not.true( 'lipsum' ) ).to.be.true
    expect( is.not.true( new String( '' ) ) ).to.be.true
    expect( is.not.true( new String( 'lipsum' ) ) ).to.be.true
    expect( is.not.true( true ) ).to.be.false
    expect( is.not.true( false ) ).to.be.true
    expect( is.not.true( new Boolean( true ) ) ).to.be.true
    expect( is.not.true( new Boolean( false ) ) ).to.be.true
    expect( is.not.true( {} ) ).to.be.true
    expect( is.not.true( [] ) ).to.be.true
    expect( is.not.true( arguments ) ).to.be.true
    expect( is.not.true( function () {} ) ).to.be.true
    expect( is.not.true( new Date() ) ).to.be.true
    expect( is.not.true( new Error() ) ).to.be.true
    expect( is.not.true( /^/ ) ).to.be.true

  } )
  it( 'is.false' , function () {

    expect( is.false( null ) ).to.be.false
    expect( is.false( void 0 ) ).to.be.false
    expect( is.false( 0 ) ).to.be.false
    expect( is.false( 1 ) ).to.be.false
    expect( is.false( 0 / 0 ) ).to.be.false
    expect( is.false( +1 / 0 ) ).to.be.false
    expect( is.false( -1 / 0 ) ).to.be.false
    expect( is.false( new Number( 0 ) ) ).to.be.false
    expect( is.false( new Number( 1 ) ) ).to.be.false
    expect( is.false( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.false( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.false( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.false( '' ) ).to.be.false
    expect( is.false( 'lipsum' ) ).to.be.false
    expect( is.false( new String( '' ) ) ).to.be.false
    expect( is.false( new String( 'lipsum' ) ) ).to.be.false
    expect( is.false( true ) ).to.be.false
    expect( is.false( false ) ).to.be.true
    expect( is.false( new Boolean( true ) ) ).to.be.false
    expect( is.false( new Boolean( false ) ) ).to.be.false
    expect( is.false( {} ) ).to.be.false
    expect( is.false( [] ) ).to.be.false
    expect( is.false( arguments ) ).to.be.false
    expect( is.false( function () {} ) ).to.be.false
    expect( is.false( new Date() ) ).to.be.false
    expect( is.false( new Error() ) ).to.be.false
    expect( is.false( /^/ ) ).to.be.false

    expect( is.not.false( null ) ).to.be.true
    expect( is.not.false( void 0 ) ).to.be.true
    expect( is.not.false( 0 ) ).to.be.true
    expect( is.not.false( 1 ) ).to.be.true
    expect( is.not.false( 0 / 0 ) ).to.be.true
    expect( is.not.false( +1 / 0 ) ).to.be.true
    expect( is.not.false( -1 / 0 ) ).to.be.true
    expect( is.not.false( new Number( 0 ) ) ).to.be.true
    expect( is.not.false( new Number( 1 ) ) ).to.be.true
    expect( is.not.false( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.false( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.false( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.false( '' ) ).to.be.true
    expect( is.not.false( 'lipsum' ) ).to.be.true
    expect( is.not.false( new String( '' ) ) ).to.be.true
    expect( is.not.false( new String( 'lipsum' ) ) ).to.be.true
    expect( is.not.false( true ) ).to.be.true
    expect( is.not.false( false ) ).to.be.false
    expect( is.not.false( new Boolean( true ) ) ).to.be.true
    expect( is.not.false( new Boolean( false ) ) ).to.be.true
    expect( is.not.false( {} ) ).to.be.true
    expect( is.not.false( [] ) ).to.be.true
    expect( is.not.false( arguments ) ).to.be.true
    expect( is.not.false( function () {} ) ).to.be.true
    expect( is.not.false( new Date() ) ).to.be.true
    expect( is.not.false( new Error() ) ).to.be.true
    expect( is.not.false( /^/ ) ).to.be.true

  } )

  it( 'is.truthy' , function () {

    expect( is.truthy( null ) ).to.be.false
    expect( is.truthy( void 0 ) ).to.be.false
    expect( is.truthy( 0 ) ).to.be.false
    expect( is.truthy( 1 ) ).to.be.true
    expect( is.truthy( 0 / 0 ) ).to.be.false
    expect( is.truthy( +1 / 0 ) ).to.be.true
    expect( is.truthy( -1 / 0 ) ).to.be.true
    expect( is.truthy( new Number( 0 ) ) ).to.be.true
    expect( is.truthy( new Number( 1 ) ) ).to.be.true
    expect( is.truthy( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.truthy( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.truthy( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.truthy( '' ) ).to.be.false
    expect( is.truthy( 'lipsum' ) ).to.be.true
    expect( is.truthy( new String( '' ) ) ).to.be.true
    expect( is.truthy( new String( 'lipsum' ) ) ).to.be.true
    expect( is.truthy( true ) ).to.be.true
    expect( is.truthy( false ) ).to.be.false
    expect( is.truthy( new Boolean( true ) ) ).to.be.true
    expect( is.truthy( new Boolean( false ) ) ).to.be.true
    expect( is.truthy( {} ) ).to.be.true
    expect( is.truthy( [] ) ).to.be.true
    expect( is.truthy( arguments ) ).to.be.true
    expect( is.truthy( function () {} ) ).to.be.true
    expect( is.truthy( new Date() ) ).to.be.true
    expect( is.truthy( new Error() ) ).to.be.true
    expect( is.truthy( /^/ ) ).to.be.true

    expect( is.not.truthy( null ) ).to.be.true
    expect( is.not.truthy( void 0 ) ).to.be.true
    expect( is.not.truthy( 0 ) ).to.be.true
    expect( is.not.truthy( 1 ) ).to.be.false
    expect( is.not.truthy( 0 / 0 ) ).to.be.true
    expect( is.not.truthy( +1 / 0 ) ).to.be.false
    expect( is.not.truthy( -1 / 0 ) ).to.be.false
    expect( is.not.truthy( new Number( 0 ) ) ).to.be.false
    expect( is.not.truthy( new Number( 1 ) ) ).to.be.false
    expect( is.not.truthy( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.truthy( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.not.truthy( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.not.truthy( '' ) ).to.be.true
    expect( is.not.truthy( 'lipsum' ) ).to.be.false
    expect( is.not.truthy( new String( '' ) ) ).to.be.false
    expect( is.not.truthy( new String( 'lipsum' ) ) ).to.be.false
    expect( is.not.truthy( true ) ).to.be.false
    expect( is.not.truthy( false ) ).to.be.true
    expect( is.not.truthy( new Boolean( true ) ) ).to.be.false
    expect( is.not.truthy( new Boolean( false ) ) ).to.be.false
    expect( is.not.truthy( {} ) ).to.be.false
    expect( is.not.truthy( [] ) ).to.be.false
    expect( is.not.truthy( arguments ) ).to.be.false
    expect( is.not.truthy( function () {} ) ).to.be.false
    expect( is.not.truthy( new Date() ) ).to.be.false
    expect( is.not.truthy( new Error() ) ).to.be.false
    expect( is.not.truthy( /^/ ) ).to.be.false

  } )
  it( 'is.falsy' , function () {

    expect( is.falsy( null ) ).to.be.true
    expect( is.falsy( void 0 ) ).to.be.true
    expect( is.falsy( 0 ) ).to.be.true
    expect( is.falsy( 1 ) ).to.be.false
    expect( is.falsy( 0 / 0 ) ).to.be.true
    expect( is.falsy( +1 / 0 ) ).to.be.false
    expect( is.falsy( -1 / 0 ) ).to.be.false
    expect( is.falsy( new Number( 0 ) ) ).to.be.false
    expect( is.falsy( new Number( 1 ) ) ).to.be.false
    expect( is.falsy( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.falsy( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.falsy( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.falsy( '' ) ).to.be.true
    expect( is.falsy( 'lipsum' ) ).to.be.false
    expect( is.falsy( new String( '' ) ) ).to.be.false
    expect( is.falsy( new String( 'lipsum' ) ) ).to.be.false
    expect( is.falsy( true ) ).to.be.false
    expect( is.falsy( false ) ).to.be.true
    expect( is.falsy( new Boolean( true ) ) ).to.be.false
    expect( is.falsy( new Boolean( false ) ) ).to.be.false
    expect( is.falsy( {} ) ).to.be.false
    expect( is.falsy( [] ) ).to.be.false
    expect( is.falsy( arguments ) ).to.be.false
    expect( is.falsy( function () {} ) ).to.be.false
    expect( is.falsy( new Date() ) ).to.be.false
    expect( is.falsy( new Error() ) ).to.be.false
    expect( is.falsy( /^/ ) ).to.be.false

    expect( is.not.falsy( null ) ).to.be.false
    expect( is.not.falsy( void 0 ) ).to.be.false
    expect( is.not.falsy( 0 ) ).to.be.false
    expect( is.not.falsy( 1 ) ).to.be.true
    expect( is.not.falsy( 0 / 0 ) ).to.be.false
    expect( is.not.falsy( +1 / 0 ) ).to.be.true
    expect( is.not.falsy( -1 / 0 ) ).to.be.true
    expect( is.not.falsy( new Number( 0 ) ) ).to.be.true
    expect( is.not.falsy( new Number( 1 ) ) ).to.be.true
    expect( is.not.falsy( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.falsy( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.falsy( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.falsy( '' ) ).to.be.false
    expect( is.not.falsy( 'lipsum' ) ).to.be.true
    expect( is.not.falsy( new String( '' ) ) ).to.be.true
    expect( is.not.falsy( new String( 'lipsum' ) ) ).to.be.true
    expect( is.not.falsy( true ) ).to.be.true
    expect( is.not.falsy( false ) ).to.be.false
    expect( is.not.falsy( new Boolean( true ) ) ).to.be.true
    expect( is.not.falsy( new Boolean( false ) ) ).to.be.true
    expect( is.not.falsy( {} ) ).to.be.true
    expect( is.not.falsy( [] ) ).to.be.true
    expect( is.not.falsy( arguments ) ).to.be.true
    expect( is.not.falsy( function () {} ) ).to.be.true
    expect( is.not.falsy( new Date() ) ).to.be.true
    expect( is.not.falsy( new Error() ) ).to.be.true
    expect( is.not.falsy( /^/ ) ).to.be.true

  } )

} )
