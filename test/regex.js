/* global expect, is */
/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

describe( 'bundle:regex' , function () {

  it( 'is.regex' , function () {

    expect( is.regex( /^/ ) ).to.be.true
    expect( is.regex( new RegExp() ) ).to.be.true

    expect( is.not.regex( /^/ ) ).to.be.false
    expect( is.not.regex( new RegExp() ) ).to.be.false

  } )

} )
