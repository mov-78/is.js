/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-func: 0, no-unused-expressions: 0 */

describe( 'bundle:function' , function () {

  it( 'is.function' , function () {

    var func = function () {}

    expect( is.function( func ) ).to.be.true
    expect( is.function( new Function() ) ).to.be.true

    expect( is.not.function( func ) ).to.be.false
    expect( is.not.function( new Function() ) ).to.be.false

  } )

} )
