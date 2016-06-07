describe( 'bundle:array' , function () {

  var isTypeError = function isTypeError( err ) {
    expect( err ).to.be.a( TypeError )
  }
  var isRangeError = function isRangeError( err ) {
    expect( err ).to.be.a( RangeError )
  }

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
  } )

  it( 'is.inArray' , function () {

    expect( function () {
      is.inArray( 'a' , 'abc' )
    } ).to.throwException( isTypeError )
    expect( function () {
      is.inArray( 0 , [ 1 ] , 1 )
    } ).to.throwException( isRangeError )
    expect( function () {
      is.inArray( 0 , [ 1 ] , -2 )
    } ).to.throwException( isRangeError )

    expect( is.inArray( 2 , [ 1 , 2 , 3 ] ) ).to.be.ok()
    expect( is.inArray( 4 , [ 1 , 2 , 3 ] ) ).to.not.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 1 ) ).to.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 2 ) ).to.not.be.ok()
    expect( is.inArray( 2 , [ 1 , 2 , 3 ] , -2 ) ).to.be.ok()

    expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , 0 , is.deepEqual ) ).to.be.ok()
    expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , is.deepEqual ) ).to.be.ok() // shortcut

  } )

} )
