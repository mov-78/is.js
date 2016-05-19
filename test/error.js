/* global expect, is */
/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

describe( 'bundle:error' , function () {

  it( 'is.error' , function () {
    expect( is.error( new Error() ) ).to.be.true
    expect( is.not.error( new Error() ) ).to.be.false
  } )

} )
