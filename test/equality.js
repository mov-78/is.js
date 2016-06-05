describe( 'bundle:equality' , function () {

  var createObject = Object.create || function createObject( proto ) {
    function Surrogate() {} // eslint-disable-line func-style
    Surrogate.prototype = proto
    return new Surrogate()
  }

  it( 'is.equal' , function () {

    expect( is.equal( null , void 0 ) ).to.not.be.ok()
    expect( is.equal( 0 , 0 ) ).to.be.ok()
    expect( is.equal( 0 , '0' ) ).to.not.be.ok()
    expect( is.equal( +0 , -0 ) ).to.be.ok() // SameValueZero
    expect( is.equal( 0 / 0 , 0 / 0 ) ).to.be.ok() // SameValueZero
    expect( is.equal( [] , [] ) ).to.not.be.ok()

    expect( is.not.equal( null , void 0 ) ).to.be.ok()
    expect( is.not.equal( 0 , 0 ) ).to.not.be.ok()
    expect( is.not.equal( 0 , '0' ) ).to.be.ok()
    expect( is.not.equal( +0 , -0 ) ).to.not.be.ok() // SameValueZero
    expect( is.not.equal( 0 / 0 , 0 / 0 ) ).to.not.be.ok() // SameValueZero
    expect( is.not.equal( [] , [] ) ).to.be.ok()

  } )

  it( 'is.deepEqual' , function () {

    expect( is.deepEqual( null , void 0 ) ).to.not.be.ok()
    expect( is.deepEqual( 0 , 0 ) ).to.be.ok()
    expect( is.deepEqual( 0 , '0' ) ).to.not.be.ok()
    expect( is.deepEqual( +0 , -0 ) ).to.be.ok() // SameValueZero
    expect( is.deepEqual( 0 / 0 , 0 / 0 ) ).to.be.ok() // SameValueZero
    expect( is.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 2 ] ] ] ) ).to.be.ok()
    expect( is.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 3 ] ] ] ) ).to.not.be.ok()
    expect( is.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'baz ' } } ) ).to.be.ok()
    expect( is.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'qux ' } } ) ).to.not.be.ok()
    expect( is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] ) ).to.be.ok()
    expect( is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 6 } } ] ) ).to.not.be.ok()
    expect( is.deepEqual( createObject( { foo : 1 } ) , createObject( { foo : 2 } ) ) ).to.be.ok()

    expect( is.not.deepEqual( null , void 0 ) ).to.be.ok()
    expect( is.not.deepEqual( 0 , 0 ) ).to.not.be.ok()
    expect( is.not.deepEqual( 0 , '0' ) ).to.be.ok()
    expect( is.not.deepEqual( +0 , -0 ) ).to.not.be.ok() // SameValueZero
    expect( is.not.deepEqual( 0 / 0 , 0 / 0 ) ).to.not.be.ok() // SameValueZero
    expect( is.not.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 2 ] ] ] ) ).to.not.be.ok()
    expect( is.not.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 3 ] ] ] ) ).to.be.ok()
    expect( is.not.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'baz ' } } ) ).to.not.be.ok()
    expect( is.not.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'qux ' } } ) ).to.be.ok()
    expect( is.not.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] ) ).to.not.be.ok()
    expect( is.not.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 6 } } ] ) ).to.be.ok()
    expect( is.not.deepEqual( createObject( { foo : 1 } ) , createObject( { foo : 2 } ) ) ).to.not.be.ok()

  } )

} )
