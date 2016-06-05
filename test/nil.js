describe( 'bundle:nil' , function () {

  it( 'is.null' , function () {

    expect( is[ 'null' ]( null ) ).to.be.ok()
    expect( is[ 'null' ]( void 0 ) ).to.not.be.ok()

    expect( is.not[ 'null' ]( null ) ).to.not.be.ok()
    expect( is.not[ 'null' ]( void 0 ) ).to.be.ok()

  } )

  it( 'is.undefined' , function () {

    expect( is[ 'undefined' ]( null ) ).to.not.be.ok()
    expect( is[ 'undefined' ]( void 0 ) ).to.be.ok()

    expect( is.not[ 'undefined' ]( null ) ).to.be.ok()
    expect( is.not[ 'undefined' ]( void 0 ) ).to.not.be.ok()

  } )

  it( 'is.nil' , function () {

    expect( is.nil( null ) ).to.be.ok()
    expect( is.nil( void 0 ) ).to.be.ok()

    expect( is.not.nil( null ) ).to.not.be.ok()
    expect( is.not.nil( void 0 ) ).to.not.be.ok()

  } )

} )
