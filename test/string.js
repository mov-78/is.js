describe.only( 'bundle:string' , function () {

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

  it( 'is.stringIncludes' , function () {
    expect( is.stringIncludes( 'lipsum' , 'ps' ) ).to.be.ok()
    expect( is.stringIncludes( 'lipsum' , 'sp' ) ).to.not.be.ok()
    expect( is.stringIncludes( new String( 'lipsum' ) , 'ps' ) ).to.not.be.ok()
    expect( is.stringIncludes( 'lipsum' , new String( 'ps' ) ) ).to.be.ok()
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
