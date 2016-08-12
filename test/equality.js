describe( 'bundle:equality' , function () {

    var createObject = Object.create || function createObject( proto ) {
        function Surrogate() {} // eslint-disable-line func-style
        Surrogate.prototype = proto
        return new Surrogate()
    }

    it( 'is.equal' , function () {
        expect( is.equal( null , void 0 ) ).not.toBeTruthy()
        expect( is.equal( 0 , 0 ) ).toBeTruthy()
        expect( is.equal( 0 , '0' ) ).not.toBeTruthy()
        expect( is.equal( +0 , -0 ) ).toBeTruthy() // SameValueZero
        expect( is.equal( 0 / 0 , 0 / 0 ) ).toBeTruthy() // SameValueZero
        expect( is.equal( [] , [] ) ).not.toBeTruthy()
    } )

    it( 'is.deepEqual' , function () {
        expect( is.deepEqual( null , void 0 ) ).not.toBeTruthy()
        expect( is.deepEqual( 0 , 0 ) ).toBeTruthy()
        expect( is.deepEqual( 0 , '0' ) ).not.toBeTruthy()
        expect( is.deepEqual( +0 , -0 ) ).toBeTruthy() // SameValueZero
        expect( is.deepEqual( 0 / 0 , 0 / 0 ) ).toBeTruthy() // SameValueZero
        expect( is.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 2 ] ] ] ) ).toBeTruthy()
        expect( is.deepEqual( [ 0 , [ 1 , [ 2 ] ] ] , [ 0 , [ 1 , [ 3 ] ] ] ) ).not.toBeTruthy()
        expect( is.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'baz ' } } ) ).toBeTruthy()
        expect( is.deepEqual( { foo : { bar : 'baz ' } } , { foo : { bar : 'qux ' } } ) ).not.toBeTruthy()
        expect( is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] ) ).toBeTruthy()
        expect( is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 6 } } ] ) ).not.toBeTruthy()
        expect( is.deepEqual( createObject( { foo : 1 } ) , createObject( { foo : 2 } ) ) ).toBeTruthy()
    } )

} )
