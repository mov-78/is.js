/* global expect, is */
/* eslint-env mocha */
/* eslint no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:string' , function () {

  it( 'is.string' , function () {

    expect( is.string( '' ) ).to.be.true
    expect( is.string( new String( '' ) ) ).to.be.false

    expect( is.not.string( '' ) ).to.be.false
    expect( is.not.string( new String( '' ) ) ).to.be.true

  } )

  it( 'is.startsWith' , function () {

    expect( is.startsWith( 'foobar' , 'foo' ) ).to.be.true
    expect( is.startsWith( 'foobar' , 'bar' ) ).to.be.false
    expect( is.startsWith( 'foobar' , 'foobarbaz' ) ).to.be.false

    expect( is.not.startsWith( 'foobar' , 'foo' ) ).to.be.false
    expect( is.not.startsWith( 'foobar' , 'bar' ) ).to.be.true
    expect( is.not.startsWith( 'foobar' , 'foobarbaz' ) ).to.be.true

  } )
  it( 'is.endsWith' , function () {

    expect( is.endsWith( 'foobar' , 'bar' ) ).to.be.true
    expect( is.endsWith( 'foobar' , 'foo' ) ).to.be.false
    expect( is.endsWith( 'foobar' , 'foobarbaz' ) ).to.be.false

    expect( is.not.endsWith( 'foobar' , 'bar' ) ).to.be.false
    expect( is.not.endsWith( 'foobar' , 'foo' ) ).to.be.true
    expect( is.not.endsWith( 'foobar' , 'foobarbaz' ) ).to.be.true

  } )

} )
