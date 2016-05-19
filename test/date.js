/* global expect, is */
/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

describe( 'bundle:date' , function () {

  it( 'is.date' , function () {
    expect( is.date( new Date() ) ).to.be.true
    expect( is.not.date( new Date() ) ).to.be.false
  } )

} )
