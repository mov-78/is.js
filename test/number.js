/* global expect, is */
/* eslint-env mocha */
/* eslint no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:number' , function () {

  it( 'is.number' , function () {

    expect( is.number( 0 ) ).to.be.true
    expect( is.number( 0 / 0 ) ).to.be.true
    expect( is.number( +1 / 0 ) ).to.be.true
    expect( is.number( -1 / 0 ) ).to.be.true
    expect( is.number( new Number( 0 ) ) ).to.be.false
    expect( is.number( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.number( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.number( new Number( -1 / 0 ) ) ).to.be.false

    expect( is.not.number( 0 ) ).to.be.false
    expect( is.not.number( 0 / 0 ) ).to.be.false
    expect( is.not.number( +1 / 0 ) ).to.be.false
    expect( is.not.number( -1 / 0 ) ).to.be.false
    expect( is.not.number( new Number( 0 ) ) ).to.be.true
    expect( is.not.number( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.number( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.number( new Number( -1 / 0 ) ) ).to.be.true

  } )

  it( 'is.nan' , function () {

    expect( is.nan( '' ) ).to.be.false
    expect( is.nan( 0 / 0 ) ).to.be.true

    expect( is.not.nan( '' ) ).to.be.true
    expect( is.not.nan( 0 / 0 ) ).to.be.false

  } )

  it( 'is.odd' , function () {

    expect( is.odd( 1 ) ).to.be.true
    expect( is.odd( 2 ) ).to.be.false
    expect( is.odd( '' ) ).to.be.false

    expect( is.not.odd( 1 ) ).to.be.false
    expect( is.not.odd( 2 ) ).to.be.true
    expect( is.not.odd( '' ) ).to.be.true

  } )
  it( 'is.even' , function () {

    expect( is.even( 1 ) ).to.be.false
    expect( is.even( 2 ) ).to.be.true
    expect( is.even( '' ) ).to.be.false

    expect( is.not.even( 1 ) ).to.be.true
    expect( is.not.even( 2 ) ).to.be.false
    expect( is.not.even( '' ) ).to.be.true

  } )

  it( 'is.finite' , function () {

    expect( is.finite( 0 ) ).to.be.true
    expect( is.finite( +1 / 0 ) ).to.be.false
    expect( is.finite( -1 / 0 ) ).to.be.false
    expect( is.finite( '0' ) ).to.be.false
    expect( is.finite( new Number( 0 ) ) ).to.be.false

    expect( is.not.finite( 0 ) ).to.be.false
    expect( is.not.finite( +1 / 0 ) ).to.be.true
    expect( is.not.finite( -1 / 0 ) ).to.be.true
    expect( is.not.finite( '0' ) ).to.be.true
    expect( is.not.finite( new Number( 0 ) ) ).to.be.true

  } )
  it( 'is.infinite' , function () {

    expect( is.infinite( 0 ) ).to.be.false
    expect( is.infinite( +1 / 0 ) ).to.be.true
    expect( is.infinite( -1 / 0 ) ).to.be.true
    expect( is.infinite( '0' ) ).to.be.false
    expect( is.infinite( new Number( 0 ) ) ).to.be.false

    expect( is.not.infinite( 0 ) ).to.be.true
    expect( is.not.infinite( +1 / 0 ) ).to.be.false
    expect( is.not.infinite( -1 / 0 ) ).to.be.false
    expect( is.not.infinite( '0' ) ).to.be.true
    expect( is.not.infinite( new Number( 0 ) ) ).to.be.true

  } )

  it( 'is.integer' , function () {

    expect( is.integer( 0 ) ).to.be.true
    expect( is.integer( 0.1 ) ).to.be.false
    expect( is.integer( 0 / 0 ) ).to.be.false
    expect( is.integer( +1 / 0 ) ).to.be.false
    expect( is.integer( -1 / 0 ) ).to.be.false
    expect( is.integer( '0' ) ).to.be.false
    expect( is.integer( new Number( 0 ) ) ).to.be.false

    expect( is.not.integer( 0 ) ).to.be.false
    expect( is.not.integer( 0.1 ) ).to.be.true
    expect( is.not.integer( 0 / 0 ) ).to.be.true
    expect( is.not.integer( +1 / 0 ) ).to.be.true
    expect( is.not.integer( -1 / 0 ) ).to.be.true
    expect( is.not.integer( '0' ) ).to.be.true
    expect( is.not.integer( new Number( 0 ) ) ).to.be.true

  } )
  it( 'is.safeInteger' , function () {

    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
    var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER

    expect( is.safeInteger( MAX_SAFE_INTEGER ) ).to.be.true
    expect( is.safeInteger( MAX_SAFE_INTEGER + 1 ) ).to.be.false
    expect( is.safeInteger( MIN_SAFE_INTEGER ) ).to.be.true
    expect( is.safeInteger( MIN_SAFE_INTEGER - 1 ) ).to.be.false

    expect( is.not.safeInteger( MAX_SAFE_INTEGER ) ).to.be.false
    expect( is.not.safeInteger( MAX_SAFE_INTEGER + 1 ) ).to.be.true
    expect( is.not.safeInteger( MIN_SAFE_INTEGER ) ).to.be.false
    expect( is.not.safeInteger( MIN_SAFE_INTEGER - 1 ) ).to.be.true

  } )

} )
