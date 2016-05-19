/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:primitive' , function () {

  it( 'is.primitive' , function () {

    expect( is.primitive( null ) ).to.be.true
    expect( is.primitive( void 0 ) ).to.be.true
    expect( is.primitive( 0 ) ).to.be.true
    expect( is.primitive( 0 / 0 ) ).to.be.true
    expect( is.primitive( +1 / 0 ) ).to.be.true
    expect( is.primitive( -1 / 0 ) ).to.be.true
    expect( is.primitive( new Number( 0 ) ) ).to.be.false
    expect( is.primitive( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.primitive( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.primitive( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.primitive( '' ) ).to.be.true
    expect( is.primitive( new String( '' ) ) ).to.be.false
    expect( is.primitive( true ) ).to.be.true
    expect( is.primitive( true ) ).to.be.true
    expect( is.primitive( new Boolean( true ) ) ).to.be.false
    expect( is.primitive( new Boolean( true ) ) ).to.be.false
    expect( is.primitive( {} ) ).to.be.false
    expect( is.primitive( [] ) ).to.be.false
    expect( is.primitive( function () {} ) ).to.be.false
    expect( is.primitive( /^/ ) ).to.be.false

    expect( is.not.primitive( null ) ).to.be.false
    expect( is.not.primitive( void 0 ) ).to.be.false
    expect( is.not.primitive( 0 ) ).to.be.false
    expect( is.not.primitive( 0 / 0 ) ).to.be.false
    expect( is.not.primitive( +1 / 0 ) ).to.be.false
    expect( is.not.primitive( -1 / 0 ) ).to.be.false
    expect( is.not.primitive( new Number( 0 ) ) ).to.be.true
    expect( is.not.primitive( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.primitive( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.primitive( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.primitive( '' ) ).to.be.false
    expect( is.not.primitive( new String( '' ) ) ).to.be.true
    expect( is.not.primitive( true ) ).to.be.false
    expect( is.not.primitive( true ) ).to.be.false
    expect( is.not.primitive( new Boolean( true ) ) ).to.be.true
    expect( is.not.primitive( new Boolean( true ) ) ).to.be.true
    expect( is.not.primitive( {} ) ).to.be.true
    expect( is.not.primitive( [] ) ).to.be.true
    expect( is.not.primitive( function () {} ) ).to.be.true
    expect( is.not.primitive( /^/ ) ).to.be.true

  } )

} )
