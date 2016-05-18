/* global expect, is */
/* eslint-env mocha */
/* eslint no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:boolean' , function () {

  it( 'is.boolean' , function () {

    expect( is.boolean( true ) ).to.be.true
    expect( is.boolean( false ) ).to.be.true
    expect( is.boolean( new Boolean( true ) ) ).to.be.false
    expect( is.boolean( new Boolean( false ) ) ).to.be.false

    expect( is.not.boolean( true ) ).to.be.false
    expect( is.not.boolean( false ) ).to.be.false
    expect( is.not.boolean( new Boolean( true ) ) ).to.be.true
    expect( is.not.boolean( new Boolean( false ) ) ).to.be.true

  } )

  it( 'is.true' , function () {

    expect( is.true( true ) ).to.be.true
    expect( is.true( false ) ).to.be.false
    expect( is.true( new Boolean( true ) ) ).to.be.false
    expect( is.true( new Boolean( false ) ) ).to.be.false
    expect( is.true( 1 ) ).to.be.false
    expect( is.true( 0 ) ).to.be.false

    expect( is.not.true( true ) ).to.be.false
    expect( is.not.true( false ) ).to.be.true
    expect( is.not.true( new Boolean( true ) ) ).to.be.true
    expect( is.not.true( new Boolean( false ) ) ).to.be.true
    expect( is.not.true( 1 ) ).to.be.true
    expect( is.not.true( 0 ) ).to.be.true

  } )
  it( 'is.false' , function () {

    expect( is.false( true ) ).to.be.false
    expect( is.false( false ) ).to.be.true
    expect( is.false( new Boolean( true ) ) ).to.be.false
    expect( is.false( new Boolean( false ) ) ).to.be.false
    expect( is.false( 1 ) ).to.be.false
    expect( is.false( 0 ) ).to.be.false

    expect( is.not.false( true ) ).to.be.true
    expect( is.not.false( false ) ).to.be.false
    expect( is.not.false( new Boolean( true ) ) ).to.be.true
    expect( is.not.false( new Boolean( false ) ) ).to.be.true
    expect( is.not.false( 1 ) ).to.be.true
    expect( is.not.false( 0 ) ).to.be.true

  } )

  it( 'is.truthy' , function () {

    expect( is.truthy( true ) ).to.be.true
    expect( is.truthy( false ) ).to.be.false
    expect( is.truthy( new Boolean( true ) ) ).to.be.true
    expect( is.truthy( new Boolean( false ) ) ).to.be.true
    expect( is.truthy( 1 ) ).to.be.true
    expect( is.truthy( 0 ) ).to.be.false

    expect( is.not.truthy( true ) ).to.be.false
    expect( is.not.truthy( false ) ).to.be.true
    expect( is.not.truthy( new Boolean( true ) ) ).to.be.false
    expect( is.not.truthy( new Boolean( false ) ) ).to.be.false
    expect( is.not.truthy( 1 ) ).to.be.false
    expect( is.not.truthy( 0 ) ).to.be.true

  } )
  it( 'is.falsy' , function () {

    expect( is.falsy( true ) ).to.be.false
    expect( is.falsy( false ) ).to.be.true
    expect( is.falsy( new Boolean( true ) ) ).to.be.false
    expect( is.falsy( new Boolean( false ) ) ).to.be.false
    expect( is.falsy( 1 ) ).to.be.false
    expect( is.falsy( 0 ) ).to.be.true

    expect( is.not.falsy( true ) ).to.be.true
    expect( is.not.falsy( false ) ).to.be.false
    expect( is.not.falsy( new Boolean( true ) ) ).to.be.true
    expect( is.not.falsy( new Boolean( false ) ) ).to.be.true
    expect( is.not.falsy( 1 ) ).to.be.true
    expect( is.not.falsy( 0 ) ).to.be.false

  } )

} )
