/* global expect, is */
/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

describe( 'bundle:regexp' , function () {

  it( 'is.regexp' , function () {

    expect( is.regexp( /^/ ) ).to.be.true
    expect( is.regexp( new RegExp() ) ).to.be.true

    expect( is.not.regexp( /^/ ) ).to.be.false
    expect( is.not.regexp( new RegExp() ) ).to.be.false

  } )

} )
