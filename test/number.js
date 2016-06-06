describe( 'bundle:number' , function () {

  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow( 2 , 53 ) - 1
  var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -MAX_SAFE_INTEGER

  it( 'is.number' , function () {
    expect( is.number( 0 ) ).to.be.ok()
    expect( is.number( 0 / 0 ) ).to.be.ok()
    expect( is.number( +1 / 0 ) ).to.be.ok()
    expect( is.number( -1 / 0 ) ).to.be.ok()
    expect( is.number( '0' ) ).to.not.be.ok() // ←
    expect( is.number( new Number( 0 ) ) ).to.not.be.ok() // ←

  } )

  it( 'is.numeric' , function () {

    expect( is.numeric( null ) ).to.not.be.ok()
    expect( is.numeric( void 0 ) ).to.not.be.ok()
    expect( is.numeric( true ) ).to.not.be.ok()
    expect( is.numeric( false ) ).to.not.be.ok()
    expect( is.numeric( { valueOf : function () { return 0 } } ) ).to.not.be.ok()
    expect( is.numeric( [ 0 ] ) ).to.not.be.ok()
    expect( is.numeric( function () { return 0 } ) ).to.not.be.ok()

    if ( typeof Symbol === 'function' ) {
      expect( is.numeric( Symbol( 0 ) ) ).to.not.be.ok()
      expect( is.numeric( Symbol[ 'for' ]( 0 ) ) ).to.not.be.ok()
    }

    expect( is.numeric( 1 ) ).to.be.ok()
    expect( is.numeric( -1 ) ).to.be.ok()
    expect( is.numeric( 1.1 ) ).to.be.ok()
    expect( is.numeric( -1.1 ) ).to.be.ok()
    expect( is.numeric( 1e1 ) ).to.be.ok()
    expect( is.numeric( 1e-1 ) ).to.be.ok()
    expect( is.numeric( 1.1e1 ) ).to.be.ok()
    expect( is.numeric( 1.1e-1 ) ).to.be.ok()
    expect( is.numeric( 0xFF ) ).to.be.ok()

    expect( is.numeric( new Number( 1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( -1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 1.1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( -1.1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 1e1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 1e-1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 1.1e1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 1.1e-1 ) ) ).to.be.ok()
    expect( is.numeric( new Number( 0xFF ) ) ).to.be.ok()

    expect( is.numeric( ' 1 ' ) ).to.be.ok()
    expect( is.numeric( ' -1 ' ) ).to.be.ok()
    expect( is.numeric( ' 1.1 ' ) ).to.be.ok()
    expect( is.numeric( ' -1.1 ' ) ).to.be.ok()
    expect( is.numeric( ' 1e1 ' ) ).to.be.ok()
    expect( is.numeric( ' 1e-1 ' ) ).to.be.ok()
    expect( is.numeric( ' 1.1e1 ' ) ).to.be.ok()
    expect( is.numeric( ' 1.1e-1 ' ) ).to.be.ok()
    expect( is.numeric( ' 0xFF' ) ).to.be.ok()

    expect( is.numeric( new String( ' 1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' -1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 1.1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' -1.1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 1e1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 1e-1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 1.1e1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 1.1e-1 ' ) ) ).to.be.ok()
    expect( is.numeric( new String( ' 0xFF ' ) ) ).to.be.ok()

    expect( is.numeric( 0 / 0 ) ).to.not.be.ok()
    expect( is.numeric( +1 / 0 ) ).to.not.be.ok()
    expect( is.numeric( -1 / 0 ) ).to.not.be.ok()

    expect( is.number( '' ) ).to.not.be.ok()
    expect( is.number( ' ' ) ).to.not.be.ok()
    expect( is.number( 'one' ) ).to.not.be.ok()
    expect( is.number( '1px' ) ).to.not.be.ok()

  } )

  it( 'is.nan' , function () {
    expect( is.nan( 0 ) ).to.not.be.ok()
    expect( is.nan( 0 / 0 ) ).to.be.ok() // ←
    expect( is.nan( new Number( 0 / 0 ) ) ).to.not.be.ok()
    expect( is.nan( +1 / 0 ) ).to.not.be.ok()
    expect( is.nan( -1 / 0 ) ).to.not.be.ok()
    expect( is.nan( 'one' ) ).to.not.be.ok()

  } )

  it( 'is.odd' , function () {
    expect( is.odd( 1 ) ).to.be.ok() // ←
    expect( is.odd( 2 ) ).to.not.be.ok()
    expect( is.odd( '1' ) ).to.not.be.ok()
    expect( is.odd( '2' ) ).to.not.be.ok()
    expect( is.odd( new Number( 1 ) ) ).to.not.be.ok()
    expect( is.odd( new Number( 2 ) ) ).to.not.be.ok()
    expect( is.odd( 0 / 0 ) ).to.not.be.ok()
    expect( is.odd( +1 / 0 ) ).to.not.be.ok()
    expect( is.odd( -1 / 0 ) ).to.not.be.ok()

  } )

  it( 'is.even' , function () {
    expect( is.even( 1 ) ).to.not.be.ok()
    expect( is.even( 2 ) ).to.be.ok() // ←
    expect( is.even( '1' ) ).to.not.be.ok()
    expect( is.even( '2' ) ).to.not.be.ok()
    expect( is.even( new Number( 1 ) ) ).to.not.be.ok()
    expect( is.even( new Number( 2 ) ) ).to.not.be.ok()
    expect( is.even( 0 / 0 ) ).to.not.be.ok()
    expect( is.even( +1 / 0 ) ).to.not.be.ok()
    expect( is.even( -1 / 0 ) ).to.not.be.ok()

  } )

  it( 'is.finite' , function () {
    expect( is.finite( 0 ) ).to.be.ok() // ←
    expect( is.finite( '0' ) ).to.not.be.ok()
    expect( is.finite( 0 / 0 ) ).to.not.be.ok()
    expect( is.finite( +1 / 0 ) ).to.not.be.ok()
    expect( is.finite( -1 / 0 ) ).to.not.be.ok()

  } )

  it( 'is.infinite' , function () {
    expect( is.infinite( 0 ) ).to.not.be.ok()
    expect( is.infinite( '0' ) ).to.not.be.ok()
    expect( is.infinite( 0 / 0 ) ).to.not.be.ok()
    expect( is.infinite( +1 / 0 ) ).to.be.ok() // ←
    expect( is.infinite( -1 / 0 ) ).to.be.ok() // ←

  } )

  it( 'is.integer' , function () {
    expect( is.integer( 0 ) ).to.be.ok()
    expect( is.integer( '0' ) ).to.not.be.ok()
    expect( is.integer( new Number( 0 ) ) ).to.not.be.ok()
    expect( is.integer( 0.1 ) ).to.not.be.ok()
    expect( is.integer( 0 / 0 ) ).to.not.be.ok()
    expect( is.integer( +1 / 0 ) ).to.not.be.ok()
    expect( is.integer( -1 / 0 ) ).to.not.be.ok()
    expect( is.integer( MAX_SAFE_INTEGER ) ).to.be.ok()
    expect( is.integer( MIN_SAFE_INTEGER ) ).to.be.ok()
    expect( is.integer( MAX_SAFE_INTEGER + 1 ) ).to.be.ok()
    expect( is.integer( MIN_SAFE_INTEGER - 1 ) ).to.be.ok()

  } )

  it( 'is.safeInteger' , function () {
    expect( is.safeInteger( 0 ) ).to.be.ok()
    expect( is.safeInteger( '0' ) ).to.not.be.ok()
    expect( is.safeInteger( new Number( 0 ) ) ).to.not.be.ok()
    expect( is.safeInteger( 0.1 ) ).to.not.be.ok()
    expect( is.safeInteger( 0 / 0 ) ).to.not.be.ok()
    expect( is.safeInteger( +1 / 0 ) ).to.not.be.ok()
    expect( is.safeInteger( -1 / 0 ) ).to.not.be.ok()
    expect( is.safeInteger( MAX_SAFE_INTEGER ) ).to.be.ok()
    expect( is.safeInteger( MIN_SAFE_INTEGER ) ).to.be.ok()
    expect( is.safeInteger( MAX_SAFE_INTEGER + 1 ) ).to.not.be.ok()
    expect( is.safeInteger( MIN_SAFE_INTEGER - 1 ) ).to.not.be.ok()

  } )

} )
