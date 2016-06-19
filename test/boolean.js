describe( 'bundle:boolean' , function () {

  it( 'is.boolean' , function () {
    expect( is.boolean( 1 ) ).not.toBeTruthy()
    expect( is.boolean( 0 ) ).not.toBeTruthy()
    expect( is.boolean( true ) ).toBeTruthy() // ←
    expect( is.boolean( false ) ).toBeTruthy() // ←
    expect( is.boolean( new Boolean( true ) ) ).not.toBeTruthy()
    expect( is.boolean( new Boolean( false ) ) ).not.toBeTruthy()
  } )

} )
