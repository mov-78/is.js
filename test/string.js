describe( 'bundle:string' , function () {

  var isTypeError = function isTypeError( err ) {
    expect( err ).to.be.a( TypeError )
  }
  var isRangeError = function isRangeError( err ) {
    expect( err ).to.be.a( RangeError )
  }

  it( 'is.string' , function () {

    expect( is.string( '' ) ).to.be.ok()
    expect( is.string( new String( '' ) ) ).to.not.be.ok()

    expect( is.not.string( '' ) ).to.not.be.ok()
    expect( is.not.string( new String( '' ) ) ).to.be.ok()

  } )

  it( 'is.emptyString' , function () {

    expect( is.emptyString( '' ) ).to.be.ok()
    expect( is.emptyString( ' ' ) ).to.be.ok()
    expect( is.emptyString( '\f\n\r\t' ) ).to.be.ok()
    expect( is.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).to.be.ok()
    expect( is.emptyString( '空' ) ).to.not.be.ok() // ←

    expect( is.not.emptyString( '' ) ).to.not.be.ok()
    expect( is.not.emptyString( ' ' ) ).to.not.be.ok()
    expect( is.not.emptyString( '\f\n\r\t' ) ).to.not.be.ok()
    expect( is.not.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) ).to.not.be.ok()
    expect( is.not.emptyString( '空' ) ).to.be.ok() // ←

  } )

  it( 'is.substring' , function () {

    expect( function () {
      is.substring( 'ps' , { toString : 'lipsum' } )
    } ).to.throwException( isTypeError )
    expect( function () {
      is.substring( [ 'ps' ] , 'lipsum' )
    } ).to.not.throwException()

    expect( is.substring( 'ps' , 'lipsum' ) ).to.be.ok()
    expect( is.substring( new String( 'ps' ) , 'lipsum' ) ).to.be.ok()
    expect( is.substring( 'sp' , 'lipsum' ) ).to.not.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , 0.1 ) ).to.be.ok() // same as offset=0
    expect( is.substring( 'ps' , 'lipsum' , '1000' ) ).to.be.ok() // same as offset=0
    expect( is.substring( 'ps' , 'lipsum' , 0 / 0 ) ).to.be.ok() // same as offset=0
    expect( is.substring( 'ps' , 'lipsum' , +1 / 0 ) ).to.be.ok() // same as offset=0
    expect( is.substring( 'ps' , 'lipsum' , -1 / 0 ) ).to.be.ok() // same as offset=0
    expect( is.substring( 'ps' , 'lipsum' , 2 ) ).to.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , 3 ) ).to.not.be.ok()
    expect( is.substring( 'ps' , 'lipsum' , -4 ) ).to.be.ok()

    expect( function () {
      is.substring( 'ps' , 'lipsum' , -7 )
    } ).to.throwException( isRangeError )
    expect( function () {
      is.substring( 'ps' , 'lipsum' , 6 )
    } ).to.throwException( isRangeError )


    expect( function () {
      is.not.substring( 'ps' , { toString : 'lipsum' } )
    } ).to.throwException( isTypeError )
    expect( function () {
      is.not.substring( [ 'ps' ] , 'lipsum' )
    } ).to.not.throwException()

    expect( is.not.substring( 'ps' , 'lipsum' ) ).to.not.be.ok()
    expect( is.not.substring( new String( 'ps' ) , 'lipsum' ) ).to.not.be.ok()
    expect( is.not.substring( 'sp' , 'lipsum' ) ).to.be.ok()
    expect( is.not.substring( 'ps' , 'lipsum' , 0.1 ) ).to.not.be.ok() // same as offset=0
    expect( is.not.substring( 'ps' , 'lipsum' , '1000' ) ).to.not.be.ok() // same as offset=0
    expect( is.not.substring( 'ps' , 'lipsum' , 0 / 0 ) ).to.not.be.ok() // same as offset=0
    expect( is.not.substring( 'ps' , 'lipsum' , +1 / 0 ) ).to.not.be.ok() // same as offset=0
    expect( is.not.substring( 'ps' , 'lipsum' , -1 / 0 ) ).to.not.be.ok() // same as offset=0
    expect( is.not.substring( 'ps' , 'lipsum' , 2 ) ).to.not.be.ok()
    expect( is.not.substring( 'ps' , 'lipsum' , 3 ) ).to.be.ok()
    expect( is.not.substring( 'ps' , 'lipsum' , -4 ) ).to.not.be.ok()

    expect( function () {
      is.not.substring( 'ps' , 'lipsum' , -7 )
    } ).to.throwException( isRangeError )
    expect( function () {
      is.not.substring( 'ps' , 'lipsum' , 6 )
    } ).to.throwException( isRangeError )

  } )

  it( 'is.prefix' , function () {

    expect( is.prefix( 'lip' , 'lipsum' ) ).to.be.ok()
    expect( is.prefix( 'sum' , 'lipsum' ) ).to.not.be.ok()
    expect( function () {
      is.prefix( 'lip' , [ 'lipsum' ] )
    } ).to.throwException( isTypeError )
    expect( is.prefix( [ 'lip' ] , 'lipsum' ) ).to.be.ok()

    expect( is.not.prefix( 'lip' , 'lipsum' ) ).to.not.be.ok()
    expect( is.not.prefix( 'sum' , 'lipsum' ) ).to.be.ok()
    expect( function () {
      is.not.prefix( 'lip' , [ 'lipsum' ] )
    } ).to.throwException( isTypeError )
    expect( is.not.prefix( [ 'lip' ] , 'lipsum' ) ).to.not.be.ok()

  } )

  it( 'is.suffix' , function () {

    expect( is.suffix( 'lip' , 'lipsum' ) ).to.not.be.ok()
    expect( is.suffix( 'sum' , 'lipsum' ) ).to.be.ok()
    expect( function () {
      is.suffix( 'sum' , [ 'lipsum' ] )
    } ).to.throwException( isTypeError )
    expect( is.suffix( [ 'sum' ] , 'lipsum' ) ).to.be.ok()

    expect( is.not.suffix( 'lip' , 'lipsum' ) ).to.be.ok()
    expect( is.not.suffix( 'sum' , 'lipsum' ) ).to.not.be.ok()
    expect( function () {
      is.not.suffix( 'sum' , [ 'lipsum' ] )
    } ).to.throwException( isTypeError )
    expect( is.not.suffix( [ 'sum' ] , 'lipsum' ) ).to.not.be.ok()

  } )

} )
