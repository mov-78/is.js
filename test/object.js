describe( 'bundle:object' , function () {

  var createObject = Object.create || function createObject( proto ) {
    function Surrogate() {} // eslint-disable-line func-style
    Surrogate.prototype = proto
    return new Surrogate()
  }

  it( 'is.object' , function () {

    expect( is.object( null ) ).to.not.be.ok()
    expect( is.object( void 0 ) ).to.not.be.ok()
    expect( is.object( 0 ) ).to.not.be.ok()
    expect( is.object( new Number( 0 ) ) ).to.be.ok()
    expect( is.object( '' ) ).to.not.be.ok()
    expect( is.object( new String( '' ) ) ).to.be.ok()
    expect( is.object( true ) ).to.not.be.ok()
    expect( is.object( false ) ).to.not.be.ok()
    expect( is.object( new Boolean( true ) ) ).to.be.ok()
    expect( is.object( new Boolean( false ) ) ).to.be.ok()
    expect( is.object( {} ) ).to.be.ok()
    expect( is.object( [] ) ).to.be.ok()
    expect( is.object( function () {} ) ).to.be.ok()

    if ( typeof Symbol === 'function' ) {
      expect( is.object( Symbol( 'is' ) ) ).to.not.be.ok()
      expect( is.object( Symbol[ 'for' ]( 'is' ) ) ).to.not.be.ok()
    }

  } )

  it( 'is.emptyObject' , function () {

    expect( is.emptyObject( {} ) ).to.be.ok()
    expect( is.emptyObject( { foo : 'bar' } ) ).to.not.be.ok()

    // ignore inherited properties
    expect( is.emptyObject( createObject( { foo : 'bar' } ) ) ).to.be.ok()

    if ( Object.defineProperty ) {

      // ignore non-enumerable properties
      expect(
        is.emptyObject(
          Object.defineProperty( {} , 'foo' , { value : 'bar' , enumerable : false } )
        )
      ).to.be.ok()

      if ( typeof Symbol === 'function' ) {
        // ignore non-string-keyed properties
        expect(
          is.emptyObject(
            Object.defineProperty( {} , Symbol() , { value : 'bar' , enumerable : true } )
          )
        ).to.be.ok()
      }

    }

  } )

  it( 'is.propertyDefined' , function () {

    var fixture = { foo : { bar : { baz : 0 } } }

    expect( is.propertyDefined( createObject( { foo : 'bar' } ) , 'foo' ) ).to.be.ok()

    expect( is.propertyDefined( fixture , 'foo' ) ).to.be.ok()
    expect( is.propertyDefined( fixture , 'fool' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.bar' ) ).to.be.ok()
    expect( is.propertyDefined( fixture , 'fool.bar' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.ball' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'fool.ball' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.bar.baz' ) ).to.be.ok()
    expect( is.propertyDefined( fixture , 'fool.bar.baz' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.ball.baz' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.bar.ballon' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'fool.ball.baz' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'fool.bar.ballon' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.ball.ballon' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'fool.ball.ballon' ) ).to.not.be.ok()
    expect( is.propertyDefined( fixture , 'foo.bar.baz.qux' ) ).to.not.be.ok()

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
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number }
      )
    ).to.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number }
      )
    ).to.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.string }
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.number }
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.string }
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number , baz : is.number }
      )
    ).to.not.be.ok()


    //
    // strict mode
    //

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string } ,
        true
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number } ,
        true
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number } ,
        true
      )
    ).to.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.string } ,
        true
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.number } ,
        true
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.string , bar : is.string } ,
        true
      )
    ).to.not.be.ok()

    expect(
      is.conforms(
        { foo : 0 , bar : 1 } ,
        { foo : is.number , bar : is.number , baz : is.number } ,
        true
      )
    ).to.not.be.ok()

  } )

} )
