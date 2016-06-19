describe( 'bundle:object' , function () {

  var createObject = Object.create || function createObject( proto ) {
    function Surrogate() {} // eslint-disable-line func-style
    Surrogate.prototype = proto
    return new Surrogate()
  }

  it( 'is.object' , function () {

    expect( is.object( null ) ).not.toBeTruthy()
    expect( is.object( void 0 ) ).not.toBeTruthy()
    expect( is.object( 0 ) ).not.toBeTruthy()
    expect( is.object( new Number( 0 ) ) ).toBeTruthy()
    expect( is.object( '' ) ).not.toBeTruthy()
    expect( is.object( new String( '' ) ) ).toBeTruthy()
    expect( is.object( true ) ).not.toBeTruthy()
    expect( is.object( false ) ).not.toBeTruthy()
    expect( is.object( new Boolean( true ) ) ).toBeTruthy()
    expect( is.object( new Boolean( false ) ) ).toBeTruthy()
    expect( is.object( {} ) ).toBeTruthy()
    expect( is.object( [] ) ).toBeTruthy()
    expect( is.object( function () {} ) ).toBeTruthy()

    if ( typeof Symbol === 'function' ) {
      expect( is.object( Symbol( 'is' ) ) ).not.toBeTruthy()
      expect( is.object( Symbol[ 'for' ]( 'is' ) ) ).not.toBeTruthy()
    }

  } )

  it( 'is.emptyObject' , function () {

    var supportsDefineProperty = ( function () {

      if ( !Object.defineProperty ) {
        return false
      }

      try {
        // IE8 does define `Object.defineProperty`, but only DOM elements are allowed.
        Object.defineProperty( {} , 'phony' , {} )
      } catch ( error ) {
        return false
      }

      return true

    } )()

    expect( is.emptyObject( {} ) ).toBeTruthy()
    expect( is.emptyObject( { foo : 'bar' } ) ).not.toBeTruthy()

    // ignore inherited properties
    expect( is.emptyObject( createObject( { foo : 'bar' } ) ) ).toBeTruthy()

    if ( supportsDefineProperty ) {

      // ignore non-enumerable properties
      expect(
        is.emptyObject(
          Object.defineProperty( {} , 'foo' , { value : 'bar' , enumerable : false } )
        )
      ).toBeTruthy()

      if ( typeof Symbol === 'function' ) {
        // ignore non-string-keyed properties
        expect(
          is.emptyObject(
            Object.defineProperty( {} , Symbol() , { value : 'bar' , enumerable : true } )
          )
        ).toBeTruthy()
      }

    }

  } )

  it( 'is.propertyDefined' , function () {

    var fixture = { foo : { bar : { baz : 0 } } }

    expect( is.propertyDefined( createObject( { foo : 'bar' } ) , 'foo' ) ).toBeTruthy()

    expect( is.propertyDefined( fixture , 'foo' ) ).toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.bar' ) ).toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.bar' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.ball' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.ball' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.bar.baz' ) ).toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.bar.baz' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.ball.baz' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.bar.ballon' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.ball.baz' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.bar.ballon' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.ball.ballon' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'fool.ball.ballon' ) ).not.toBeTruthy()
    expect( is.propertyDefined( fixture , 'foo.bar.baz.qux' ) ).not.toBeTruthy()

    // `path` will be converted to a string as needed
    expect( is.propertyDefined( fixture , new String( 'foo.bar.baz' ) ) ).toBeTruthy()
    expect( is.propertyDefined( fixture , [ 'foo.bar.baz' ] ) ).toBeTruthy()

  } )

  it( 'is.conforms' , function () {

    //
    // non-strict mode
    //

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string }
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number }
      )
    ).toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number }
      )
    ).toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.string }
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.number }
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.string }
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number , baz : is.number }
      )
    ).not.toBeTruthy()


    //
    // strict mode
    //

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string } ,
        true
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number } ,
        true
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number } ,
        true
      )
    ).toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.string } ,
        true
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.number } ,
        true
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.string } ,
        true
      )
    ).not.toBeTruthy()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number , baz : is.number } ,
        true
      )
    ).not.toBeTruthy()

  } )

} )
