describe( 'bundle:boolean' , function () {

  it( 'is.boolean' , function () {

    expect( is.boolean( 1 ) ).to.not.be.ok()
    expect( is.boolean( 0 ) ).to.not.be.ok()
    expect( is.boolean( true ) ).to.be.ok() // ←
    expect( is.boolean( false ) ).to.be.ok() // ←
    expect( is.boolean( new Boolean( true ) ) ).to.not.be.ok()
    expect( is.boolean( new Boolean( false ) ) ).to.not.be.ok()

    expect( is.not.boolean( 1 ) ).to.be.ok()
    expect( is.not.boolean( 0 ) ).to.be.ok()
    expect( is.not.boolean( true ) ).to.not.be.ok() // ←
    expect( is.not.boolean( false ) ).to.not.be.ok() // ←
    expect( is.not.boolean( new Boolean( true ) ) ).to.be.ok()
    expect( is.not.boolean( new Boolean( false ) ) ).to.be.ok()

  } )

} )
