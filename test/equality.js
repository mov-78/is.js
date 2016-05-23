/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:equality' , function () {

  it( 'is.equal' , function () {

    expect( is.equal( null , null ) ).to.be.true
    expect( is.equal( null , void 0 ) ).to.be.false
    expect( is.equal( null , 0 ) ).to.be.false
    expect( is.equal( null , 0 / 0 ) ).to.be.false
    expect( is.equal( null , +1 / 0 ) ).to.be.false
    expect( is.equal( null , -1 / 0 ) ).to.be.false
    expect( is.equal( null , new Number( 0 ) ) ).to.be.false
    expect( is.equal( null , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( null , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( null , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( null , '' ) ).to.be.false
    expect( is.equal( null , new String( '' ) ) ).to.be.false
    expect( is.equal( null , true ) ).to.be.false
    expect( is.equal( null , false ) ).to.be.false
    expect( is.equal( null , new Boolean( true ) ) ).to.be.false
    expect( is.equal( null , new Boolean( false ) ) ).to.be.false
    expect( is.equal( null , {} ) ).to.be.false
    expect( is.equal( null , { foo : 0 } ) ).to.be.false
    expect( is.equal( null , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( null , [] ) ).to.be.false
    expect( is.equal( null , [ 0 ] ) ).to.be.false
    expect( is.equal( null , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( null , arguments ) ).to.be.false
    expect( is.equal( null , function () {} ) ).to.be.false
    expect( is.equal( null , new Date() ) ).to.be.false
    expect( is.equal( null , new Error() ) ).to.be.false
    expect( is.equal( null , /^/ ) ).to.be.false

    expect( is.equal( void 0 , null ) ).to.be.false
    expect( is.equal( void 0 , void 0 ) ).to.be.true
    expect( is.equal( void 0 , 0 ) ).to.be.false
    expect( is.equal( void 0 , 0 / 0 ) ).to.be.false
    expect( is.equal( void 0 , +1 / 0 ) ).to.be.false
    expect( is.equal( void 0 , -1 / 0 ) ).to.be.false
    expect( is.equal( void 0 , new Number( 0 ) ) ).to.be.false
    expect( is.equal( void 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( void 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( void 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( void 0 , '' ) ).to.be.false
    expect( is.equal( void 0 , new String( '' ) ) ).to.be.false
    expect( is.equal( void 0 , true ) ).to.be.false
    expect( is.equal( void 0 , false ) ).to.be.false
    expect( is.equal( void 0 , new Boolean( true ) ) ).to.be.false
    expect( is.equal( void 0 , new Boolean( false ) ) ).to.be.false
    expect( is.equal( void 0 , {} ) ).to.be.false
    expect( is.equal( void 0 , { foo : 0 } ) ).to.be.false
    expect( is.equal( void 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( void 0 , [] ) ).to.be.false
    expect( is.equal( void 0 , [ 0 ] ) ).to.be.false
    expect( is.equal( void 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( void 0 , arguments ) ).to.be.false
    expect( is.equal( void 0 , function () {} ) ).to.be.false
    expect( is.equal( void 0 , new Date() ) ).to.be.false
    expect( is.equal( void 0 , new Error() ) ).to.be.false
    expect( is.equal( void 0 , /^/ ) ).to.be.false

    expect( is.equal( 0 , null ) ).to.be.false
    expect( is.equal( 0 , void 0 ) ).to.be.false
    expect( is.equal( 0 , 0 ) ).to.be.true
    expect( is.equal( 0 , 0 / 0 ) ).to.be.false
    expect( is.equal( 0 , +1 / 0 ) ).to.be.false
    expect( is.equal( 0 , -1 / 0 ) ).to.be.false
    expect( is.equal( 0 , new Number( 0 ) ) ).to.be.true
    expect( is.equal( 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( 0 , '' ) ).to.be.false
    expect( is.equal( 0 , new String( '' ) ) ).to.be.false
    expect( is.equal( 0 , true ) ).to.be.false
    expect( is.equal( 0 , false ) ).to.be.false
    expect( is.equal( 0 , new Boolean( true ) ) ).to.be.false
    expect( is.equal( 0 , new Boolean( false ) ) ).to.be.false
    expect( is.equal( 0 , {} ) ).to.be.false
    expect( is.equal( 0 , { foo : 0 } ) ).to.be.false
    expect( is.equal( 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( 0 , [] ) ).to.be.false
    expect( is.equal( 0 , [ 0 ] ) ).to.be.false
    expect( is.equal( 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( 0 , arguments ) ).to.be.false
    expect( is.equal( 0 , function () {} ) ).to.be.false
    expect( is.equal( 0 , new Date() ) ).to.be.false
    expect( is.equal( 0 , new Error() ) ).to.be.false
    expect( is.equal( 0 , /^/ ) ).to.be.false

    expect( is.equal( 0 / 0 , null ) ).to.be.false
    expect( is.equal( 0 / 0 , void 0 ) ).to.be.false
    expect( is.equal( 0 / 0 , 0 ) ).to.be.false
    expect( is.equal( 0 / 0 , 0 / 0 ) ).to.be.true
    expect( is.equal( 0 / 0 , +1 / 0 ) ).to.be.false
    expect( is.equal( 0 / 0 , -1 / 0 ) ).to.be.false
    expect( is.equal( 0 / 0 , new Number( 0 ) ) ).to.be.false
    expect( is.equal( 0 / 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.equal( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( 0 / 0 , '' ) ).to.be.false
    expect( is.equal( 0 / 0 , new String( '' ) ) ).to.be.false
    expect( is.equal( 0 / 0 , true ) ).to.be.false
    expect( is.equal( 0 / 0 , false ) ).to.be.false
    expect( is.equal( 0 / 0 , new Boolean( true ) ) ).to.be.false
    expect( is.equal( 0 / 0 , new Boolean( false ) ) ).to.be.false
    expect( is.equal( 0 / 0 , {} ) ).to.be.false
    expect( is.equal( 0 / 0 , { foo : 0 } ) ).to.be.false
    expect( is.equal( 0 / 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( 0 / 0 , [] ) ).to.be.false
    expect( is.equal( 0 / 0 , [ 0 ] ) ).to.be.false
    expect( is.equal( 0 / 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( 0 / 0 , arguments ) ).to.be.false
    expect( is.equal( 0 / 0 , function () {} ) ).to.be.false
    expect( is.equal( 0 / 0 , new Date() ) ).to.be.false
    expect( is.equal( 0 / 0 , new Error() ) ).to.be.false
    expect( is.equal( 0 / 0 , /^/ ) ).to.be.false

    expect( is.equal( new Number( 0 ) , null ) ).to.be.false
    expect( is.equal( new Number( 0 ) , void 0 ) ).to.be.false
    expect( is.equal( new Number( 0 ) , 0 ) ).to.be.true
    expect( is.equal( new Number( 0 ) , 0 / 0 ) ).to.be.false
    expect( is.equal( new Number( 0 ) , +1 / 0 ) ).to.be.false
    expect( is.equal( new Number( 0 ) , -1 / 0 ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Number( new Number( 0 ) ) ) ).to.be.true
    expect( is.equal( new Number( 0 ) , new Number( new Number( 0 ) / 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , '' ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new String( '' ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , true ) ).to.be.false
    expect( is.equal( new Number( 0 ) , false ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new Number( 0 ) , {} ) ).to.be.false
    expect( is.equal( new Number( 0 ) , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Number( 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Number( 0 ) , [] ) ).to.be.false
    expect( is.equal( new Number( 0 ) , [ 0 ] ) ).to.be.false
    expect( is.equal( new Number( 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Number( 0 ) , arguments ) ).to.be.false
    expect( is.equal( new Number( 0 ) , function () {} ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Date() ) ).to.be.false
    expect( is.equal( new Number( 0 ) , new Error() ) ).to.be.false
    expect( is.equal( new Number( 0 ) , /^/ ) ).to.be.false

    expect( is.equal( new Number( 0 / 0 ) , null ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , void 0 ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , 0 ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , 0 / 0 ) ).to.be.true
    expect( is.equal( new Number( 0 / 0 ) , +1 / 0 ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , -1 / 0 ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.equal( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , '' ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new String( '' ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , true ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , false ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , {} ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , [] ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , [ 0 ] ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , arguments ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , function () {} ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Date() ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , new Error() ) ).to.be.false
    expect( is.equal( new Number( 0 / 0 ) , /^/ ) ).to.be.false

    expect( is.equal( '' , null ) ).to.be.false
    expect( is.equal( '' , void 0 ) ).to.be.false
    expect( is.equal( '' , 0 ) ).to.be.false
    expect( is.equal( '' , 0 / 0 ) ).to.be.false
    expect( is.equal( '' , +1 / 0 ) ).to.be.false
    expect( is.equal( '' , -1 / 0 ) ).to.be.false
    expect( is.equal( '' , new Number( 0 ) ) ).to.be.false
    expect( is.equal( '' , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( '' , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( '' , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( '' , '' ) ).to.be.true
    expect( is.equal( '' , new String( '' ) ) ).to.be.true
    expect( is.equal( '' , true ) ).to.be.false
    expect( is.equal( '' , false ) ).to.be.false
    expect( is.equal( '' , new Boolean( true ) ) ).to.be.false
    expect( is.equal( '' , new Boolean( false ) ) ).to.be.false
    expect( is.equal( '' , {} ) ).to.be.false
    expect( is.equal( '' , { foo : 0 } ) ).to.be.false
    expect( is.equal( '' , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( '' , [] ) ).to.be.false
    expect( is.equal( '' , [ 0 ] ) ).to.be.false
    expect( is.equal( '' , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( '' , arguments ) ).to.be.false
    expect( is.equal( '' , function () {} ) ).to.be.false
    expect( is.equal( '' , new Date() ) ).to.be.false
    expect( is.equal( '' , new Error() ) ).to.be.false
    expect( is.equal( '' , /^/ ) ).to.be.false

    expect( is.equal( new String( '' ) , null ) ).to.be.false
    expect( is.equal( new String( '' ) , void 0 ) ).to.be.false
    expect( is.equal( new String( '' ) , 0 ) ).to.be.false
    expect( is.equal( new String( '' ) , 0 / 0 ) ).to.be.false
    expect( is.equal( new String( '' ) , +1 / 0 ) ).to.be.false
    expect( is.equal( new String( '' ) , -1 / 0 ) ).to.be.false
    expect( is.equal( new String( '' ) , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new String( '' ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new String( '' ) , '' ) ).to.be.true
    expect( is.equal( new String( '' ) , new String( '' ) ) ).to.be.true
    expect( is.equal( new String( '' ) , true ) ).to.be.false
    expect( is.equal( new String( '' ) , false ) ).to.be.false
    expect( is.equal( new String( '' ) , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new String( '' ) , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new String( '' ) , {} ) ).to.be.false
    expect( is.equal( new String( '' ) , { foo : 0 } ) ).to.be.false
    expect( is.equal( new String( '' ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new String( '' ) , [] ) ).to.be.false
    expect( is.equal( new String( '' ) , [ 0 ] ) ).to.be.false
    expect( is.equal( new String( '' ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new String( '' ) , arguments ) ).to.be.false
    expect( is.equal( new String( '' ) , function () {} ) ).to.be.false
    expect( is.equal( new String( '' ) , new Date() ) ).to.be.false
    expect( is.equal( new String( '' ) , new Error() ) ).to.be.false
    expect( is.equal( new String( '' ) , /^/ ) ).to.be.false

    expect( is.equal( true , null ) ).to.be.false
    expect( is.equal( true , void 0 ) ).to.be.false
    expect( is.equal( true , 0 ) ).to.be.false
    expect( is.equal( true , 0 / 0 ) ).to.be.false
    expect( is.equal( true , +1 / 0 ) ).to.be.false
    expect( is.equal( true , -1 / 0 ) ).to.be.false
    expect( is.equal( true , new Number( 0 ) ) ).to.be.false
    expect( is.equal( true , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( true , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( true , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( true , '' ) ).to.be.false
    expect( is.equal( true , new String( '' ) ) ).to.be.false
    expect( is.equal( true , true ) ).to.be.true
    expect( is.equal( true , false ) ).to.be.false
    expect( is.equal( true , new Boolean( true ) ) ).to.be.true
    expect( is.equal( true , new Boolean( false ) ) ).to.be.false
    expect( is.equal( true , {} ) ).to.be.false
    expect( is.equal( true , { foo : 0 } ) ).to.be.false
    expect( is.equal( true , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( true , [] ) ).to.be.false
    expect( is.equal( true , [ 0 ] ) ).to.be.false
    expect( is.equal( true , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( true , arguments ) ).to.be.false
    expect( is.equal( true , function () {} ) ).to.be.false
    expect( is.equal( true , new Date() ) ).to.be.false
    expect( is.equal( true , new Error() ) ).to.be.false
    expect( is.equal( true , /^/ ) ).to.be.false

    expect( is.equal( false , null ) ).to.be.false
    expect( is.equal( false , void 0 ) ).to.be.false
    expect( is.equal( false , 0 ) ).to.be.false
    expect( is.equal( false , 0 / 0 ) ).to.be.false
    expect( is.equal( false , +1 / 0 ) ).to.be.false
    expect( is.equal( false , -1 / 0 ) ).to.be.false
    expect( is.equal( false , new Number( 0 ) ) ).to.be.false
    expect( is.equal( false , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( false , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( false , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( false , '' ) ).to.be.false
    expect( is.equal( false , new String( '' ) ) ).to.be.false
    expect( is.equal( false , true ) ).to.be.false
    expect( is.equal( false , false ) ).to.be.true
    expect( is.equal( false , new Boolean( true ) ) ).to.be.false
    expect( is.equal( false , new Boolean( false ) ) ).to.be.true
    expect( is.equal( false , {} ) ).to.be.false
    expect( is.equal( false , { foo : 0 } ) ).to.be.false
    expect( is.equal( false , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( false , [] ) ).to.be.false
    expect( is.equal( false , [ 0 ] ) ).to.be.false
    expect( is.equal( false , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( false , arguments ) ).to.be.false
    expect( is.equal( false , function () {} ) ).to.be.false
    expect( is.equal( false , new Date() ) ).to.be.false
    expect( is.equal( false , new Error() ) ).to.be.false
    expect( is.equal( false , /^/ ) ).to.be.false

    expect( is.equal( new Boolean( true ) , null ) ).to.be.false
    expect( is.equal( new Boolean( true ) , void 0 ) ).to.be.false
    expect( is.equal( new Boolean( true ) , 0 ) ).to.be.false
    expect( is.equal( new Boolean( true ) , 0 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( true ) , +1 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( true ) , -1 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , '' ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new String( '' ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , true ) ).to.be.true
    expect( is.equal( new Boolean( true ) , false ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Boolean( true ) ) ).to.be.true
    expect( is.equal( new Boolean( true ) , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new Boolean( true ) , {} ) ).to.be.false
    expect( is.equal( new Boolean( true ) , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Boolean( true ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Boolean( true ) , [] ) ).to.be.false
    expect( is.equal( new Boolean( true ) , [ 0 ] ) ).to.be.false
    expect( is.equal( new Boolean( true ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Boolean( true ) , arguments ) ).to.be.false
    expect( is.equal( new Boolean( true ) , function () {} ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Date() ) ).to.be.false
    expect( is.equal( new Boolean( true ) , new Error() ) ).to.be.false
    expect( is.equal( new Boolean( true ) , /^/ ) ).to.be.false

    expect( is.equal( new Boolean( false ) , null ) ).to.be.false
    expect( is.equal( new Boolean( false ) , void 0 ) ).to.be.false
    expect( is.equal( new Boolean( false ) , 0 ) ).to.be.false
    expect( is.equal( new Boolean( false ) , 0 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( false ) , +1 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( false ) , -1 / 0 ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , '' ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new String( '' ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , true ) ).to.be.false
    expect( is.equal( new Boolean( false ) , false ) ).to.be.true
    expect( is.equal( new Boolean( false ) , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Boolean( false ) ) ).to.be.true
    expect( is.equal( new Boolean( false ) , {} ) ).to.be.false
    expect( is.equal( new Boolean( false ) , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Boolean( false ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Boolean( false ) , [] ) ).to.be.false
    expect( is.equal( new Boolean( false ) , [ 0 ] ) ).to.be.false
    expect( is.equal( new Boolean( false ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Boolean( false ) , arguments ) ).to.be.false
    expect( is.equal( new Boolean( false ) , function () {} ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Date() ) ).to.be.false
    expect( is.equal( new Boolean( false ) , new Error() ) ).to.be.false
    expect( is.equal( new Boolean( false ) , /^/ ) ).to.be.false

    expect( is.equal( {} , null ) ).to.be.false
    expect( is.equal( {} , void 0 ) ).to.be.false
    expect( is.equal( {} , 0 ) ).to.be.false
    expect( is.equal( {} , 0 / 0 ) ).to.be.false
    expect( is.equal( {} , +1 / 0 ) ).to.be.false
    expect( is.equal( {} , -1 / 0 ) ).to.be.false
    expect( is.equal( {} , new Number( 0 ) ) ).to.be.false
    expect( is.equal( {} , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( {} , '' ) ).to.be.false
    expect( is.equal( {} , new String( '' ) ) ).to.be.false
    expect( is.equal( {} , true ) ).to.be.false
    expect( is.equal( {} , false ) ).to.be.false
    expect( is.equal( {} , new Boolean( true ) ) ).to.be.false
    expect( is.equal( {} , new Boolean( false ) ) ).to.be.false
    expect( is.equal( {} , {} ) ).to.be.false
    expect( is.equal( {} , { foo : 0 } ) ).to.be.false
    expect( is.equal( {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( {} , [] ) ).to.be.false
    expect( is.equal( {} , [ 0 ] ) ).to.be.false
    expect( is.equal( {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( {} , arguments ) ).to.be.false
    expect( is.equal( {} , function () {} ) ).to.be.false
    expect( is.equal( {} , new Date() ) ).to.be.false
    expect( is.equal( {} , new Error() ) ).to.be.false
    expect( is.equal( {} , /^/ ) ).to.be.false

    expect( is.equal( { foo : 0 } , null ) ).to.be.false
    expect( is.equal( { foo : 0 } , void 0 ) ).to.be.false
    expect( is.equal( { foo : 0 } , 0 ) ).to.be.false
    expect( is.equal( { foo : 0 } , 0 / 0 ) ).to.be.false
    expect( is.equal( { foo : 0 } , +1 / 0 ) ).to.be.false
    expect( is.equal( { foo : 0 } , -1 / 0 ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Number( 0 ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , '' ) ).to.be.false
    expect( is.equal( { foo : 0 } , new String( '' ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , true ) ).to.be.false
    expect( is.equal( { foo : 0 } , false ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Boolean( true ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Boolean( false ) ) ).to.be.false
    expect( is.equal( { foo : 0 } , {} ) ).to.be.false
    expect( is.equal( { foo : 0 } , { foo : 0 } ) ).to.be.false
    expect( is.equal( { foo : 0 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( { foo : 0 } , [] ) ).to.be.false
    expect( is.equal( { foo : 0 } , [ 0 ] ) ).to.be.false
    expect( is.equal( { foo : 0 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( { foo : 0 } , arguments ) ).to.be.false
    expect( is.equal( { foo : 0 } , function () {} ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Date() ) ).to.be.false
    expect( is.equal( { foo : 0 } , new Error() ) ).to.be.false
    expect( is.equal( { foo : 0 } , /^/ ) ).to.be.false

    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , null ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , void 0 ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 / 0 ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , +1 / 0 ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , -1 / 0 ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , '' ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new String( '' ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , true ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , false ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( true ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( false ) ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , {} ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : 0 } ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [] ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 ] ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , arguments ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , function () {} ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Date() ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Error() ) ).to.be.false
    expect( is.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , /^/ ) ).to.be.false

    expect( is.equal( [] , null ) ).to.be.false
    expect( is.equal( [] , void 0 ) ).to.be.false
    expect( is.equal( [] , 0 ) ).to.be.false
    expect( is.equal( [] , 0 / 0 ) ).to.be.false
    expect( is.equal( [] , +1 / 0 ) ).to.be.false
    expect( is.equal( [] , -1 / 0 ) ).to.be.false
    expect( is.equal( [] , new Number( 0 ) ) ).to.be.false
    expect( is.equal( [] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( [] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [] , '' ) ).to.be.false
    expect( is.equal( [] , new String( '' ) ) ).to.be.false
    expect( is.equal( [] , true ) ).to.be.false
    expect( is.equal( [] , false ) ).to.be.false
    expect( is.equal( [] , new Boolean( true ) ) ).to.be.false
    expect( is.equal( [] , new Boolean( false ) ) ).to.be.false
    expect( is.equal( [] , {} ) ).to.be.false
    expect( is.equal( [] , { foo : 0 } ) ).to.be.false
    expect( is.equal( [] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( [] , [] ) ).to.be.false
    expect( is.equal( [] , [ 0 ] ) ).to.be.false
    expect( is.equal( [] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( [] , arguments ) ).to.be.false
    expect( is.equal( [] , function () {} ) ).to.be.false
    expect( is.equal( [] , new Date() ) ).to.be.false
    expect( is.equal( [] , new Error() ) ).to.be.false
    expect( is.equal( [] , /^/ ) ).to.be.false

    expect( is.equal( [ 0 ] , null ) ).to.be.false
    expect( is.equal( [ 0 ] , void 0 ) ).to.be.false
    expect( is.equal( [ 0 ] , 0 ) ).to.be.false
    expect( is.equal( [ 0 ] , 0 / 0 ) ).to.be.false
    expect( is.equal( [ 0 ] , +1 / 0 ) ).to.be.false
    expect( is.equal( [ 0 ] , -1 / 0 ) ).to.be.false
    expect( is.equal( [ 0 ] , new Number( 0 ) ) ).to.be.false
    expect( is.equal( [ 0 ] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 ] , '' ) ).to.be.false
    expect( is.equal( [ 0 ] , new String( '' ) ) ).to.be.false
    expect( is.equal( [ 0 ] , true ) ).to.be.false
    expect( is.equal( [ 0 ] , false ) ).to.be.false
    expect( is.equal( [ 0 ] , new Boolean( true ) ) ).to.be.false
    expect( is.equal( [ 0 ] , new Boolean( false ) ) ).to.be.false
    expect( is.equal( [ 0 ] , {} ) ).to.be.false
    expect( is.equal( [ 0 ] , { foo : 0 } ) ).to.be.false
    expect( is.equal( [ 0 ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( [ 0 ] , [] ) ).to.be.false
    expect( is.equal( [ 0 ] , [ 0 ] ) ).to.be.false
    expect( is.equal( [ 0 ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( [ 0 ] , arguments ) ).to.be.false
    expect( is.equal( [ 0 ] , function () {} ) ).to.be.false
    expect( is.equal( [ 0 ] , new Date() ) ).to.be.false
    expect( is.equal( [ 0 ] , new Error() ) ).to.be.false
    expect( is.equal( [ 0 ] , /^/ ) ).to.be.false

    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , null ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , void 0 ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 / 0 ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , +1 / 0 ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , -1 / 0 ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , '' ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new String( '' ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , true ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , false ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( true ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( false ) ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , {} ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : 0 } ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [] ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 ] ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , arguments ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , function () {} ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Date() ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Error() ) ).to.be.false
    expect( is.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , /^/ ) ).to.be.false

    expect( is.equal( arguments , null ) ).to.be.false
    expect( is.equal( arguments , void 0 ) ).to.be.false
    expect( is.equal( arguments , 0 ) ).to.be.false
    expect( is.equal( arguments , 0 / 0 ) ).to.be.false
    expect( is.equal( arguments , +1 / 0 ) ).to.be.false
    expect( is.equal( arguments , -1 / 0 ) ).to.be.false
    expect( is.equal( arguments , new Number( 0 ) ) ).to.be.false
    expect( is.equal( arguments , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( arguments , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( arguments , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( arguments , '' ) ).to.be.false
    expect( is.equal( arguments , new String( '' ) ) ).to.be.false
    expect( is.equal( arguments , true ) ).to.be.false
    expect( is.equal( arguments , false ) ).to.be.false
    expect( is.equal( arguments , new Boolean( true ) ) ).to.be.false
    expect( is.equal( arguments , new Boolean( false ) ) ).to.be.false
    expect( is.equal( arguments , {} ) ).to.be.false
    expect( is.equal( arguments , { foo : 0 } ) ).to.be.false
    expect( is.equal( arguments , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( arguments , [] ) ).to.be.false
    expect( is.equal( arguments , [ 0 ] ) ).to.be.false
    expect( is.equal( arguments , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( arguments , arguments ) ).to.be.true
    expect( is.equal( arguments , function () {} ) ).to.be.false
    expect( is.equal( arguments , new Date() ) ).to.be.false
    expect( is.equal( arguments , new Error() ) ).to.be.false
    expect( is.equal( arguments , /^/ ) ).to.be.false

    expect( is.equal( function () {} , null ) ).to.be.false
    expect( is.equal( function () {} , void 0 ) ).to.be.false
    expect( is.equal( function () {} , 0 ) ).to.be.false
    expect( is.equal( function () {} , 0 / 0 ) ).to.be.false
    expect( is.equal( function () {} , +1 / 0 ) ).to.be.false
    expect( is.equal( function () {} , -1 / 0 ) ).to.be.false
    expect( is.equal( function () {} , new Number( 0 ) ) ).to.be.false
    expect( is.equal( function () {} , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( function () {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( function () {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( function () {} , '' ) ).to.be.false
    expect( is.equal( function () {} , new String( '' ) ) ).to.be.false
    expect( is.equal( function () {} , true ) ).to.be.false
    expect( is.equal( function () {} , false ) ).to.be.false
    expect( is.equal( function () {} , new Boolean( true ) ) ).to.be.false
    expect( is.equal( function () {} , new Boolean( false ) ) ).to.be.false
    expect( is.equal( function () {} , {} ) ).to.be.false
    expect( is.equal( function () {} , { foo : 0 } ) ).to.be.false
    expect( is.equal( function () {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( function () {} , [] ) ).to.be.false
    expect( is.equal( function () {} , [ 0 ] ) ).to.be.false
    expect( is.equal( function () {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( function () {} , arguments ) ).to.be.false
    expect( is.equal( function () {} , function () {} ) ).to.be.false
    expect( is.equal( function () {} , new Date() ) ).to.be.false
    expect( is.equal( function () {} , new Error() ) ).to.be.false
    expect( is.equal( function () {} , /^/ ) ).to.be.false

    expect( is.equal( new Date() , null ) ).to.be.false
    expect( is.equal( new Date() , void 0 ) ).to.be.false
    expect( is.equal( new Date() , 0 ) ).to.be.false
    expect( is.equal( new Date() , 0 / 0 ) ).to.be.false
    expect( is.equal( new Date() , +1 / 0 ) ).to.be.false
    expect( is.equal( new Date() , -1 / 0 ) ).to.be.false
    expect( is.equal( new Date() , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new Date() , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( new Date() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Date() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Date() , '' ) ).to.be.false
    expect( is.equal( new Date() , new String( '' ) ) ).to.be.false
    expect( is.equal( new Date() , true ) ).to.be.false
    expect( is.equal( new Date() , false ) ).to.be.false
    expect( is.equal( new Date() , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new Date() , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new Date() , {} ) ).to.be.false
    expect( is.equal( new Date() , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Date() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Date() , [] ) ).to.be.false
    expect( is.equal( new Date() , [ 0 ] ) ).to.be.false
    expect( is.equal( new Date() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Date() , arguments ) ).to.be.false
    expect( is.equal( new Date() , function () {} ) ).to.be.false
    expect( is.equal( new Date() , new Date() ) ).to.be.false
    expect( is.equal( new Date() , new Error() ) ).to.be.false
    expect( is.equal( new Date() , /^/ ) ).to.be.false

    expect( is.equal( new Error() , null ) ).to.be.false
    expect( is.equal( new Error() , void 0 ) ).to.be.false
    expect( is.equal( new Error() , 0 ) ).to.be.false
    expect( is.equal( new Error() , 0 / 0 ) ).to.be.false
    expect( is.equal( new Error() , +1 / 0 ) ).to.be.false
    expect( is.equal( new Error() , -1 / 0 ) ).to.be.false
    expect( is.equal( new Error() , new Number( 0 ) ) ).to.be.false
    expect( is.equal( new Error() , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( new Error() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Error() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( new Error() , '' ) ).to.be.false
    expect( is.equal( new Error() , new String( '' ) ) ).to.be.false
    expect( is.equal( new Error() , true ) ).to.be.false
    expect( is.equal( new Error() , false ) ).to.be.false
    expect( is.equal( new Error() , new Boolean( true ) ) ).to.be.false
    expect( is.equal( new Error() , new Boolean( false ) ) ).to.be.false
    expect( is.equal( new Error() , {} ) ).to.be.false
    expect( is.equal( new Error() , { foo : 0 } ) ).to.be.false
    expect( is.equal( new Error() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( new Error() , [] ) ).to.be.false
    expect( is.equal( new Error() , [ 0 ] ) ).to.be.false
    expect( is.equal( new Error() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( new Error() , arguments ) ).to.be.false
    expect( is.equal( new Error() , function () {} ) ).to.be.false
    expect( is.equal( new Error() , new Date() ) ).to.be.false
    expect( is.equal( new Error() , new Error() ) ).to.be.false
    expect( is.equal( new Error() , /^/ ) ).to.be.false

    expect( is.equal( /^/ , null ) ).to.be.false
    expect( is.equal( /^/ , void 0 ) ).to.be.false
    expect( is.equal( /^/ , 0 ) ).to.be.false
    expect( is.equal( /^/ , 0 / 0 ) ).to.be.false
    expect( is.equal( /^/ , +1 / 0 ) ).to.be.false
    expect( is.equal( /^/ , -1 / 0 ) ).to.be.false
    expect( is.equal( /^/ , new Number( 0 ) ) ).to.be.false
    expect( is.equal( /^/ , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.equal( /^/ , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( /^/ , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.equal( /^/ , '' ) ).to.be.false
    expect( is.equal( /^/ , new String( '' ) ) ).to.be.false
    expect( is.equal( /^/ , true ) ).to.be.false
    expect( is.equal( /^/ , false ) ).to.be.false
    expect( is.equal( /^/ , new Boolean( true ) ) ).to.be.false
    expect( is.equal( /^/ , new Boolean( false ) ) ).to.be.false
    expect( is.equal( /^/ , {} ) ).to.be.false
    expect( is.equal( /^/ , { foo : 0 } ) ).to.be.false
    expect( is.equal( /^/ , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.equal( /^/ , [] ) ).to.be.false
    expect( is.equal( /^/ , [ 0 ] ) ).to.be.false
    expect( is.equal( /^/ , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.equal( /^/ , arguments ) ).to.be.false
    expect( is.equal( /^/ , function () {} ) ).to.be.false
    expect( is.equal( /^/ , new Date() ) ).to.be.false
    expect( is.equal( /^/ , new Error() ) ).to.be.false
    expect( is.equal( /^/ , /^/ ) ).to.be.false

    expect( is.not.equal( null , null ) ).to.be.false
    expect( is.not.equal( null , void 0 ) ).to.be.true
    expect( is.not.equal( null , 0 ) ).to.be.true
    expect( is.not.equal( null , 0 / 0 ) ).to.be.true
    expect( is.not.equal( null , +1 / 0 ) ).to.be.true
    expect( is.not.equal( null , -1 / 0 ) ).to.be.true
    expect( is.not.equal( null , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( null , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( null , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( null , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( null , '' ) ).to.be.true
    expect( is.not.equal( null , new String( '' ) ) ).to.be.true
    expect( is.not.equal( null , true ) ).to.be.true
    expect( is.not.equal( null , false ) ).to.be.true
    expect( is.not.equal( null , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( null , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( null , {} ) ).to.be.true
    expect( is.not.equal( null , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( null , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( null , [] ) ).to.be.true
    expect( is.not.equal( null , [ 0 ] ) ).to.be.true
    expect( is.not.equal( null , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( null , arguments ) ).to.be.true
    expect( is.not.equal( null , function () {} ) ).to.be.true
    expect( is.not.equal( null , new Date() ) ).to.be.true
    expect( is.not.equal( null , new Error() ) ).to.be.true
    expect( is.not.equal( null , /^/ ) ).to.be.true

    expect( is.not.equal( void 0 , null ) ).to.be.true
    expect( is.not.equal( void 0 , void 0 ) ).to.be.false
    expect( is.not.equal( void 0 , 0 ) ).to.be.true
    expect( is.not.equal( void 0 , 0 / 0 ) ).to.be.true
    expect( is.not.equal( void 0 , +1 / 0 ) ).to.be.true
    expect( is.not.equal( void 0 , -1 / 0 ) ).to.be.true
    expect( is.not.equal( void 0 , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( void 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( void 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( void 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( void 0 , '' ) ).to.be.true
    expect( is.not.equal( void 0 , new String( '' ) ) ).to.be.true
    expect( is.not.equal( void 0 , true ) ).to.be.true
    expect( is.not.equal( void 0 , false ) ).to.be.true
    expect( is.not.equal( void 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( void 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( void 0 , {} ) ).to.be.true
    expect( is.not.equal( void 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( void 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( void 0 , [] ) ).to.be.true
    expect( is.not.equal( void 0 , [ 0 ] ) ).to.be.true
    expect( is.not.equal( void 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( void 0 , arguments ) ).to.be.true
    expect( is.not.equal( void 0 , function () {} ) ).to.be.true
    expect( is.not.equal( void 0 , new Date() ) ).to.be.true
    expect( is.not.equal( void 0 , new Error() ) ).to.be.true
    expect( is.not.equal( void 0 , /^/ ) ).to.be.true

    expect( is.not.equal( 0 , null ) ).to.be.true
    expect( is.not.equal( 0 , void 0 ) ).to.be.true
    expect( is.not.equal( 0 , 0 ) ).to.be.false
    expect( is.not.equal( 0 , 0 / 0 ) ).to.be.true
    expect( is.not.equal( 0 , +1 / 0 ) ).to.be.true
    expect( is.not.equal( 0 , -1 / 0 ) ).to.be.true
    expect( is.not.equal( 0 , new Number( 0 ) ) ).to.be.false
    expect( is.not.equal( 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( 0 , '' ) ).to.be.true
    expect( is.not.equal( 0 , new String( '' ) ) ).to.be.true
    expect( is.not.equal( 0 , true ) ).to.be.true
    expect( is.not.equal( 0 , false ) ).to.be.true
    expect( is.not.equal( 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( 0 , {} ) ).to.be.true
    expect( is.not.equal( 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( 0 , [] ) ).to.be.true
    expect( is.not.equal( 0 , [ 0 ] ) ).to.be.true
    expect( is.not.equal( 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( 0 , arguments ) ).to.be.true
    expect( is.not.equal( 0 , function () {} ) ).to.be.true
    expect( is.not.equal( 0 , new Date() ) ).to.be.true
    expect( is.not.equal( 0 , new Error() ) ).to.be.true
    expect( is.not.equal( 0 , /^/ ) ).to.be.true

    expect( is.not.equal( 0 / 0 , null ) ).to.be.true
    expect( is.not.equal( 0 / 0 , void 0 ) ).to.be.true
    expect( is.not.equal( 0 / 0 , 0 ) ).to.be.true
    expect( is.not.equal( 0 / 0 , 0 / 0 ) ).to.be.false
    expect( is.not.equal( 0 / 0 , +1 / 0 ) ).to.be.true
    expect( is.not.equal( 0 / 0 , -1 / 0 ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.equal( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , '' ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new String( '' ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , true ) ).to.be.true
    expect( is.not.equal( 0 / 0 , false ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( 0 / 0 , {} ) ).to.be.true
    expect( is.not.equal( 0 / 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( 0 / 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( 0 / 0 , [] ) ).to.be.true
    expect( is.not.equal( 0 / 0 , [ 0 ] ) ).to.be.true
    expect( is.not.equal( 0 / 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( 0 / 0 , arguments ) ).to.be.true
    expect( is.not.equal( 0 / 0 , function () {} ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Date() ) ).to.be.true
    expect( is.not.equal( 0 / 0 , new Error() ) ).to.be.true
    expect( is.not.equal( 0 / 0 , /^/ ) ).to.be.true

    expect( is.not.equal( new Number( 0 ) , null ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , void 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , 0 ) ).to.be.false
    expect( is.not.equal( new Number( 0 ) , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Number( new Number( 0 ) ) ) ).to.be.false
    expect( is.not.equal( new Number( 0 ) , new Number( new Number( 0 ) / 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , '' ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , true ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , false ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , {} ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , [] ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , arguments ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , function () {} ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Date() ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , new Error() ) ).to.be.true
    expect( is.not.equal( new Number( 0 ) , /^/ ) ).to.be.true

    expect( is.not.equal( new Number( 0 / 0 ) , null ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , void 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , 0 / 0 ) ).to.be.false
    expect( is.not.equal( new Number( 0 / 0 ) , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.equal( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , '' ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , true ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , false ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , {} ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , [] ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , arguments ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , function () {} ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Date() ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , new Error() ) ).to.be.true
    expect( is.not.equal( new Number( 0 / 0 ) , /^/ ) ).to.be.true

    expect( is.not.equal( '' , null ) ).to.be.true
    expect( is.not.equal( '' , void 0 ) ).to.be.true
    expect( is.not.equal( '' , 0 ) ).to.be.true
    expect( is.not.equal( '' , 0 / 0 ) ).to.be.true
    expect( is.not.equal( '' , +1 / 0 ) ).to.be.true
    expect( is.not.equal( '' , -1 / 0 ) ).to.be.true
    expect( is.not.equal( '' , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( '' , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( '' , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( '' , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( '' , '' ) ).to.be.false
    expect( is.not.equal( '' , new String( '' ) ) ).to.be.false
    expect( is.not.equal( '' , true ) ).to.be.true
    expect( is.not.equal( '' , false ) ).to.be.true
    expect( is.not.equal( '' , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( '' , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( '' , {} ) ).to.be.true
    expect( is.not.equal( '' , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( '' , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( '' , [] ) ).to.be.true
    expect( is.not.equal( '' , [ 0 ] ) ).to.be.true
    expect( is.not.equal( '' , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( '' , arguments ) ).to.be.true
    expect( is.not.equal( '' , function () {} ) ).to.be.true
    expect( is.not.equal( '' , new Date() ) ).to.be.true
    expect( is.not.equal( '' , new Error() ) ).to.be.true
    expect( is.not.equal( '' , /^/ ) ).to.be.true

    expect( is.not.equal( new String( '' ) , null ) ).to.be.true
    expect( is.not.equal( new String( '' ) , void 0 ) ).to.be.true
    expect( is.not.equal( new String( '' ) , 0 ) ).to.be.true
    expect( is.not.equal( new String( '' ) , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new String( '' ) , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new String( '' ) , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , '' ) ).to.be.false
    expect( is.not.equal( new String( '' ) , new String( '' ) ) ).to.be.false
    expect( is.not.equal( new String( '' ) , true ) ).to.be.true
    expect( is.not.equal( new String( '' ) , false ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new String( '' ) , {} ) ).to.be.true
    expect( is.not.equal( new String( '' ) , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new String( '' ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new String( '' ) , [] ) ).to.be.true
    expect( is.not.equal( new String( '' ) , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new String( '' ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new String( '' ) , arguments ) ).to.be.true
    expect( is.not.equal( new String( '' ) , function () {} ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Date() ) ).to.be.true
    expect( is.not.equal( new String( '' ) , new Error() ) ).to.be.true
    expect( is.not.equal( new String( '' ) , /^/ ) ).to.be.true

    expect( is.not.equal( true , null ) ).to.be.true
    expect( is.not.equal( true , void 0 ) ).to.be.true
    expect( is.not.equal( true , 0 ) ).to.be.true
    expect( is.not.equal( true , 0 / 0 ) ).to.be.true
    expect( is.not.equal( true , +1 / 0 ) ).to.be.true
    expect( is.not.equal( true , -1 / 0 ) ).to.be.true
    expect( is.not.equal( true , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( true , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( true , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( true , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( true , '' ) ).to.be.true
    expect( is.not.equal( true , new String( '' ) ) ).to.be.true
    expect( is.not.equal( true , true ) ).to.be.false
    expect( is.not.equal( true , false ) ).to.be.true
    expect( is.not.equal( true , new Boolean( true ) ) ).to.be.false
    expect( is.not.equal( true , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( true , {} ) ).to.be.true
    expect( is.not.equal( true , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( true , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( true , [] ) ).to.be.true
    expect( is.not.equal( true , [ 0 ] ) ).to.be.true
    expect( is.not.equal( true , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( true , arguments ) ).to.be.true
    expect( is.not.equal( true , function () {} ) ).to.be.true
    expect( is.not.equal( true , new Date() ) ).to.be.true
    expect( is.not.equal( true , new Error() ) ).to.be.true
    expect( is.not.equal( true , /^/ ) ).to.be.true

    expect( is.not.equal( false , null ) ).to.be.true
    expect( is.not.equal( false , void 0 ) ).to.be.true
    expect( is.not.equal( false , 0 ) ).to.be.true
    expect( is.not.equal( false , 0 / 0 ) ).to.be.true
    expect( is.not.equal( false , +1 / 0 ) ).to.be.true
    expect( is.not.equal( false , -1 / 0 ) ).to.be.true
    expect( is.not.equal( false , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( false , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( false , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( false , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( false , '' ) ).to.be.true
    expect( is.not.equal( false , new String( '' ) ) ).to.be.true
    expect( is.not.equal( false , true ) ).to.be.true
    expect( is.not.equal( false , false ) ).to.be.false
    expect( is.not.equal( false , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( false , new Boolean( false ) ) ).to.be.false
    expect( is.not.equal( false , {} ) ).to.be.true
    expect( is.not.equal( false , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( false , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( false , [] ) ).to.be.true
    expect( is.not.equal( false , [ 0 ] ) ).to.be.true
    expect( is.not.equal( false , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( false , arguments ) ).to.be.true
    expect( is.not.equal( false , function () {} ) ).to.be.true
    expect( is.not.equal( false , new Date() ) ).to.be.true
    expect( is.not.equal( false , new Error() ) ).to.be.true
    expect( is.not.equal( false , /^/ ) ).to.be.true

    expect( is.not.equal( new Boolean( true ) , null ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , void 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , '' ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , true ) ).to.be.false
    expect( is.not.equal( new Boolean( true ) , false ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Boolean( true ) ) ).to.be.false
    expect( is.not.equal( new Boolean( true ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , {} ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , [] ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , arguments ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , function () {} ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Date() ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , new Error() ) ).to.be.true
    expect( is.not.equal( new Boolean( true ) , /^/ ) ).to.be.true

    expect( is.not.equal( new Boolean( false ) , null ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , void 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , '' ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , true ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , false ) ).to.be.false
    expect( is.not.equal( new Boolean( false ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Boolean( false ) ) ).to.be.false
    expect( is.not.equal( new Boolean( false ) , {} ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , [] ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , arguments ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , function () {} ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Date() ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , new Error() ) ).to.be.true
    expect( is.not.equal( new Boolean( false ) , /^/ ) ).to.be.true

    expect( is.not.equal( {} , null ) ).to.be.true
    expect( is.not.equal( {} , void 0 ) ).to.be.true
    expect( is.not.equal( {} , 0 ) ).to.be.true
    expect( is.not.equal( {} , 0 / 0 ) ).to.be.true
    expect( is.not.equal( {} , +1 / 0 ) ).to.be.true
    expect( is.not.equal( {} , -1 / 0 ) ).to.be.true
    expect( is.not.equal( {} , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( {} , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( {} , '' ) ).to.be.true
    expect( is.not.equal( {} , new String( '' ) ) ).to.be.true
    expect( is.not.equal( {} , true ) ).to.be.true
    expect( is.not.equal( {} , false ) ).to.be.true
    expect( is.not.equal( {} , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( {} , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( {} , {} ) ).to.be.true
    expect( is.not.equal( {} , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( {} , [] ) ).to.be.true
    expect( is.not.equal( {} , [ 0 ] ) ).to.be.true
    expect( is.not.equal( {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( {} , arguments ) ).to.be.true
    expect( is.not.equal( {} , function () {} ) ).to.be.true
    expect( is.not.equal( {} , new Date() ) ).to.be.true
    expect( is.not.equal( {} , new Error() ) ).to.be.true
    expect( is.not.equal( {} , /^/ ) ).to.be.true

    expect( is.not.equal( { foo : 0 } , null ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , void 0 ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , 0 ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , 0 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , +1 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , -1 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , '' ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new String( '' ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , true ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , false ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , {} ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , [] ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , [ 0 ] ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , arguments ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , function () {} ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Date() ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , new Error() ) ).to.be.true
    expect( is.not.equal( { foo : 0 } , /^/ ) ).to.be.true

    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , null ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , void 0 ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , +1 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , -1 / 0 ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , '' ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new String( '' ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , true ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , false ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , {} ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [] ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 ] ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , arguments ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , function () {} ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Date() ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Error() ) ).to.be.true
    expect( is.not.equal( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , /^/ ) ).to.be.true

    expect( is.not.equal( [] , null ) ).to.be.true
    expect( is.not.equal( [] , void 0 ) ).to.be.true
    expect( is.not.equal( [] , 0 ) ).to.be.true
    expect( is.not.equal( [] , 0 / 0 ) ).to.be.true
    expect( is.not.equal( [] , +1 / 0 ) ).to.be.true
    expect( is.not.equal( [] , -1 / 0 ) ).to.be.true
    expect( is.not.equal( [] , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( [] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( [] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [] , '' ) ).to.be.true
    expect( is.not.equal( [] , new String( '' ) ) ).to.be.true
    expect( is.not.equal( [] , true ) ).to.be.true
    expect( is.not.equal( [] , false ) ).to.be.true
    expect( is.not.equal( [] , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( [] , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( [] , {} ) ).to.be.true
    expect( is.not.equal( [] , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( [] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( [] , [] ) ).to.be.true
    expect( is.not.equal( [] , [ 0 ] ) ).to.be.true
    expect( is.not.equal( [] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( [] , arguments ) ).to.be.true
    expect( is.not.equal( [] , function () {} ) ).to.be.true
    expect( is.not.equal( [] , new Date() ) ).to.be.true
    expect( is.not.equal( [] , new Error() ) ).to.be.true
    expect( is.not.equal( [] , /^/ ) ).to.be.true

    expect( is.not.equal( [ 0 ] , null ) ).to.be.true
    expect( is.not.equal( [ 0 ] , void 0 ) ).to.be.true
    expect( is.not.equal( [ 0 ] , 0 ) ).to.be.true
    expect( is.not.equal( [ 0 ] , 0 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 ] , +1 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 ] , -1 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , '' ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new String( '' ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , true ) ).to.be.true
    expect( is.not.equal( [ 0 ] , false ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( [ 0 ] , {} ) ).to.be.true
    expect( is.not.equal( [ 0 ] , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( [ 0 ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( [ 0 ] , [] ) ).to.be.true
    expect( is.not.equal( [ 0 ] , [ 0 ] ) ).to.be.true
    expect( is.not.equal( [ 0 ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( [ 0 ] , arguments ) ).to.be.true
    expect( is.not.equal( [ 0 ] , function () {} ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Date() ) ).to.be.true
    expect( is.not.equal( [ 0 ] , new Error() ) ).to.be.true
    expect( is.not.equal( [ 0 ] , /^/ ) ).to.be.true

    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , null ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , void 0 ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , +1 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , -1 / 0 ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , '' ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new String( '' ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , true ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , false ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , {} ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [] ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 ] ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , arguments ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , function () {} ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Date() ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Error() ) ).to.be.true
    expect( is.not.equal( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , /^/ ) ).to.be.true

    expect( is.not.equal( arguments , null ) ).to.be.true
    expect( is.not.equal( arguments , void 0 ) ).to.be.true
    expect( is.not.equal( arguments , 0 ) ).to.be.true
    expect( is.not.equal( arguments , 0 / 0 ) ).to.be.true
    expect( is.not.equal( arguments , +1 / 0 ) ).to.be.true
    expect( is.not.equal( arguments , -1 / 0 ) ).to.be.true
    expect( is.not.equal( arguments , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( arguments , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( arguments , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( arguments , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( arguments , '' ) ).to.be.true
    expect( is.not.equal( arguments , new String( '' ) ) ).to.be.true
    expect( is.not.equal( arguments , true ) ).to.be.true
    expect( is.not.equal( arguments , false ) ).to.be.true
    expect( is.not.equal( arguments , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( arguments , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( arguments , {} ) ).to.be.true
    expect( is.not.equal( arguments , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( arguments , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( arguments , [] ) ).to.be.true
    expect( is.not.equal( arguments , [ 0 ] ) ).to.be.true
    expect( is.not.equal( arguments , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( arguments , arguments ) ).to.be.false
    expect( is.not.equal( arguments , function () {} ) ).to.be.true
    expect( is.not.equal( arguments , new Date() ) ).to.be.true
    expect( is.not.equal( arguments , new Error() ) ).to.be.true
    expect( is.not.equal( arguments , /^/ ) ).to.be.true

    expect( is.not.equal( function () {} , null ) ).to.be.true
    expect( is.not.equal( function () {} , void 0 ) ).to.be.true
    expect( is.not.equal( function () {} , 0 ) ).to.be.true
    expect( is.not.equal( function () {} , 0 / 0 ) ).to.be.true
    expect( is.not.equal( function () {} , +1 / 0 ) ).to.be.true
    expect( is.not.equal( function () {} , -1 / 0 ) ).to.be.true
    expect( is.not.equal( function () {} , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( function () {} , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( function () {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( function () {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( function () {} , '' ) ).to.be.true
    expect( is.not.equal( function () {} , new String( '' ) ) ).to.be.true
    expect( is.not.equal( function () {} , true ) ).to.be.true
    expect( is.not.equal( function () {} , false ) ).to.be.true
    expect( is.not.equal( function () {} , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( function () {} , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( function () {} , {} ) ).to.be.true
    expect( is.not.equal( function () {} , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( function () {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( function () {} , [] ) ).to.be.true
    expect( is.not.equal( function () {} , [ 0 ] ) ).to.be.true
    expect( is.not.equal( function () {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( function () {} , arguments ) ).to.be.true
    expect( is.not.equal( function () {} , function () {} ) ).to.be.true
    expect( is.not.equal( function () {} , new Date() ) ).to.be.true
    expect( is.not.equal( function () {} , new Error() ) ).to.be.true
    expect( is.not.equal( function () {} , /^/ ) ).to.be.true

    expect( is.not.equal( new Date() , null ) ).to.be.true
    expect( is.not.equal( new Date() , void 0 ) ).to.be.true
    expect( is.not.equal( new Date() , 0 ) ).to.be.true
    expect( is.not.equal( new Date() , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new Date() , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Date() , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Date() , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new Date() , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Date() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Date() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Date() , '' ) ).to.be.true
    expect( is.not.equal( new Date() , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Date() , true ) ).to.be.true
    expect( is.not.equal( new Date() , false ) ).to.be.true
    expect( is.not.equal( new Date() , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new Date() , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new Date() , {} ) ).to.be.true
    expect( is.not.equal( new Date() , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Date() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Date() , [] ) ).to.be.true
    expect( is.not.equal( new Date() , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Date() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Date() , arguments ) ).to.be.true
    expect( is.not.equal( new Date() , function () {} ) ).to.be.true
    expect( is.not.equal( new Date() , new Date() ) ).to.be.true
    expect( is.not.equal( new Date() , new Error() ) ).to.be.true
    expect( is.not.equal( new Date() , /^/ ) ).to.be.true

    expect( is.not.equal( new Error() , null ) ).to.be.true
    expect( is.not.equal( new Error() , void 0 ) ).to.be.true
    expect( is.not.equal( new Error() , 0 ) ).to.be.true
    expect( is.not.equal( new Error() , 0 / 0 ) ).to.be.true
    expect( is.not.equal( new Error() , +1 / 0 ) ).to.be.true
    expect( is.not.equal( new Error() , -1 / 0 ) ).to.be.true
    expect( is.not.equal( new Error() , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( new Error() , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Error() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Error() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( new Error() , '' ) ).to.be.true
    expect( is.not.equal( new Error() , new String( '' ) ) ).to.be.true
    expect( is.not.equal( new Error() , true ) ).to.be.true
    expect( is.not.equal( new Error() , false ) ).to.be.true
    expect( is.not.equal( new Error() , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( new Error() , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( new Error() , {} ) ).to.be.true
    expect( is.not.equal( new Error() , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( new Error() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( new Error() , [] ) ).to.be.true
    expect( is.not.equal( new Error() , [ 0 ] ) ).to.be.true
    expect( is.not.equal( new Error() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( new Error() , arguments ) ).to.be.true
    expect( is.not.equal( new Error() , function () {} ) ).to.be.true
    expect( is.not.equal( new Error() , new Date() ) ).to.be.true
    expect( is.not.equal( new Error() , new Error() ) ).to.be.true
    expect( is.not.equal( new Error() , /^/ ) ).to.be.true

    expect( is.not.equal( /^/ , null ) ).to.be.true
    expect( is.not.equal( /^/ , void 0 ) ).to.be.true
    expect( is.not.equal( /^/ , 0 ) ).to.be.true
    expect( is.not.equal( /^/ , 0 / 0 ) ).to.be.true
    expect( is.not.equal( /^/ , +1 / 0 ) ).to.be.true
    expect( is.not.equal( /^/ , -1 / 0 ) ).to.be.true
    expect( is.not.equal( /^/ , new Number( 0 ) ) ).to.be.true
    expect( is.not.equal( /^/ , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.equal( /^/ , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( /^/ , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.equal( /^/ , '' ) ).to.be.true
    expect( is.not.equal( /^/ , new String( '' ) ) ).to.be.true
    expect( is.not.equal( /^/ , true ) ).to.be.true
    expect( is.not.equal( /^/ , false ) ).to.be.true
    expect( is.not.equal( /^/ , new Boolean( true ) ) ).to.be.true
    expect( is.not.equal( /^/ , new Boolean( false ) ) ).to.be.true
    expect( is.not.equal( /^/ , {} ) ).to.be.true
    expect( is.not.equal( /^/ , { foo : 0 } ) ).to.be.true
    expect( is.not.equal( /^/ , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.equal( /^/ , [] ) ).to.be.true
    expect( is.not.equal( /^/ , [ 0 ] ) ).to.be.true
    expect( is.not.equal( /^/ , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.equal( /^/ , arguments ) ).to.be.true
    expect( is.not.equal( /^/ , function () {} ) ).to.be.true
    expect( is.not.equal( /^/ , new Date() ) ).to.be.true
    expect( is.not.equal( /^/ , new Error() ) ).to.be.true
    expect( is.not.equal( /^/ , /^/ ) ).to.be.true

  } )

  it( 'is.deepEqual' , function () {

    expect( is.deepEqual( null , null ) ).to.be.true
    expect( is.deepEqual( null , void 0 ) ).to.be.false
    expect( is.deepEqual( null , 0 ) ).to.be.false
    expect( is.deepEqual( null , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( null , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( null , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( null , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( null , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( null , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( null , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( null , '' ) ).to.be.false
    expect( is.deepEqual( null , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( null , true ) ).to.be.false
    expect( is.deepEqual( null , false ) ).to.be.false
    expect( is.deepEqual( null , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( null , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( null , {} ) ).to.be.false
    expect( is.deepEqual( null , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( null , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( null , [] ) ).to.be.false
    expect( is.deepEqual( null , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( null , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( null , arguments ) ).to.be.false
    expect( is.deepEqual( null , function () {} ) ).to.be.false
    expect( is.deepEqual( null , new Date() ) ).to.be.false
    expect( is.deepEqual( null , new Error() ) ).to.be.false
    expect( is.deepEqual( null , /^/ ) ).to.be.false

    expect( is.deepEqual( void 0 , null ) ).to.be.false
    expect( is.deepEqual( void 0 , void 0 ) ).to.be.true
    expect( is.deepEqual( void 0 , 0 ) ).to.be.false
    expect( is.deepEqual( void 0 , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( void 0 , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( void 0 , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( void 0 , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( void 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( void 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( void 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( void 0 , '' ) ).to.be.false
    expect( is.deepEqual( void 0 , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( void 0 , true ) ).to.be.false
    expect( is.deepEqual( void 0 , false ) ).to.be.false
    expect( is.deepEqual( void 0 , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( void 0 , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( void 0 , {} ) ).to.be.false
    expect( is.deepEqual( void 0 , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( void 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( void 0 , [] ) ).to.be.false
    expect( is.deepEqual( void 0 , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( void 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( void 0 , arguments ) ).to.be.false
    expect( is.deepEqual( void 0 , function () {} ) ).to.be.false
    expect( is.deepEqual( void 0 , new Date() ) ).to.be.false
    expect( is.deepEqual( void 0 , new Error() ) ).to.be.false
    expect( is.deepEqual( void 0 , /^/ ) ).to.be.false

    expect( is.deepEqual( 0 , null ) ).to.be.false
    expect( is.deepEqual( 0 , void 0 ) ).to.be.false
    expect( is.deepEqual( 0 , 0 ) ).to.be.true
    expect( is.deepEqual( 0 , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( 0 , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( 0 , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( 0 , new Number( 0 ) ) ).to.be.true
    expect( is.deepEqual( 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 , '' ) ).to.be.false
    expect( is.deepEqual( 0 , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( 0 , true ) ).to.be.false
    expect( is.deepEqual( 0 , false ) ).to.be.false
    expect( is.deepEqual( 0 , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( 0 , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( 0 , {} ) ).to.be.false
    expect( is.deepEqual( 0 , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( 0 , [] ) ).to.be.false
    expect( is.deepEqual( 0 , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( 0 , arguments ) ).to.be.false
    expect( is.deepEqual( 0 , function () {} ) ).to.be.false
    expect( is.deepEqual( 0 , new Date() ) ).to.be.false
    expect( is.deepEqual( 0 , new Error() ) ).to.be.false
    expect( is.deepEqual( 0 , /^/ ) ).to.be.false

    expect( is.deepEqual( 0 / 0 , null ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , void 0 ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , 0 ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , 0 / 0 ) ).to.be.true
    expect( is.deepEqual( 0 / 0 , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.deepEqual( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , '' ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , true ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , false ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , {} ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , [] ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , arguments ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , function () {} ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Date() ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , new Error() ) ).to.be.false
    expect( is.deepEqual( 0 / 0 , /^/ ) ).to.be.false

    expect( is.deepEqual( new Number( 0 ) , null ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , void 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , 0 ) ).to.be.true
    expect( is.deepEqual( new Number( 0 ) , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Number( new Number( 0 ) ) ) ).to.be.true
    expect( is.deepEqual( new Number( 0 ) , new Number( new Number( 0 ) / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , '' ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , true ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , false ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , {} ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , [] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , arguments ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , function () {} ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Date() ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , new Error() ) ).to.be.false
    expect( is.deepEqual( new Number( 0 ) , /^/ ) ).to.be.false

    expect( is.deepEqual( new Number( 0 / 0 ) , null ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , void 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , 0 / 0 ) ).to.be.true
    expect( is.deepEqual( new Number( 0 / 0 ) , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.deepEqual( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , '' ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , true ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , false ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , {} ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , [] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , arguments ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , function () {} ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Date() ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , new Error() ) ).to.be.false
    expect( is.deepEqual( new Number( 0 / 0 ) , /^/ ) ).to.be.false

    expect( is.deepEqual( '' , null ) ).to.be.false
    expect( is.deepEqual( '' , void 0 ) ).to.be.false
    expect( is.deepEqual( '' , 0 ) ).to.be.false
    expect( is.deepEqual( '' , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( '' , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( '' , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( '' , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( '' , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( '' , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( '' , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( '' , '' ) ).to.be.true
    expect( is.deepEqual( '' , new String( '' ) ) ).to.be.true
    expect( is.deepEqual( '' , true ) ).to.be.false
    expect( is.deepEqual( '' , false ) ).to.be.false
    expect( is.deepEqual( '' , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( '' , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( '' , {} ) ).to.be.false
    expect( is.deepEqual( '' , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( '' , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( '' , [] ) ).to.be.false
    expect( is.deepEqual( '' , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( '' , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( '' , arguments ) ).to.be.false
    expect( is.deepEqual( '' , function () {} ) ).to.be.false
    expect( is.deepEqual( '' , new Date() ) ).to.be.false
    expect( is.deepEqual( '' , new Error() ) ).to.be.false
    expect( is.deepEqual( '' , /^/ ) ).to.be.false

    expect( is.deepEqual( new String( '' ) , null ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , void 0 ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , 0 ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , '' ) ).to.be.true
    expect( is.deepEqual( new String( '' ) , new String( '' ) ) ).to.be.true
    expect( is.deepEqual( new String( '' ) , true ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , false ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , {} ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , [] ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , arguments ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , function () {} ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Date() ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , new Error() ) ).to.be.false
    expect( is.deepEqual( new String( '' ) , /^/ ) ).to.be.false

    expect( is.deepEqual( true , null ) ).to.be.false
    expect( is.deepEqual( true , void 0 ) ).to.be.false
    expect( is.deepEqual( true , 0 ) ).to.be.false
    expect( is.deepEqual( true , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( true , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( true , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( true , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( true , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( true , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( true , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( true , '' ) ).to.be.false
    expect( is.deepEqual( true , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( true , true ) ).to.be.true
    expect( is.deepEqual( true , false ) ).to.be.false
    expect( is.deepEqual( true , new Boolean( true ) ) ).to.be.true
    expect( is.deepEqual( true , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( true , {} ) ).to.be.false
    expect( is.deepEqual( true , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( true , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( true , [] ) ).to.be.false
    expect( is.deepEqual( true , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( true , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( true , arguments ) ).to.be.false
    expect( is.deepEqual( true , function () {} ) ).to.be.false
    expect( is.deepEqual( true , new Date() ) ).to.be.false
    expect( is.deepEqual( true , new Error() ) ).to.be.false
    expect( is.deepEqual( true , /^/ ) ).to.be.false

    expect( is.deepEqual( false , null ) ).to.be.false
    expect( is.deepEqual( false , void 0 ) ).to.be.false
    expect( is.deepEqual( false , 0 ) ).to.be.false
    expect( is.deepEqual( false , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( false , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( false , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( false , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( false , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( false , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( false , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( false , '' ) ).to.be.false
    expect( is.deepEqual( false , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( false , true ) ).to.be.false
    expect( is.deepEqual( false , false ) ).to.be.true
    expect( is.deepEqual( false , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( false , new Boolean( false ) ) ).to.be.true
    expect( is.deepEqual( false , {} ) ).to.be.false
    expect( is.deepEqual( false , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( false , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( false , [] ) ).to.be.false
    expect( is.deepEqual( false , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( false , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( false , arguments ) ).to.be.false
    expect( is.deepEqual( false , function () {} ) ).to.be.false
    expect( is.deepEqual( false , new Date() ) ).to.be.false
    expect( is.deepEqual( false , new Error() ) ).to.be.false
    expect( is.deepEqual( false , /^/ ) ).to.be.false

    expect( is.deepEqual( new Boolean( true ) , null ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , void 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , '' ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , true ) ).to.be.true
    expect( is.deepEqual( new Boolean( true ) , false ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Boolean( true ) ) ).to.be.true
    expect( is.deepEqual( new Boolean( true ) , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , {} ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , [] ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , arguments ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , function () {} ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Date() ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , new Error() ) ).to.be.false
    expect( is.deepEqual( new Boolean( true ) , /^/ ) ).to.be.false

    expect( is.deepEqual( new Boolean( false ) , null ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , void 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , '' ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , true ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , false ) ).to.be.true
    expect( is.deepEqual( new Boolean( false ) , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Boolean( false ) ) ).to.be.true
    expect( is.deepEqual( new Boolean( false ) , {} ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , [] ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , arguments ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , function () {} ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Date() ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , new Error() ) ).to.be.false
    expect( is.deepEqual( new Boolean( false ) , /^/ ) ).to.be.false

    expect( is.deepEqual( {} , null ) ).to.be.false
    expect( is.deepEqual( {} , void 0 ) ).to.be.false
    expect( is.deepEqual( {} , 0 ) ).to.be.false
    expect( is.deepEqual( {} , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( {} , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( {} , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( {} , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( {} , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( {} , '' ) ).to.be.false
    expect( is.deepEqual( {} , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( {} , true ) ).to.be.false
    expect( is.deepEqual( {} , false ) ).to.be.false
    expect( is.deepEqual( {} , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( {} , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( {} , {} ) ).to.be.true
    expect( is.deepEqual( {} , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( {} , [] ) ).to.be.false
    expect( is.deepEqual( {} , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( {} , arguments ) ).to.be.false
    expect( is.deepEqual( {} , function () {} ) ).to.be.false
    expect( is.deepEqual( {} , new Date() ) ).to.be.false
    expect( is.deepEqual( {} , new Error() ) ).to.be.false
    expect( is.deepEqual( {} , /^/ ) ).to.be.false

    expect( is.deepEqual( { foo : 0 } , null ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , void 0 ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , 0 ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , '' ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , true ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , false ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , {} ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , { foo : 0 } ) ).to.be.true
    expect( is.deepEqual( { foo : 0 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , [] ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , arguments ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , function () {} ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Date() ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , new Error() ) ).to.be.false
    expect( is.deepEqual( { foo : 0 } , /^/ ) ).to.be.false

    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , null ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , void 0 ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , '' ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , true ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , false ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , {} ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [] ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , arguments ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , function () {} ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Date() ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Error() ) ).to.be.false
    expect( is.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , /^/ ) ).to.be.false

    expect( is.deepEqual( [] , null ) ).to.be.false
    expect( is.deepEqual( [] , void 0 ) ).to.be.false
    expect( is.deepEqual( [] , 0 ) ).to.be.false
    expect( is.deepEqual( [] , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( [] , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( [] , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( [] , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( [] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [] , '' ) ).to.be.false
    expect( is.deepEqual( [] , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( [] , true ) ).to.be.false
    expect( is.deepEqual( [] , false ) ).to.be.false
    expect( is.deepEqual( [] , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( [] , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( [] , {} ) ).to.be.false
    expect( is.deepEqual( [] , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( [] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( [] , [] ) ).to.be.true
    expect( is.deepEqual( [] , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( [] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( [] , arguments ) ).to.be.false
    expect( is.deepEqual( [] , function () {} ) ).to.be.false
    expect( is.deepEqual( [] , new Date() ) ).to.be.false
    expect( is.deepEqual( [] , new Error() ) ).to.be.false
    expect( is.deepEqual( [] , /^/ ) ).to.be.false

    expect( is.deepEqual( [ 0 ] , null ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , void 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , '' ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , true ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , false ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , {} ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , [] ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , [ 0 ] ) ).to.be.true
    expect( is.deepEqual( [ 0 ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , arguments ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , function () {} ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Date() ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , new Error() ) ).to.be.false
    expect( is.deepEqual( [ 0 ] , /^/ ) ).to.be.false

    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , null ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , void 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , '' ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , true ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , false ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , {} ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [] ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , arguments ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , function () {} ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Date() ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Error() ) ).to.be.false
    expect( is.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , /^/ ) ).to.be.false

    expect( is.deepEqual( arguments , null ) ).to.be.false
    expect( is.deepEqual( arguments , void 0 ) ).to.be.false
    expect( is.deepEqual( arguments , 0 ) ).to.be.false
    expect( is.deepEqual( arguments , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( arguments , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( arguments , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( arguments , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( arguments , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( arguments , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( arguments , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( arguments , '' ) ).to.be.false
    expect( is.deepEqual( arguments , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( arguments , true ) ).to.be.false
    expect( is.deepEqual( arguments , false ) ).to.be.false
    expect( is.deepEqual( arguments , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( arguments , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( arguments , {} ) ).to.be.false
    expect( is.deepEqual( arguments , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( arguments , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( arguments , [] ) ).to.be.false
    expect( is.deepEqual( arguments , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( arguments , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( arguments , arguments ) ).to.be.true
    expect( is.deepEqual( arguments , function () {} ) ).to.be.false
    expect( is.deepEqual( arguments , new Date() ) ).to.be.false
    expect( is.deepEqual( arguments , new Error() ) ).to.be.false
    expect( is.deepEqual( arguments , /^/ ) ).to.be.false

    expect( is.deepEqual( function () {} , null ) ).to.be.false
    expect( is.deepEqual( function () {} , void 0 ) ).to.be.false
    expect( is.deepEqual( function () {} , 0 ) ).to.be.false
    expect( is.deepEqual( function () {} , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( function () {} , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( function () {} , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( function () {} , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( function () {} , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( function () {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( function () {} , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( function () {} , '' ) ).to.be.false
    expect( is.deepEqual( function () {} , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( function () {} , true ) ).to.be.false
    expect( is.deepEqual( function () {} , false ) ).to.be.false
    expect( is.deepEqual( function () {} , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( function () {} , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( function () {} , {} ) ).to.be.false
    expect( is.deepEqual( function () {} , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( function () {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( function () {} , [] ) ).to.be.false
    expect( is.deepEqual( function () {} , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( function () {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( function () {} , arguments ) ).to.be.false
    expect( is.deepEqual( function () {} , function () {} ) ).to.be.true
    expect( is.deepEqual( function () {} , new Date() ) ).to.be.false
    expect( is.deepEqual( function () {} , new Error() ) ).to.be.false
    expect( is.deepEqual( function () {} , /^/ ) ).to.be.false

    expect( is.deepEqual( new Date() , null ) ).to.be.false
    expect( is.deepEqual( new Date() , void 0 ) ).to.be.false
    expect( is.deepEqual( new Date() , 0 ) ).to.be.false
    expect( is.deepEqual( new Date() , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new Date() , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Date() , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Date() , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new Date() , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Date() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Date() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Date() , '' ) ).to.be.false
    expect( is.deepEqual( new Date() , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Date() , true ) ).to.be.false
    expect( is.deepEqual( new Date() , false ) ).to.be.false
    expect( is.deepEqual( new Date() , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new Date() , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new Date() , {} ) ).to.be.false
    expect( is.deepEqual( new Date() , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Date() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Date() , [] ) ).to.be.false
    expect( is.deepEqual( new Date() , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Date() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Date() , arguments ) ).to.be.false
    expect( is.deepEqual( new Date() , function () {} ) ).to.be.false
    expect( is.deepEqual( new Date() , new Date() ) ).to.be.true
    expect( is.deepEqual( new Date() , new Error() ) ).to.be.false
    expect( is.deepEqual( new Date() , /^/ ) ).to.be.false

    expect( is.deepEqual( new Error() , null ) ).to.be.false
    expect( is.deepEqual( new Error() , void 0 ) ).to.be.false
    expect( is.deepEqual( new Error() , 0 ) ).to.be.false
    expect( is.deepEqual( new Error() , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( new Error() , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Error() , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( new Error() , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( new Error() , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Error() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Error() , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( new Error() , '' ) ).to.be.false
    expect( is.deepEqual( new Error() , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( new Error() , true ) ).to.be.false
    expect( is.deepEqual( new Error() , false ) ).to.be.false
    expect( is.deepEqual( new Error() , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( new Error() , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( new Error() , {} ) ).to.be.false
    expect( is.deepEqual( new Error() , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( new Error() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( new Error() , [] ) ).to.be.false
    expect( is.deepEqual( new Error() , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( new Error() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( new Error() , arguments ) ).to.be.false
    expect( is.deepEqual( new Error() , function () {} ) ).to.be.false
    expect( is.deepEqual( new Error() , new Date() ) ).to.be.false
    expect( is.deepEqual( new Error() , new Error() ) ).to.be.true
    expect( is.deepEqual( new Error() , /^/ ) ).to.be.false

    expect( is.deepEqual( /^/ , null ) ).to.be.false
    expect( is.deepEqual( /^/ , void 0 ) ).to.be.false
    expect( is.deepEqual( /^/ , 0 ) ).to.be.false
    expect( is.deepEqual( /^/ , 0 / 0 ) ).to.be.false
    expect( is.deepEqual( /^/ , +1 / 0 ) ).to.be.false
    expect( is.deepEqual( /^/ , -1 / 0 ) ).to.be.false
    expect( is.deepEqual( /^/ , new Number( 0 ) ) ).to.be.false
    expect( is.deepEqual( /^/ , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.deepEqual( /^/ , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( /^/ , new Number( +1 / 0 ) ) ).to.be.false
    expect( is.deepEqual( /^/ , '' ) ).to.be.false
    expect( is.deepEqual( /^/ , new String( '' ) ) ).to.be.false
    expect( is.deepEqual( /^/ , true ) ).to.be.false
    expect( is.deepEqual( /^/ , false ) ).to.be.false
    expect( is.deepEqual( /^/ , new Boolean( true ) ) ).to.be.false
    expect( is.deepEqual( /^/ , new Boolean( false ) ) ).to.be.false
    expect( is.deepEqual( /^/ , {} ) ).to.be.false
    expect( is.deepEqual( /^/ , { foo : 0 } ) ).to.be.false
    expect( is.deepEqual( /^/ , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.deepEqual( /^/ , [] ) ).to.be.false
    expect( is.deepEqual( /^/ , [ 0 ] ) ).to.be.false
    expect( is.deepEqual( /^/ , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.deepEqual( /^/ , arguments ) ).to.be.false
    expect( is.deepEqual( /^/ , function () {} ) ).to.be.false
    expect( is.deepEqual( /^/ , new Date() ) ).to.be.false
    expect( is.deepEqual( /^/ , new Error() ) ).to.be.false
    expect( is.deepEqual( /^/ , /^/ ) ).to.be.true

    expect( is.not.deepEqual( null , null ) ).to.be.false
    expect( is.not.deepEqual( null , void 0 ) ).to.be.true
    expect( is.not.deepEqual( null , 0 ) ).to.be.true
    expect( is.not.deepEqual( null , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( null , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( null , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( null , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( null , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( null , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( null , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( null , '' ) ).to.be.true
    expect( is.not.deepEqual( null , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( null , true ) ).to.be.true
    expect( is.not.deepEqual( null , false ) ).to.be.true
    expect( is.not.deepEqual( null , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( null , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( null , {} ) ).to.be.true
    expect( is.not.deepEqual( null , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( null , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( null , [] ) ).to.be.true
    expect( is.not.deepEqual( null , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( null , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( null , arguments ) ).to.be.true
    expect( is.not.deepEqual( null , function () {} ) ).to.be.true
    expect( is.not.deepEqual( null , new Date() ) ).to.be.true
    expect( is.not.deepEqual( null , new Error() ) ).to.be.true
    expect( is.not.deepEqual( null , /^/ ) ).to.be.true

    expect( is.not.deepEqual( void 0 , null ) ).to.be.true
    expect( is.not.deepEqual( void 0 , void 0 ) ).to.be.false
    expect( is.not.deepEqual( void 0 , 0 ) ).to.be.true
    expect( is.not.deepEqual( void 0 , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( void 0 , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( void 0 , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , '' ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , true ) ).to.be.true
    expect( is.not.deepEqual( void 0 , false ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( void 0 , {} ) ).to.be.true
    expect( is.not.deepEqual( void 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( void 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( void 0 , [] ) ).to.be.true
    expect( is.not.deepEqual( void 0 , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( void 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( void 0 , arguments ) ).to.be.true
    expect( is.not.deepEqual( void 0 , function () {} ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Date() ) ).to.be.true
    expect( is.not.deepEqual( void 0 , new Error() ) ).to.be.true
    expect( is.not.deepEqual( void 0 , /^/ ) ).to.be.true

    expect( is.not.deepEqual( 0 , null ) ).to.be.true
    expect( is.not.deepEqual( 0 , void 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 , 0 ) ).to.be.false
    expect( is.not.deepEqual( 0 , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Number( 0 ) ) ).to.be.false
    expect( is.not.deepEqual( 0 , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , '' ) ).to.be.true
    expect( is.not.deepEqual( 0 , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , true ) ).to.be.true
    expect( is.not.deepEqual( 0 , false ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( 0 , {} ) ).to.be.true
    expect( is.not.deepEqual( 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( 0 , [] ) ).to.be.true
    expect( is.not.deepEqual( 0 , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( 0 , arguments ) ).to.be.true
    expect( is.not.deepEqual( 0 , function () {} ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Date() ) ).to.be.true
    expect( is.not.deepEqual( 0 , new Error() ) ).to.be.true
    expect( is.not.deepEqual( 0 , /^/ ) ).to.be.true

    expect( is.not.deepEqual( 0 / 0 , null ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , void 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , 0 / 0 ) ).to.be.false
    expect( is.not.deepEqual( 0 / 0 , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.deepEqual( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , '' ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , true ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , false ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , {} ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , [] ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , arguments ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , function () {} ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Date() ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , new Error() ) ).to.be.true
    expect( is.not.deepEqual( 0 / 0 , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Number( 0 ) , null ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , 0 ) ).to.be.false
    expect( is.not.deepEqual( new Number( 0 ) , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Number( new Number( 0 ) ) ) ).to.be.false
    expect( is.not.deepEqual( new Number( 0 ) , new Number( new Number( 0 ) / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , '' ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , true ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , false ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , {} ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , [] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 ) , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Number( 0 / 0 ) , null ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , 0 / 0 ) ).to.be.false
    expect( is.not.deepEqual( new Number( 0 / 0 ) , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Number( 0 / 0 ) ) ).to.be.false
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , '' ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , true ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , false ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , {} ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , [] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new Number( 0 / 0 ) , /^/ ) ).to.be.true

    expect( is.not.deepEqual( '' , null ) ).to.be.true
    expect( is.not.deepEqual( '' , void 0 ) ).to.be.true
    expect( is.not.deepEqual( '' , 0 ) ).to.be.true
    expect( is.not.deepEqual( '' , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( '' , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( '' , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( '' , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( '' , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( '' , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( '' , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( '' , '' ) ).to.be.false
    expect( is.not.deepEqual( '' , new String( '' ) ) ).to.be.false
    expect( is.not.deepEqual( '' , true ) ).to.be.true
    expect( is.not.deepEqual( '' , false ) ).to.be.true
    expect( is.not.deepEqual( '' , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( '' , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( '' , {} ) ).to.be.true
    expect( is.not.deepEqual( '' , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( '' , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( '' , [] ) ).to.be.true
    expect( is.not.deepEqual( '' , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( '' , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( '' , arguments ) ).to.be.true
    expect( is.not.deepEqual( '' , function () {} ) ).to.be.true
    expect( is.not.deepEqual( '' , new Date() ) ).to.be.true
    expect( is.not.deepEqual( '' , new Error() ) ).to.be.true
    expect( is.not.deepEqual( '' , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new String( '' ) , null ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , 0 ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , '' ) ).to.be.false
    expect( is.not.deepEqual( new String( '' ) , new String( '' ) ) ).to.be.false
    expect( is.not.deepEqual( new String( '' ) , true ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , false ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , {} ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , [] ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , arguments ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new String( '' ) , /^/ ) ).to.be.true

    expect( is.not.deepEqual( true , null ) ).to.be.true
    expect( is.not.deepEqual( true , void 0 ) ).to.be.true
    expect( is.not.deepEqual( true , 0 ) ).to.be.true
    expect( is.not.deepEqual( true , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( true , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( true , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( true , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( true , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( true , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( true , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( true , '' ) ).to.be.true
    expect( is.not.deepEqual( true , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( true , true ) ).to.be.false
    expect( is.not.deepEqual( true , false ) ).to.be.true
    expect( is.not.deepEqual( true , new Boolean( true ) ) ).to.be.false
    expect( is.not.deepEqual( true , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( true , {} ) ).to.be.true
    expect( is.not.deepEqual( true , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( true , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( true , [] ) ).to.be.true
    expect( is.not.deepEqual( true , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( true , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( true , arguments ) ).to.be.true
    expect( is.not.deepEqual( true , function () {} ) ).to.be.true
    expect( is.not.deepEqual( true , new Date() ) ).to.be.true
    expect( is.not.deepEqual( true , new Error() ) ).to.be.true
    expect( is.not.deepEqual( true , /^/ ) ).to.be.true

    expect( is.not.deepEqual( false , null ) ).to.be.true
    expect( is.not.deepEqual( false , void 0 ) ).to.be.true
    expect( is.not.deepEqual( false , 0 ) ).to.be.true
    expect( is.not.deepEqual( false , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( false , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( false , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( false , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( false , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( false , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( false , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( false , '' ) ).to.be.true
    expect( is.not.deepEqual( false , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( false , true ) ).to.be.true
    expect( is.not.deepEqual( false , false ) ).to.be.false
    expect( is.not.deepEqual( false , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( false , new Boolean( false ) ) ).to.be.false
    expect( is.not.deepEqual( false , {} ) ).to.be.true
    expect( is.not.deepEqual( false , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( false , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( false , [] ) ).to.be.true
    expect( is.not.deepEqual( false , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( false , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( false , arguments ) ).to.be.true
    expect( is.not.deepEqual( false , function () {} ) ).to.be.true
    expect( is.not.deepEqual( false , new Date() ) ).to.be.true
    expect( is.not.deepEqual( false , new Error() ) ).to.be.true
    expect( is.not.deepEqual( false , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Boolean( true ) , null ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , '' ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , true ) ).to.be.false
    expect( is.not.deepEqual( new Boolean( true ) , false ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Boolean( true ) ) ).to.be.false
    expect( is.not.deepEqual( new Boolean( true ) , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , {} ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , [] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( true ) , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Boolean( false ) , null ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , '' ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , true ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , false ) ).to.be.false
    expect( is.not.deepEqual( new Boolean( false ) , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Boolean( false ) ) ).to.be.false
    expect( is.not.deepEqual( new Boolean( false ) , {} ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , [] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new Boolean( false ) , /^/ ) ).to.be.true

    expect( is.not.deepEqual( {} , null ) ).to.be.true
    expect( is.not.deepEqual( {} , void 0 ) ).to.be.true
    expect( is.not.deepEqual( {} , 0 ) ).to.be.true
    expect( is.not.deepEqual( {} , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( {} , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( {} , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( {} , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( {} , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( {} , '' ) ).to.be.true
    expect( is.not.deepEqual( {} , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( {} , true ) ).to.be.true
    expect( is.not.deepEqual( {} , false ) ).to.be.true
    expect( is.not.deepEqual( {} , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( {} , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( {} , {} ) ).to.be.false
    expect( is.not.deepEqual( {} , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( {} , [] ) ).to.be.true
    expect( is.not.deepEqual( {} , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( {} , arguments ) ).to.be.true
    expect( is.not.deepEqual( {} , function () {} ) ).to.be.true
    expect( is.not.deepEqual( {} , new Date() ) ).to.be.true
    expect( is.not.deepEqual( {} , new Error() ) ).to.be.true
    expect( is.not.deepEqual( {} , /^/ ) ).to.be.true

    expect( is.not.deepEqual( { foo : 0 } , null ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , void 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , '' ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , true ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , false ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , {} ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , { foo : 0 } ) ).to.be.false
    expect( is.not.deepEqual( { foo : 0 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , [] ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , arguments ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , function () {} ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Date() ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , new Error() ) ).to.be.true
    expect( is.not.deepEqual( { foo : 0 } , /^/ ) ).to.be.true

    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , null ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , void 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , '' ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , true ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , false ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , {} ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.false
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [] ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , arguments ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , function () {} ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Date() ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , new Error() ) ).to.be.true
    expect( is.not.deepEqual( { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } , /^/ ) ).to.be.true

    expect( is.not.deepEqual( [] , null ) ).to.be.true
    expect( is.not.deepEqual( [] , void 0 ) ).to.be.true
    expect( is.not.deepEqual( [] , 0 ) ).to.be.true
    expect( is.not.deepEqual( [] , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [] , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [] , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [] , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [] , '' ) ).to.be.true
    expect( is.not.deepEqual( [] , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( [] , true ) ).to.be.true
    expect( is.not.deepEqual( [] , false ) ).to.be.true
    expect( is.not.deepEqual( [] , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( [] , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( [] , {} ) ).to.be.true
    expect( is.not.deepEqual( [] , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( [] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( [] , [] ) ).to.be.false
    expect( is.not.deepEqual( [] , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( [] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( [] , arguments ) ).to.be.true
    expect( is.not.deepEqual( [] , function () {} ) ).to.be.true
    expect( is.not.deepEqual( [] , new Date() ) ).to.be.true
    expect( is.not.deepEqual( [] , new Error() ) ).to.be.true
    expect( is.not.deepEqual( [] , /^/ ) ).to.be.true

    expect( is.not.deepEqual( [ 0 ] , null ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , void 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , '' ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , true ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , false ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , {} ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , [] ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , [ 0 ] ) ).to.be.false
    expect( is.not.deepEqual( [ 0 ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , arguments ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , function () {} ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Date() ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , new Error() ) ).to.be.true
    expect( is.not.deepEqual( [ 0 ] , /^/ ) ).to.be.true

    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , null ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , void 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , '' ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , true ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , false ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , {} ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [] ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.false
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , arguments ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , function () {} ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Date() ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , new Error() ) ).to.be.true
    expect( is.not.deepEqual( [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] , /^/ ) ).to.be.true

    expect( is.not.deepEqual( arguments , null ) ).to.be.true
    expect( is.not.deepEqual( arguments , void 0 ) ).to.be.true
    expect( is.not.deepEqual( arguments , 0 ) ).to.be.true
    expect( is.not.deepEqual( arguments , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( arguments , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( arguments , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , '' ) ).to.be.true
    expect( is.not.deepEqual( arguments , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , true ) ).to.be.true
    expect( is.not.deepEqual( arguments , false ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( arguments , {} ) ).to.be.true
    expect( is.not.deepEqual( arguments , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( arguments , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( arguments , [] ) ).to.be.true
    expect( is.not.deepEqual( arguments , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( arguments , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( arguments , arguments ) ).to.be.false
    expect( is.not.deepEqual( arguments , function () {} ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Date() ) ).to.be.true
    expect( is.not.deepEqual( arguments , new Error() ) ).to.be.true
    expect( is.not.deepEqual( arguments , /^/ ) ).to.be.true

    expect( is.not.deepEqual( function () {} , null ) ).to.be.true
    expect( is.not.deepEqual( function () {} , void 0 ) ).to.be.true
    expect( is.not.deepEqual( function () {} , 0 ) ).to.be.true
    expect( is.not.deepEqual( function () {} , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( function () {} , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( function () {} , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , '' ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , true ) ).to.be.true
    expect( is.not.deepEqual( function () {} , false ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( function () {} , {} ) ).to.be.true
    expect( is.not.deepEqual( function () {} , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( function () {} , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( function () {} , [] ) ).to.be.true
    expect( is.not.deepEqual( function () {} , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( function () {} , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( function () {} , arguments ) ).to.be.true
    expect( is.not.deepEqual( function () {} , function () {} ) ).to.be.false
    expect( is.not.deepEqual( function () {} , new Date() ) ).to.be.true
    expect( is.not.deepEqual( function () {} , new Error() ) ).to.be.true
    expect( is.not.deepEqual( function () {} , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Date() , null ) ).to.be.true
    expect( is.not.deepEqual( new Date() , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Date() , 0 ) ).to.be.true
    expect( is.not.deepEqual( new Date() , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Date() , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Date() , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , '' ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , true ) ).to.be.true
    expect( is.not.deepEqual( new Date() , false ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new Date() , {} ) ).to.be.true
    expect( is.not.deepEqual( new Date() , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Date() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Date() , [] ) ).to.be.true
    expect( is.not.deepEqual( new Date() , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Date() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Date() , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Date() , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Date() , new Date() ) ).to.be.false
    expect( is.not.deepEqual( new Date() , new Error() ) ).to.be.true
    expect( is.not.deepEqual( new Date() , /^/ ) ).to.be.true

    expect( is.not.deepEqual( new Error() , null ) ).to.be.true
    expect( is.not.deepEqual( new Error() , void 0 ) ).to.be.true
    expect( is.not.deepEqual( new Error() , 0 ) ).to.be.true
    expect( is.not.deepEqual( new Error() , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Error() , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Error() , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , '' ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , true ) ).to.be.true
    expect( is.not.deepEqual( new Error() , false ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( new Error() , {} ) ).to.be.true
    expect( is.not.deepEqual( new Error() , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( new Error() , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( new Error() , [] ) ).to.be.true
    expect( is.not.deepEqual( new Error() , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( new Error() , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( new Error() , arguments ) ).to.be.true
    expect( is.not.deepEqual( new Error() , function () {} ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Date() ) ).to.be.true
    expect( is.not.deepEqual( new Error() , new Error() ) ).to.be.false
    expect( is.not.deepEqual( new Error() , /^/ ) ).to.be.true

    expect( is.not.deepEqual( /^/ , null ) ).to.be.true
    expect( is.not.deepEqual( /^/ , void 0 ) ).to.be.true
    expect( is.not.deepEqual( /^/ , 0 ) ).to.be.true
    expect( is.not.deepEqual( /^/ , 0 / 0 ) ).to.be.true
    expect( is.not.deepEqual( /^/ , +1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( /^/ , -1 / 0 ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Number( 0 ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Number( 0 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Number( +1 / 0 ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , '' ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new String( '' ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , true ) ).to.be.true
    expect( is.not.deepEqual( /^/ , false ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Boolean( true ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Boolean( false ) ) ).to.be.true
    expect( is.not.deepEqual( /^/ , {} ) ).to.be.true
    expect( is.not.deepEqual( /^/ , { foo : 0 } ) ).to.be.true
    expect( is.not.deepEqual( /^/ , { foo : [ 0 , { bar : { baz : 1 } } ] , qux : 2 } ) ).to.be.true
    expect( is.not.deepEqual( /^/ , [] ) ).to.be.true
    expect( is.not.deepEqual( /^/ , [ 0 ] ) ).to.be.true
    expect( is.not.deepEqual( /^/ , [ 0 , { foo : [ 1 , [ 2 , 3 ] ] } ] ) ).to.be.true
    expect( is.not.deepEqual( /^/ , arguments ) ).to.be.true
    expect( is.not.deepEqual( /^/ , function () {} ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Date() ) ).to.be.true
    expect( is.not.deepEqual( /^/ , new Error() ) ).to.be.true
    expect( is.not.deepEqual( /^/ , /^/ ) ).to.be.false

  } )

} )
