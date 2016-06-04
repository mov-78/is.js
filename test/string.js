describe( 'bundle:string' , function () {

  it( 'is.string' , function () {
    expect( is.string( '' ) ).to.be.ok()
    expect( is.string( new String( '' ) ) ).to.not.be.ok()
  } )

  it( 'is.emptyString' , function () {
    expect( is.emptyString( '' ) ).to.be.ok()
    expect( is.emptyString( ' ' ) ).to.be.ok()
    expect( is.emptyString( '\f\n\r\t' ) ).to.be.ok()
    expect( is.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).to.be.ok()
    expect( is.emptyString( '空' ) ).to.not.be.ok()
  } )

  it( 'is.substring' , function () {

    var isTypeError = function isTypeError( err ) {
      expect( err ).to.be.a( TypeError )
    }
    var isRangeError = function isRangeError( err ) {
      expect( err ).to.be.a( RangeError )
    }

    expect( function () {
      is.substring( 'ps' )
    } ).to.throwException( isTypeError )

    expect( is.substring( 'ps' , 'lipsum' ) ).to.be.ok()
    expect( is.substring( 'sp' , 'lipsum' ) ).to.not.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , 2 ) ).to.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , 3 ) ).to.not.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , -4 ) ).to.be.ok()

    expect( function () {
      is.substring( 'ps' , 'lipsum' , -7 )
    } ).to.throwException( isRangeError )
    expect( function () {
      is.substring( 'ps' , 'lipsum' , 6 )
    } ).to.throwException( isRangeError )

  } )

  it( 'is.startsWith' , function () {
    expect( is.startsWith( 'lipsum' , 'lip' ) ).to.be.ok()
    expect( is.startsWith( 'lipsum' , 'sum' ) ).to.not.be.ok()
    expect( is.startsWith( new String( 'lipsum' ) , 'lip' ) ).to.not.be.ok()
    expect( is.startsWith( 'lipsum' , new String( 'lip' ) ) ).to.be.ok()
  } )

  it( 'is.endsWith' , function () {
    expect( is.endsWith( 'lipsum' , 'lip' ) ).to.not.be.ok()
    expect( is.endsWith( 'lipsum' , 'sum' ) ).to.be.ok()
    expect( is.endsWith( new String( 'lipsum' ) , 'sum' ) ).to.not.be.ok()
    expect( is.endsWith( 'lipsum' , new String( 'sum' ) ) ).to.be.ok()
  } )

} )
