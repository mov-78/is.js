describe( 'bundle:number' , function () {

    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
    var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -MAX_SAFE_INTEGER

    it( 'is.number' , function () {
        expect( is.number( 0 ) ).toBeTruthy()
        expect( is.number( 0 / 0 ) ).toBeTruthy()
        expect( is.number( +1 / 0 ) ).toBeTruthy()
        expect( is.number( -1 / 0 ) ).toBeTruthy()
        expect( is.number( '0' ) ).not.toBeTruthy() // ←
        expect( is.number( new Number( 0 ) ) ).not.toBeTruthy() // ←

    } )

    it( 'is.numeral' , function () {

        expect( is.numeral( null ) ).not.toBeTruthy()
        expect( is.numeral( void 0 ) ).not.toBeTruthy()
        expect( is.numeral( true ) ).not.toBeTruthy()
        expect( is.numeral( false ) ).not.toBeTruthy()
        expect( is.numeral( { valueOf : function () { return 0 } } ) ).not.toBeTruthy()
        expect( is.numeral( [ 0 ] ) ).not.toBeTruthy()
        expect( is.numeral( function () { return 0 } ) ).not.toBeTruthy()

        if ( typeof Symbol === 'function' ) {
            expect( is.numeral( Symbol( 0 ) ) ).not.toBeTruthy()
            expect( is.numeral( Symbol[ 'for' ]( 0 ) ) ).not.toBeTruthy()
        }

        expect( is.numeral( 1 ) ).toBeTruthy()
        expect( is.numeral( -1 ) ).toBeTruthy()
        expect( is.numeral( 1.1 ) ).toBeTruthy()
        expect( is.numeral( -1.1 ) ).toBeTruthy()
        expect( is.numeral( 1e1 ) ).toBeTruthy()
        expect( is.numeral( 1e-1 ) ).toBeTruthy()
        expect( is.numeral( 1.1e1 ) ).toBeTruthy()
        expect( is.numeral( 1.1e-1 ) ).toBeTruthy()
        expect( is.numeral( 0xFF ) ).toBeTruthy()

        expect( is.numeral( new Number( 1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( -1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 1.1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( -1.1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 1e1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 1e-1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 1.1e1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 1.1e-1 ) ) ).toBeTruthy()
        expect( is.numeral( new Number( 0xFF ) ) ).toBeTruthy()

        expect( is.numeral( ' 1 ' ) ).toBeTruthy()
        expect( is.numeral( ' -1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 1.1 ' ) ).toBeTruthy()
        expect( is.numeral( ' -1.1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 1e1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 1e-1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 1.1e1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 1.1e-1 ' ) ).toBeTruthy()
        expect( is.numeral( ' 0xFF ' ) ).toBeTruthy()

        expect( is.numeral( new String( ' 1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' -1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 1.1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' -1.1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 1e1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 1e-1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 1.1e1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 1.1e-1 ' ) ) ).toBeTruthy()
        expect( is.numeral( new String( ' 0xFF ' ) ) ).toBeTruthy()

        expect( is.numeral( 0 / 0 ) ).not.toBeTruthy()
        expect( is.numeral( +1 / 0 ) ).not.toBeTruthy()
        expect( is.numeral( -1 / 0 ) ).not.toBeTruthy()

        expect( is.numeral( '' ) ).not.toBeTruthy()
        expect( is.numeral( ' ' ) ).not.toBeTruthy()

        expect( is.numeral( 'one' ) ).not.toBeTruthy()
        expect( is.numeral( '1px' ) ).not.toBeTruthy()

    } )

    it( 'is.nan' , function () {
        expect( is.nan( 0 ) ).not.toBeTruthy()
        expect( is.nan( 0 / 0 ) ).toBeTruthy() // ←
        expect( is.nan( new Number( 0 / 0 ) ) ).not.toBeTruthy()
        expect( is.nan( +1 / 0 ) ).not.toBeTruthy()
        expect( is.nan( -1 / 0 ) ).not.toBeTruthy()
        expect( is.nan( 'one' ) ).not.toBeTruthy()

    } )

    it( 'is.odd' , function () {
        expect( is.odd( 1 ) ).toBeTruthy() // ←
        expect( is.odd( 2 ) ).not.toBeTruthy()
        expect( is.odd( '1' ) ).not.toBeTruthy()
        expect( is.odd( '2' ) ).not.toBeTruthy()
        expect( is.odd( new Number( 1 ) ) ).not.toBeTruthy()
        expect( is.odd( new Number( 2 ) ) ).not.toBeTruthy()
        expect( is.odd( 0 / 0 ) ).not.toBeTruthy()
        expect( is.odd( +1 / 0 ) ).not.toBeTruthy()
        expect( is.odd( -1 / 0 ) ).not.toBeTruthy()

    } )

    it( 'is.even' , function () {
        expect( is.even( 1 ) ).not.toBeTruthy()
        expect( is.even( 2 ) ).toBeTruthy() // ←
        expect( is.even( '1' ) ).not.toBeTruthy()
        expect( is.even( '2' ) ).not.toBeTruthy()
        expect( is.even( new Number( 1 ) ) ).not.toBeTruthy()
        expect( is.even( new Number( 2 ) ) ).not.toBeTruthy()
        expect( is.even( 0 / 0 ) ).not.toBeTruthy()
        expect( is.even( +1 / 0 ) ).not.toBeTruthy()
        expect( is.even( -1 / 0 ) ).not.toBeTruthy()

    } )

    it( 'is.finite' , function () {
        expect( is.finite( 0 ) ).toBeTruthy() // ←
        expect( is.finite( '0' ) ).not.toBeTruthy()
        expect( is.finite( 0 / 0 ) ).not.toBeTruthy()
        expect( is.finite( +1 / 0 ) ).not.toBeTruthy()
        expect( is.finite( -1 / 0 ) ).not.toBeTruthy()

    } )

    it( 'is.infinite' , function () {
        expect( is.infinite( 0 ) ).not.toBeTruthy()
        expect( is.infinite( '0' ) ).not.toBeTruthy()
        expect( is.infinite( 0 / 0 ) ).not.toBeTruthy()
        expect( is.infinite( +1 / 0 ) ).toBeTruthy() // ←
        expect( is.infinite( -1 / 0 ) ).toBeTruthy() // ←

    } )

    it( 'is.integer' , function () {
        expect( is.integer( 0 ) ).toBeTruthy()
        expect( is.integer( '0' ) ).not.toBeTruthy()
        expect( is.integer( new Number( 0 ) ) ).not.toBeTruthy()
        expect( is.integer( 0.1 ) ).not.toBeTruthy()
        expect( is.integer( 0 / 0 ) ).not.toBeTruthy()
        expect( is.integer( +1 / 0 ) ).not.toBeTruthy()
        expect( is.integer( -1 / 0 ) ).not.toBeTruthy()
        expect( is.integer( MAX_SAFE_INTEGER ) ).toBeTruthy()
        expect( is.integer( MIN_SAFE_INTEGER ) ).toBeTruthy()
        expect( is.integer( MAX_SAFE_INTEGER + 1 ) ).toBeTruthy()
        expect( is.integer( MIN_SAFE_INTEGER - 1 ) ).toBeTruthy()

    } )

    it( 'is.safeInteger' , function () {
        expect( is.safeInteger( 0 ) ).toBeTruthy()
        expect( is.safeInteger( '0' ) ).not.toBeTruthy()
        expect( is.safeInteger( new Number( 0 ) ) ).not.toBeTruthy()
        expect( is.safeInteger( 0.1 ) ).not.toBeTruthy()
        expect( is.safeInteger( 0 / 0 ) ).not.toBeTruthy()
        expect( is.safeInteger( +1 / 0 ) ).not.toBeTruthy()
        expect( is.safeInteger( -1 / 0 ) ).not.toBeTruthy()
        expect( is.safeInteger( MAX_SAFE_INTEGER ) ).toBeTruthy()
        expect( is.safeInteger( MIN_SAFE_INTEGER ) ).toBeTruthy()
        expect( is.safeInteger( MAX_SAFE_INTEGER + 1 ) ).not.toBeTruthy()
        expect( is.safeInteger( MIN_SAFE_INTEGER - 1 ) ).not.toBeTruthy()

    } )

} )
