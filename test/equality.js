describe( 'bundle:equality' , function () {

  it( 'is.equal' , function () {
    expect( is.equal( 0 , 0 ) ).to.be.ok()
    expect( is.equal( 0 , '0' ) ).to.not.be.ok()
    expect( is.equal( +0 , -0 ) ).to.be.ok() // SameValueZero
    expect( is.equal( 0 / 0 , 0 / 0 ) ).to.be.ok() // SameValueZero
    expect( is.equal( [] , [] ) ).to.not.be.ok()
    expect( is.equal( is , is ) ).to.be.ok()
  } )

  it( 'is.deepEqual' , function () {
    expect( is.deepEqual( 0 , 0 ) ).to.be.ok()
    expect( is.deepEqual( 0 , '0' ) ).to.not.be.ok()
    expect( is.deepEqual( +0 , -0 ) ).to.be.ok() // SameValueZero
    expect( is.deepEqual( 0 / 0 , 0 / 0 ) ).to.be.ok() // SameValueZero
    expect( is.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 2 ] ] ] ) ).to.be.ok()
    expect( is.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'baz ' } } ) ).to.be.ok()
    expect( is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : 5 } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : 5 } ] ) ).to.be.ok()
  } )

} )
