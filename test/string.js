describe( 'bundle:string' , function () {

    it( 'is.string' , function () {
        expect( is.string( '' ) ).toBeTruthy()
        expect( is.string( new String( '' ) ) ).not.toBeTruthy()
    } )

    it( 'is.emptyString' , function () {
        expect( is.emptyString( '' ) ).toBeTruthy()
        expect( is.emptyString( ' ' ) ).toBeTruthy()
        expect( is.emptyString( '\f\n\r\t' ) ).toBeTruthy()
        expect( is.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).toBeTruthy()
        expect( is.emptyString( '空' ) ).not.toBeTruthy() // ←
    } )

    it( 'is.substring' , function () {

        expect( is.substring( 'ps' , 'lipsum' ) ).toBeTruthy()
        expect( is.substring( new String( 'ps' ) , 'lipsum' ) ).toBeTruthy()
        expect( is.substring( 'ps' , new String( 'lipsum' ) ) ).toBeTruthy()
        expect( is.substring( [ 'ps' ] , 'lipsum' ) ).toBeTruthy()
        expect( is.substring( 'ps' , [ 'lipsum' ] ) ).not.toBeTruthy()
        expect( is.substring( 'sp' , 'lipsum' ) ).not.toBeTruthy()
        expect( is.substring( 'ps' , 'lipsum' , 0.1 ) ).toBeTruthy() // same as offset=0
        expect( is.substring( 'ps' , 'lipsum' , '1000' ) ).toBeTruthy() // same as offset=0
        expect( is.substring( 'ps' , 'lipsum' , 0 / 0 ) ).toBeTruthy() // same as offset=0
        expect( is.substring( 'ps' , 'lipsum' , +1 / 0 ) ).toBeTruthy() // same as offset=0
        expect( is.substring( 'ps' , 'lipsum' , -1 / 0 ) ).toBeTruthy() // same as offset=0
        expect( is.substring( 'ps' , 'lipsum' , 2 ) ).toBeTruthy()
        expect( is.substring( 'ps' , 'lipsum' , 3 ) ).not.toBeTruthy()
        expect( is.substring( 'ps' , 'lipsum' , -4 ) ).toBeTruthy()

        // offset out of range
        expect( is.substring( 'ps' , 'lipsum' , -7 ) ).not.toBeTruthy()
        expect( is.substring( 'ps' , 'lipsum' , 6 ) ).not.toBeTruthy()

    } )

    it( 'is.prefix' , function () {
        expect( is.prefix( 'lip' , 'lipsum' ) ).toBeTruthy()
        expect( is.prefix( 'sum' , 'lipsum' ) ).not.toBeTruthy()
        expect( is.prefix( 'lip' , [ 'lipsum' ] ) ).not.toBeTruthy()
        expect( is.prefix( [ 'lip' ] , 'lipsum' ) ).toBeTruthy()
    } )

    it( 'is.suffix' , function () {
        expect( is.suffix( 'lip' , 'lipsum' ) ).not.toBeTruthy()
        expect( is.suffix( 'sum' , 'lipsum' ) ).toBeTruthy()
        expect( is.suffix( 'sum' , [ 'lipsum' ] ) ).not.toBeTruthy()
        expect( is.suffix( [ 'sum' ] , 'lipsum' ) ).toBeTruthy()
    } )

} )
