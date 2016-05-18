/* global expect, is */
/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

describe( 'bundle:nil' , function () {

  it( 'is.null' , function () {

    expect( is.null( null ) ).to.be.true
    expect( is.null( void 0 ) ).to.be.false

    expect( is.not.null( null ) ).to.be.false
    expect( is.not.null( void 0 ) ).to.be.true

  } )

  it( 'is.undefined' , function () {

    expect( is.undefined( null ) ).to.be.false
    expect( is.undefined( void 0 ) ).to.be.true

    expect( is.not.undefined( null ) ).to.be.true
    expect( is.not.undefined( void 0 ) ).to.be.false

  } )

  it( 'is.nil' , function () {

    expect( is.nil( null ) ).to.be.true
    expect( is.nil( void 0 ) ).to.be.true

    expect( is.not.nil( null ) ).to.be.false
    expect( is.not.nil( void 0 ) ).to.be.false

  } )

} )
