describe( 'bundle:nil' , function () {

  it( 'is.null' , function () {
    expect( is[ 'null' ]( null ) ).toBeTruthy()
    expect( is[ 'null' ]( void 0 ) ).not.toBeTruthy()
  } )

  it( 'is.undefined' , function () {
    expect( is[ 'undefined' ]( null ) ).not.toBeTruthy()
    expect( is[ 'undefined' ]( void 0 ) ).toBeTruthy()

  } )

  it( 'is.exist' , function () {
    expect( is.exist( null ) ).not.toBeTruthy()
    expect( is.exist( void 0 ) ).not.toBeTruthy()
  } )

  it( 'is.nil' , function () {
    expect( is.nil( null ) ).toBeTruthy()
    expect( is.nil( void 0 ) ).toBeTruthy()
  } )

} )
