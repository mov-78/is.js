/* global expect, is */
/* eslint-env mocha */
/* eslint no-magic-numbers: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:number' , function () {

  it( 'is.number' , function () {

    //
    // is.number( value )
    //

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
    expect( is.number( function () {} ) ).to.be.false // eslint-disable-line no-empty-function


    //
    // is.not.number( value )
    //

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
    expect( is.not.number( function () {} ) ).to.be.true // eslint-disable-line no-empty-function

  } )

  it( 'is.nan' , function () {

    expect( is.nan( '' ) ).to.be.false
    expect( is.nan( 0 / 0 ) ).to.be.true

    expect( is.not.nan( '' ) ).to.be.true
    expect( is.not.nan( 0 / 0 ) ).to.be.false

  } )

  it( 'is.positive' , function () {

    expect( is.positive( +1 ) ).to.be.true
    expect( is.positive( -1 ) ).to.be.false
    expect( is.positive( 0 ) ).to.be.false
    expect( is.positive( 0 / 0 ) ).to.be.false
    expect( is.positive( +1 / 0 ) ).to.be.true
    expect( is.positive( -1 / 0 ) ).to.be.false
    expect( is.positive( '+1' ) ).to.be.false
    expect( is.positive( '-1' ) ).to.be.false

    expect( is.not.positive( +1 ) ).to.be.false
    expect( is.not.positive( -1 ) ).to.be.true
    expect( is.not.positive( 0 ) ).to.be.true
    expect( is.not.positive( 0 / 0 ) ).to.be.true
    expect( is.not.positive( +1 / 0 ) ).to.be.false
    expect( is.not.positive( -1 / 0 ) ).to.be.true
    expect( is.not.positive( '+1' ) ).to.be.true
    expect( is.not.positive( '-1' ) ).to.be.true

  } )
  it( 'is.negative' , function () {

    expect( is.negative( +1 ) ).to.be.false
    expect( is.negative( -1 ) ).to.be.true
    expect( is.negative( 0 ) ).to.be.false
    expect( is.negative( 0 / 0 ) ).to.be.false
    expect( is.negative( +1 / 0 ) ).to.be.false
    expect( is.negative( -1 / 0 ) ).to.be.true
    expect( is.negative( '+1' ) ).to.be.false
    expect( is.negative( '-1' ) ).to.be.false

    expect( is.not.negative( +1 ) ).to.be.true
    expect( is.not.negative( -1 ) ).to.be.false
    expect( is.not.negative( 0 ) ).to.be.true
    expect( is.not.negative( 0 / 0 ) ).to.be.true
    expect( is.not.negative( +1 / 0 ) ).to.be.true
    expect( is.not.negative( -1 / 0 ) ).to.be.false
    expect( is.not.negative( '+1' ) ).to.be.true
    expect( is.not.negative( '-1' ) ).to.be.true

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

  it( 'is.gt' , function () {

    expect( is.gt( 1 , 2 ) ).to.be.false
    expect( is.gt( 1 , 1 ) ).to.be.false
    expect( is.gt( 2 , 1 ) ).to.be.true

    expect( is.not.gt( 1 , 2 ) ).to.be.true
    expect( is.not.gt( 1 , 1 ) ).to.be.true
    expect( is.not.gt( 2 , 1 ) ).to.be.false

  } )
  it( 'is.gte' , function () {

    expect( is.gte( 1 , 2 ) ).to.be.false
    expect( is.gte( 1 , 1 ) ).to.be.true
    expect( is.gte( 2 , 1 ) ).to.be.true

    expect( is.not.gte( 1 , 2 ) ).to.be.true
    expect( is.not.gte( 1 , 1 ) ).to.be.false
    expect( is.not.gte( 2 , 1 ) ).to.be.false

  } )
  it( 'is.lt' , function () {

    expect( is.lt( 1 , 2 ) ).to.be.true
    expect( is.lt( 1 , 1 ) ).to.be.false
    expect( is.lt( 2 , 1 ) ).to.be.false

    expect( is.not.lt( 1 , 2 ) ).to.be.false
    expect( is.not.lt( 1 , 1 ) ).to.be.true
    expect( is.not.lt( 2 , 1 ) ).to.be.true

  } )
  it( 'is.lte' , function () {

    expect( is.lte( 1 , 2 ) ).to.be.true
    expect( is.lte( 1 , 1 ) ).to.be.true
    expect( is.lte( 2 , 1 ) ).to.be.false

    expect( is.not.lte( 1 , 2 ) ).to.be.false
    expect( is.not.lte( 1 , 1 ) ).to.be.false
    expect( is.not.lte( 2 , 1 ) ).to.be.true

  } )
  it( 'is.within' , function () {

    expect( is.within( 0 , 1 , 3 ) ).to.be.false
    expect( is.within( 1 , 1 , 3 ) ).to.be.true
    expect( is.within( 2 , 1 , 3 ) ).to.be.true
    expect( is.within( 3 , 1 , 3 ) ).to.be.true
    expect( is.within( 4 , 1 , 3 ) ).to.be.false

    expect( is.not.within( 0 , 1 , 3 ) ).to.be.true
    expect( is.not.within( 1 , 1 , 3 ) ).to.be.false
    expect( is.not.within( 2 , 1 , 3 ) ).to.be.false
    expect( is.not.within( 3 , 1 , 3 ) ).to.be.false
    expect( is.not.within( 4 , 1 , 3 ) ).to.be.true

  } )

} )
