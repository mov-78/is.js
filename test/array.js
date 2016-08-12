describe( 'bundle:array' , function () {

    it( 'is.array' , function () {
        expect( is.array( [] ) ).toBeTruthy() // ←
        expect( is.array( '' ) ).not.toBeTruthy()
        expect( is.array( { length : 0 } ) ).not.toBeTruthy()
        expect( is.array( function () {} ) ).not.toBeTruthy()
    } )

    it( 'is.arrayLikeObject' , function () {

        expect( is.arrayLikeObject( [] ) ).toBeTruthy()
        expect( is.arrayLikeObject( '' ) ).not.toBeTruthy()
        expect( is.arrayLikeObject( { length : 0 } ) ).toBeTruthy()
        expect( is.arrayLikeObject( function () {} ) ).not.toBeTruthy()

        expect( is.arrayLikeObject( { length : 'one' } ) ).not.toBeTruthy()
        expect( is.arrayLikeObject( { length : 3.14 } ) ).not.toBeTruthy()
        expect( is.arrayLikeObject( { length : -1 } ) ).not.toBeTruthy()
        expect( is.arrayLikeObject( { length : Math.pow( 2 , 53 ) } ) ).not.toBeTruthy()

    } )

    it( 'is.inArray' , function () {

        expect( is.inArray( 0 , 0 ) ).not.toBeTruthy()

        // offset out of range
        expect( is.inArray( 0 , [ 1 ] , 1 ) ).not.toBeTruthy()
        expect( is.inArray( 0 , [ 1 ] , -2 ) ).not.toBeTruthy()

        expect( is.inArray( 2 , [ 1 , 2 , 3 ] ) ).toBeTruthy()
        expect( is.inArray( 4 , [ 1 , 2 , 3 ] ) ).not.toBeTruthy()
        expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 1 ) ).toBeTruthy()
        expect( is.inArray( 2 , [ 1 , 2 , 3 ] , 2 ) ).not.toBeTruthy()
        expect( is.inArray( 2 , [ 1 , 2 , 3 ] , -2 ) ).toBeTruthy()

        expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , 0 , is.deepEqual ) ).toBeTruthy()
        expect( is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , is.deepEqual ) ).toBeTruthy() // shortcut

    } )

} )
