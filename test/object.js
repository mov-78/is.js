/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:object' , function () {

  it( 'is.object' , function () {

    expect( is.object( null ) ).to.be.false
    expect( is.object( void 0 ) ).to.be.false
    expect( is.object( 0 ) ).to.be.false
    expect( is.object( 0 / 0 ) ).to.be.false
    expect( is.object( +1 / 0 ) ).to.be.false
    expect( is.object( -1 / 0 ) ).to.be.false
    expect( is.object( new Number( 0 ) ) ).to.be.false
    expect( is.object( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.object( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.object( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.object( '' ) ).to.be.false
    expect( is.object( new String( '' ) ) ).to.be.false
    expect( is.object( true ) ).to.be.false
    expect( is.object( false ) ).to.be.false
    expect( is.object( new Boolean( true ) ) ).to.be.false
    expect( is.object( new Boolean( false ) ) ).to.be.false
    expect( is.object( {} ) ).to.be.true
    expect( is.object( [] ) ).to.be.true
    expect( is.object( arguments ) ).to.be.true
    expect( is.object( function () {} ) ).to.be.true
    expect( is.object( new Date() ) ).to.be.true
    expect( is.object( new Error() ) ).to.be.true
    expect( is.object( /^/ ) ).to.be.true

    expect( is.not.object( null ) ).to.be.true
    expect( is.not.object( void 0 ) ).to.be.true
    expect( is.not.object( 0 ) ).to.be.true
    expect( is.not.object( 0 / 0 ) ).to.be.true
    expect( is.not.object( +1 / 0 ) ).to.be.true
    expect( is.not.object( -1 / 0 ) ).to.be.true
    expect( is.not.object( new Number( 0 ) ) ).to.be.true
    expect( is.not.object( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.object( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.object( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.object( '' ) ).to.be.true
    expect( is.not.object( new String( '' ) ) ).to.be.true
    expect( is.not.object( true ) ).to.be.true
    expect( is.not.object( false ) ).to.be.true
    expect( is.not.object( new Boolean( true ) ) ).to.be.true
    expect( is.not.object( new Boolean( false ) ) ).to.be.true
    expect( is.not.object( {} ) ).to.be.false
    expect( is.not.object( [] ) ).to.be.false
    expect( is.not.object( arguments ) ).to.be.false
    expect( is.not.object( function () {} ) ).to.be.false
    expect( is.not.object( new Date() ) ).to.be.false
    expect( is.not.object( new Error() ) ).to.be.false
    expect( is.not.object( /^/ ) ).to.be.false

  } )

  it( 'is.emptyObject' , function () {

    expect( is.emptyObject( null ) ).to.be.false
    expect( is.emptyObject( void 0 ) ).to.be.false
    expect( is.emptyObject( 0 ) ).to.be.false
    expect( is.emptyObject( 0 / 0 ) ).to.be.false
    expect( is.emptyObject( +1 / 0 ) ).to.be.false
    expect( is.emptyObject( -1 / 0 ) ).to.be.false
    expect( is.emptyObject( new Number( 0 ) ) ).to.be.false
    expect( is.emptyObject( new Number( 0 / 0 ) ) ).to.be.false
    expect( is.emptyObject( new Number( +1 / 0 ) ) ).to.be.false
    expect( is.emptyObject( new Number( -1 / 0 ) ) ).to.be.false
    expect( is.emptyObject( '' ) ).to.be.false
    expect( is.emptyObject( new String( '' ) ) ).to.be.false
    expect( is.emptyObject( true ) ).to.be.false
    expect( is.emptyObject( false ) ).to.be.false
    expect( is.emptyObject( new Boolean( true ) ) ).to.be.false
    expect( is.emptyObject( new Boolean( false ) ) ).to.be.false
    expect( is.emptyObject( {} ) ).to.be.true
    expect( is.emptyObject( Object.create( {} ) ) ).to.be.true
    expect( is.emptyObject( { foo : 0 } ) ).to.be.false
    expect( is.emptyObject( Object.create( { foo : 0 } ) ) ).to.be.true
    expect( is.emptyObject( [] ) ).to.be.true
    expect( is.emptyObject( arguments ) ).to.be.true
    expect( is.emptyObject( function () {} ) ).to.be.true
    expect( is.emptyObject( new Date() ) ).to.be.true
    expect( is.emptyObject( new Error() ) ).to.be.true
    expect( is.emptyObject( /^/ ) ).to.be.true

    expect( is.not.emptyObject( null ) ).to.be.true
    expect( is.not.emptyObject( void 0 ) ).to.be.true
    expect( is.not.emptyObject( 0 ) ).to.be.true
    expect( is.not.emptyObject( 0 / 0 ) ).to.be.true
    expect( is.not.emptyObject( +1 / 0 ) ).to.be.true
    expect( is.not.emptyObject( -1 / 0 ) ).to.be.true
    expect( is.not.emptyObject( new Number( 0 ) ) ).to.be.true
    expect( is.not.emptyObject( new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.emptyObject( new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.emptyObject( new Number( -1 / 0 ) ) ).to.be.true
    expect( is.not.emptyObject( '' ) ).to.be.true
    expect( is.not.emptyObject( new String( '' ) ) ).to.be.true
    expect( is.not.emptyObject( true ) ).to.be.true
    expect( is.not.emptyObject( false ) ).to.be.true
    expect( is.not.emptyObject( new Boolean( true ) ) ).to.be.true
    expect( is.not.emptyObject( new Boolean( false ) ) ).to.be.true
    expect( is.not.emptyObject( {} ) ).to.be.false
    expect( is.not.emptyObject( Object.create( {} ) ) ).to.be.false
    expect( is.not.emptyObject( { foo : 0 } ) ).to.be.true
    expect( is.not.emptyObject( Object.create( { foo : 0 } ) ) ).to.be.false
    expect( is.not.emptyObject( [] ) ).to.be.false
    expect( is.not.emptyObject( arguments ) ).to.be.false
    expect( is.not.emptyObject( function () {} ) ).to.be.false
    expect( is.not.emptyObject( new Date() ) ).to.be.false
    expect( is.not.emptyObject( new Error() ) ).to.be.false
    expect( is.not.emptyObject( /^/ ) ).to.be.false

  } )

  it( 'is.ownPropertyDefined' , function () {

    expect( is.ownPropertyDefined( null , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( void 0 , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( 0 , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( 0 / 0 , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( +1 / 0 , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( -1 / 0 , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Number( 0 ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Number( 0 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Number( +1 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Number( -1 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( '' , 'length' ) ).to.be.true
    expect( is.ownPropertyDefined( '' , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new String( '' ) , 'length' ) ).to.be.true
    expect( is.ownPropertyDefined( new String( '' ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( true , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( false , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Boolean( true ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Boolean( false ) , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( {} , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( { foo : 0 } , 'foo' ) ).to.be.true
    expect( is.ownPropertyDefined( [] , 'length' ) ).to.be.true
    expect( is.ownPropertyDefined( [] , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( arguments , 'length' ) ).to.be.true
    expect( is.ownPropertyDefined( arguments , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( function () {} , 'length' ) ).to.be.true
    expect( is.ownPropertyDefined( function () {} , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( new Date() , 'getDate' ) ).to.be.false
    expect( is.ownPropertyDefined( new Error() , 'valueOf' ) ).to.be.false
    expect( is.ownPropertyDefined( /^/ , 'lastIndex' ) ).to.be.true
    expect( is.ownPropertyDefined( /^/ , 'valueOf' ) ).to.be.false

    expect( is.not.ownPropertyDefined( null , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( void 0 , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( 0 , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( 0 / 0 , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( +1 / 0 , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( -1 / 0 , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Number( 0 ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Number( 0 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Number( +1 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Number( -1 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( '' , 'length' ) ).to.be.false
    expect( is.not.ownPropertyDefined( '' , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new String( '' ) , 'length' ) ).to.be.false
    expect( is.not.ownPropertyDefined( new String( '' ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( true , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( false , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Boolean( true ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Boolean( false ) , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( {} , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( { foo : 0 } , 'foo' ) ).to.be.false
    expect( is.not.ownPropertyDefined( [] , 'length' ) ).to.be.false
    expect( is.not.ownPropertyDefined( [] , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( arguments , 'length' ) ).to.be.false
    expect( is.not.ownPropertyDefined( arguments , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( function () {} , 'length' ) ).to.be.false
    expect( is.not.ownPropertyDefined( function () {} , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Date() , 'getDate' ) ).to.be.true
    expect( is.not.ownPropertyDefined( new Error() , 'valueOf' ) ).to.be.true
    expect( is.not.ownPropertyDefined( /^/ , 'lastIndex' ) ).to.be.false
    expect( is.not.ownPropertyDefined( /^/ , 'valueOf' ) ).to.be.true

  } )
  it( 'is.propertyDefined' , function () {

    expect( is.propertyDefined( null , 'valueOf' ) ).to.be.false
    expect( is.propertyDefined( void 0 , 'valueOf' ) ).to.be.false
    expect( is.propertyDefined( 0 , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( 0 / 0 , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( +1 / 0 , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( -1 / 0 , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Number( 0 ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Number( 0 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Number( +1 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Number( -1 / 0 ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( '' , 'length' ) ).to.be.true
    expect( is.propertyDefined( '' , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new String( '' ) , 'length' ) ).to.be.true
    expect( is.propertyDefined( new String( '' ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( true , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( false , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Boolean( true ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Boolean( false ) , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( {} , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( { foo : 0 } , 'foo' ) ).to.be.true
    expect( is.propertyDefined( [] , 'length' ) ).to.be.true
    expect( is.propertyDefined( [] , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( arguments , 'length' ) ).to.be.true
    expect( is.propertyDefined( arguments , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( function () {} , 'length' ) ).to.be.true
    expect( is.propertyDefined( function () {} , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( new Date() , 'getDate' ) ).to.be.true
    expect( is.propertyDefined( new Error() , 'valueOf' ) ).to.be.true
    expect( is.propertyDefined( /^/ , 'lastIndex' ) ).to.be.true
    expect( is.propertyDefined( /^/ , 'valueOf' ) ).to.be.true

    expect( is.not.propertyDefined( null , 'valueOf' ) ).to.be.true
    expect( is.not.propertyDefined( void 0 , 'valueOf' ) ).to.be.true
    expect( is.not.propertyDefined( 0 , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( 0 / 0 , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( +1 / 0 , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( -1 / 0 , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Number( 0 ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Number( 0 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Number( +1 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Number( -1 / 0 ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( '' , 'length' ) ).to.be.false
    expect( is.not.propertyDefined( '' , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new String( '' ) , 'length' ) ).to.be.false
    expect( is.not.propertyDefined( new String( '' ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( true , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( false , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Boolean( true ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Boolean( false ) , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( {} , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( { foo : 0 } , 'foo' ) ).to.be.false
    expect( is.not.propertyDefined( [] , 'length' ) ).to.be.false
    expect( is.not.propertyDefined( [] , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( arguments , 'length' ) ).to.be.false
    expect( is.not.propertyDefined( arguments , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( function () {} , 'length' ) ).to.be.false
    expect( is.not.propertyDefined( function () {} , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( new Date() , 'getDate' ) ).to.be.false
    expect( is.not.propertyDefined( new Error() , 'valueOf' ) ).to.be.false
    expect( is.not.propertyDefined( /^/ , 'lastIndex' ) ).to.be.false
    expect( is.not.propertyDefined( /^/ , 'valueOf' ) ).to.be.false

  } )

} )
