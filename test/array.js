describe( 'bundle:array' , function () {

  it( 'is.array' , function () {
    expect( is.array( [] ) ).to.be.ok() // ←
    expect( is.array( '' ) ).to.not.be.ok()
    expect( is.array( document.scripts ) ).to.not.be.ok()
    expect( is.array( function () {} ) ).to.not.be.ok()
  } )

  it( 'is.arrayLikeObject' , function () {

    expect( is.arrayLikeObject( [] ) ).to.be.ok()
    expect( is.arrayLikeObject( '' ) ).to.not.be.ok()
    expect( is.arrayLikeObject( document.scripts ) ).to.be.ok()
    expect( is.arrayLikeObject( function () {} ) ).to.not.be.ok()

    expect( is.arrayLikeObject( { length : 'one' } ) ).to.not.be.ok()
    expect( is.arrayLikeObject( { length : 3.14 } ) ).to.not.be.ok()
    expect( is.arrayLikeObject( { length : -1 } ) ).to.not.be.ok()
    expect( is.arrayLikeObject( { length : Math.pow( 2 , 53 ) } ) ).to.not.be.ok()

  } )

  it( 'is.inArray' , function () {

    expect( is.inArray( 0 , 0 ) ).to.not.be.ok()

    // offset out of range
    expect( is.inArray( 0 , [ 1 ] , 1 ) ).to.not.be.ok()
    expect( is.inArray( 0 , [ 1 ] , -2 ) ).to.not.be.ok()

    expect( is.inArray( 2 , [ 1 , 2 , 3 ] ) ).to.be.ok()
    expect( is.inArray( 4 , [ 1 , 2 , 3 ] ) ).to.not.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 1 ) ).to.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 2 ) ).to.not.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , -2 ) ).to.be.ok()

    expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , 0 , is.deepEqual ) ).to.be.ok()
    expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , is.deepEqual ) ).to.be.ok() // shortcut

  } )

} )
