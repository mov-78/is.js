/* global expect, is */
/* eslint-env mocha */
/* eslint no-empty-function: 0, no-new-wrappers: 0, no-unused-expressions: 0 */

describe( 'bundle:type' , function () {

  it( 'is.sameType' , function () {

    expect( is.sameType( null , null ) ).to.be.true
    expect( is.sameType( null , void 0 ) ).to.be.false
    expect( is.sameType( null , 0 ) ).to.be.false
    expect( is.sameType( null , new Number() ) ).to.be.false
    expect( is.sameType( null , '' ) ).to.be.false
    expect( is.sameType( null , new String() ) ).to.be.false
    expect( is.sameType( null , true ) ).to.be.false
    expect( is.sameType( null , false ) ).to.be.false
    expect( is.sameType( null , new Boolean() ) ).to.be.false
    expect( is.sameType( null , {} ) ).to.be.false
    expect( is.sameType( null , [] ) ).to.be.false
    expect( is.sameType( null , arguments ) ).to.be.false
    expect( is.sameType( null , function () {} ) ).to.be.false
    expect( is.sameType( null , new Date() ) ).to.be.false
    expect( is.sameType( null , new Error() ) ).to.be.false
    expect( is.sameType( null , /^/ ) ).to.be.false

    expect( is.sameType( void 0 , null ) ).to.be.false
    expect( is.sameType( void 0 , void 0 ) ).to.be.true
    expect( is.sameType( void 0 , 0 ) ).to.be.false
    expect( is.sameType( void 0 , new Number() ) ).to.be.false
    expect( is.sameType( void 0 , '' ) ).to.be.false
    expect( is.sameType( void 0 , new String() ) ).to.be.false
    expect( is.sameType( void 0 , true ) ).to.be.false
    expect( is.sameType( void 0 , false ) ).to.be.false
    expect( is.sameType( void 0 , new Boolean() ) ).to.be.false
    expect( is.sameType( void 0 , {} ) ).to.be.false
    expect( is.sameType( void 0 , [] ) ).to.be.false
    expect( is.sameType( void 0 , arguments ) ).to.be.false
    expect( is.sameType( void 0 , function () {} ) ).to.be.false
    expect( is.sameType( void 0 , new Date() ) ).to.be.false
    expect( is.sameType( void 0 , new Error() ) ).to.be.false
    expect( is.sameType( void 0 , /^/ ) ).to.be.false

    expect( is.sameType( 0 , null ) ).to.be.false
    expect( is.sameType( 0 , void 0 ) ).to.be.false
    expect( is.sameType( 0 , 0 ) ).to.be.true
    expect( is.sameType( 0 , new Number() ) ).to.be.true
    expect( is.sameType( 0 , '' ) ).to.be.false
    expect( is.sameType( 0 , new String() ) ).to.be.false
    expect( is.sameType( 0 , true ) ).to.be.false
    expect( is.sameType( 0 , false ) ).to.be.false
    expect( is.sameType( 0 , new Boolean() ) ).to.be.false
    expect( is.sameType( 0 , {} ) ).to.be.false
    expect( is.sameType( 0 , [] ) ).to.be.false
    expect( is.sameType( 0 , arguments ) ).to.be.false
    expect( is.sameType( 0 , function () {} ) ).to.be.false
    expect( is.sameType( 0 , new Date() ) ).to.be.false
    expect( is.sameType( 0 , new Error() ) ).to.be.false
    expect( is.sameType( 0 , /^/ ) ).to.be.false

    expect( is.sameType( new Number() , null ) ).to.be.false
    expect( is.sameType( new Number() , void 0 ) ).to.be.false
    expect( is.sameType( new Number() , 0 ) ).to.be.true
    expect( is.sameType( new Number() , new Number() ) ).to.be.true
    expect( is.sameType( new Number() , '' ) ).to.be.false
    expect( is.sameType( new Number() , new String() ) ).to.be.false
    expect( is.sameType( new Number() , true ) ).to.be.false
    expect( is.sameType( new Number() , false ) ).to.be.false
    expect( is.sameType( new Number() , new Boolean() ) ).to.be.false
    expect( is.sameType( new Number() , {} ) ).to.be.false
    expect( is.sameType( new Number() , [] ) ).to.be.false
    expect( is.sameType( new Number() , arguments ) ).to.be.false
    expect( is.sameType( new Number() , function () {} ) ).to.be.false
    expect( is.sameType( new Number() , new Date() ) ).to.be.false
    expect( is.sameType( new Number() , new Error() ) ).to.be.false
    expect( is.sameType( new Number() , /^/ ) ).to.be.false

    expect( is.sameType( '' , null ) ).to.be.false
    expect( is.sameType( '' , void 0 ) ).to.be.false
    expect( is.sameType( '' , 0 ) ).to.be.false
    expect( is.sameType( '' , new Number() ) ).to.be.false
    expect( is.sameType( '' , '' ) ).to.be.true
    expect( is.sameType( '' , new String() ) ).to.be.true
    expect( is.sameType( '' , true ) ).to.be.false
    expect( is.sameType( '' , false ) ).to.be.false
    expect( is.sameType( '' , new Boolean() ) ).to.be.false
    expect( is.sameType( '' , {} ) ).to.be.false
    expect( is.sameType( '' , [] ) ).to.be.false
    expect( is.sameType( '' , arguments ) ).to.be.false
    expect( is.sameType( '' , function () {} ) ).to.be.false
    expect( is.sameType( '' , new Date() ) ).to.be.false
    expect( is.sameType( '' , new Error() ) ).to.be.false
    expect( is.sameType( '' , /^/ ) ).to.be.false

    expect( is.sameType( new String() , null ) ).to.be.false
    expect( is.sameType( new String() , void 0 ) ).to.be.false
    expect( is.sameType( new String() , 0 ) ).to.be.false
    expect( is.sameType( new String() , new Number() ) ).to.be.false
    expect( is.sameType( new String() , '' ) ).to.be.true
    expect( is.sameType( new String() , new String() ) ).to.be.true
    expect( is.sameType( new String() , true ) ).to.be.false
    expect( is.sameType( new String() , false ) ).to.be.false
    expect( is.sameType( new String() , new Boolean() ) ).to.be.false
    expect( is.sameType( new String() , {} ) ).to.be.false
    expect( is.sameType( new String() , [] ) ).to.be.false
    expect( is.sameType( new String() , arguments ) ).to.be.false
    expect( is.sameType( new String() , function () {} ) ).to.be.false
    expect( is.sameType( new String() , new Date() ) ).to.be.false
    expect( is.sameType( new String() , new Error() ) ).to.be.false
    expect( is.sameType( new String() , /^/ ) ).to.be.false

    expect( is.sameType( true , null ) ).to.be.false
    expect( is.sameType( true , void 0 ) ).to.be.false
    expect( is.sameType( true , 0 ) ).to.be.false
    expect( is.sameType( true , new Number() ) ).to.be.false
    expect( is.sameType( true , '' ) ).to.be.false
    expect( is.sameType( true , new String() ) ).to.be.false
    expect( is.sameType( true , true ) ).to.be.true
    expect( is.sameType( true , false ) ).to.be.true
    expect( is.sameType( true , new Boolean() ) ).to.be.true
    expect( is.sameType( true , {} ) ).to.be.false
    expect( is.sameType( true , [] ) ).to.be.false
    expect( is.sameType( true , arguments ) ).to.be.false
    expect( is.sameType( true , function () {} ) ).to.be.false
    expect( is.sameType( true , new Date() ) ).to.be.false
    expect( is.sameType( true , new Error() ) ).to.be.false
    expect( is.sameType( true , /^/ ) ).to.be.false

    expect( is.sameType( new Boolean() , null ) ).to.be.false
    expect( is.sameType( new Boolean() , void 0 ) ).to.be.false
    expect( is.sameType( new Boolean() , 0 ) ).to.be.false
    expect( is.sameType( new Boolean() , new Number() ) ).to.be.false
    expect( is.sameType( new Boolean() , '' ) ).to.be.false
    expect( is.sameType( new Boolean() , new String() ) ).to.be.false
    expect( is.sameType( new Boolean() , true ) ).to.be.true
    expect( is.sameType( new Boolean() , false ) ).to.be.true
    expect( is.sameType( new Boolean() , new Boolean() ) ).to.be.true
    expect( is.sameType( new Boolean() , {} ) ).to.be.false
    expect( is.sameType( new Boolean() , [] ) ).to.be.false
    expect( is.sameType( new Boolean() , arguments ) ).to.be.false
    expect( is.sameType( new Boolean() , function () {} ) ).to.be.false
    expect( is.sameType( new Boolean() , new Date() ) ).to.be.false
    expect( is.sameType( new Boolean() , new Error() ) ).to.be.false
    expect( is.sameType( new Boolean() , /^/ ) ).to.be.false

    expect( is.sameType( {} , null ) ).to.be.false
    expect( is.sameType( {} , void 0 ) ).to.be.false
    expect( is.sameType( {} , 0 ) ).to.be.false
    expect( is.sameType( {} , new Number() ) ).to.be.false
    expect( is.sameType( {} , '' ) ).to.be.false
    expect( is.sameType( {} , new String() ) ).to.be.false
    expect( is.sameType( {} , true ) ).to.be.false
    expect( is.sameType( {} , false ) ).to.be.false
    expect( is.sameType( {} , new Boolean() ) ).to.be.false
    expect( is.sameType( {} , {} ) ).to.be.true
    expect( is.sameType( {} , [] ) ).to.be.false
    expect( is.sameType( {} , arguments ) ).to.be.false
    expect( is.sameType( {} , function () {} ) ).to.be.false
    expect( is.sameType( {} , new Date() ) ).to.be.false
    expect( is.sameType( {} , new Error() ) ).to.be.false
    expect( is.sameType( {} , /^/ ) ).to.be.false

    expect( is.sameType( [] , null ) ).to.be.false
    expect( is.sameType( [] , void 0 ) ).to.be.false
    expect( is.sameType( [] , 0 ) ).to.be.false
    expect( is.sameType( [] , new Number() ) ).to.be.false
    expect( is.sameType( [] , '' ) ).to.be.false
    expect( is.sameType( [] , new String() ) ).to.be.false
    expect( is.sameType( [] , true ) ).to.be.false
    expect( is.sameType( [] , false ) ).to.be.false
    expect( is.sameType( [] , new Boolean() ) ).to.be.false
    expect( is.sameType( [] , {} ) ).to.be.false
    expect( is.sameType( [] , [] ) ).to.be.true
    expect( is.sameType( [] , arguments ) ).to.be.false
    expect( is.sameType( [] , function () {} ) ).to.be.false
    expect( is.sameType( [] , new Date() ) ).to.be.false
    expect( is.sameType( [] , new Error() ) ).to.be.false
    expect( is.sameType( [] , /^/ ) ).to.be.false

    expect( is.sameType( arguments , null ) ).to.be.false
    expect( is.sameType( arguments , void 0 ) ).to.be.false
    expect( is.sameType( arguments , 0 ) ).to.be.false
    expect( is.sameType( arguments , new Number() ) ).to.be.false
    expect( is.sameType( arguments , '' ) ).to.be.false
    expect( is.sameType( arguments , new String() ) ).to.be.false
    expect( is.sameType( arguments , true ) ).to.be.false
    expect( is.sameType( arguments , false ) ).to.be.false
    expect( is.sameType( arguments , new Boolean() ) ).to.be.false
    expect( is.sameType( arguments , {} ) ).to.be.false
    expect( is.sameType( arguments , [] ) ).to.be.false
    expect( is.sameType( arguments , arguments ) ).to.be.true
    expect( is.sameType( arguments , function () {} ) ).to.be.false
    expect( is.sameType( arguments , new Date() ) ).to.be.false
    expect( is.sameType( arguments , new Error() ) ).to.be.false
    expect( is.sameType( arguments , /^/ ) ).to.be.false

    expect( is.sameType( function () {} , null ) ).to.be.false
    expect( is.sameType( function () {} , void 0 ) ).to.be.false
    expect( is.sameType( function () {} , 0 ) ).to.be.false
    expect( is.sameType( function () {} , new Number() ) ).to.be.false
    expect( is.sameType( function () {} , '' ) ).to.be.false
    expect( is.sameType( function () {} , new String() ) ).to.be.false
    expect( is.sameType( function () {} , true ) ).to.be.false
    expect( is.sameType( function () {} , false ) ).to.be.false
    expect( is.sameType( function () {} , new Boolean() ) ).to.be.false
    expect( is.sameType( function () {} , {} ) ).to.be.false
    expect( is.sameType( function () {} , [] ) ).to.be.false
    expect( is.sameType( function () {} , arguments ) ).to.be.false
    expect( is.sameType( function () {} , function () {} ) ).to.be.true
    expect( is.sameType( function () {} , new Date() ) ).to.be.false
    expect( is.sameType( function () {} , new Error() ) ).to.be.false
    expect( is.sameType( function () {} , /^/ ) ).to.be.false

    expect( is.sameType( new Date() , null ) ).to.be.false
    expect( is.sameType( new Date() , void 0 ) ).to.be.false
    expect( is.sameType( new Date() , 0 ) ).to.be.false
    expect( is.sameType( new Date() , new Number() ) ).to.be.false
    expect( is.sameType( new Date() , '' ) ).to.be.false
    expect( is.sameType( new Date() , new String() ) ).to.be.false
    expect( is.sameType( new Date() , true ) ).to.be.false
    expect( is.sameType( new Date() , false ) ).to.be.false
    expect( is.sameType( new Date() , new Boolean() ) ).to.be.false
    expect( is.sameType( new Date() , {} ) ).to.be.false
    expect( is.sameType( new Date() , [] ) ).to.be.false
    expect( is.sameType( new Date() , arguments ) ).to.be.false
    expect( is.sameType( new Date() , function () {} ) ).to.be.false
    expect( is.sameType( new Date() , new Date() ) ).to.be.true
    expect( is.sameType( new Date() , new Error() ) ).to.be.false
    expect( is.sameType( new Date() , /^/ ) ).to.be.false

    expect( is.sameType( new Error() , null ) ).to.be.false
    expect( is.sameType( new Error() , void 0 ) ).to.be.false
    expect( is.sameType( new Error() , 0 ) ).to.be.false
    expect( is.sameType( new Error() , new Number() ) ).to.be.false
    expect( is.sameType( new Error() , '' ) ).to.be.false
    expect( is.sameType( new Error() , new String() ) ).to.be.false
    expect( is.sameType( new Error() , true ) ).to.be.false
    expect( is.sameType( new Error() , false ) ).to.be.false
    expect( is.sameType( new Error() , new Boolean() ) ).to.be.false
    expect( is.sameType( new Error() , {} ) ).to.be.false
    expect( is.sameType( new Error() , [] ) ).to.be.false
    expect( is.sameType( new Error() , arguments ) ).to.be.false
    expect( is.sameType( new Error() , function () {} ) ).to.be.false
    expect( is.sameType( new Error() , new Date() ) ).to.be.false
    expect( is.sameType( new Error() , new Error() ) ).to.be.true
    expect( is.sameType( new Error() , /^/ ) ).to.be.false

    expect( is.sameType( /^/ , null ) ).to.be.false
    expect( is.sameType( /^/ , void 0 ) ).to.be.false
    expect( is.sameType( /^/ , 0 ) ).to.be.false
    expect( is.sameType( /^/ , new Number() ) ).to.be.false
    expect( is.sameType( /^/ , '' ) ).to.be.false
    expect( is.sameType( /^/ , new String() ) ).to.be.false
    expect( is.sameType( /^/ , true ) ).to.be.false
    expect( is.sameType( /^/ , false ) ).to.be.false
    expect( is.sameType( /^/ , new Boolean() ) ).to.be.false
    expect( is.sameType( /^/ , {} ) ).to.be.false
    expect( is.sameType( /^/ , [] ) ).to.be.false
    expect( is.sameType( /^/ , arguments ) ).to.be.false
    expect( is.sameType( /^/ , function () {} ) ).to.be.false
    expect( is.sameType( /^/ , new Date() ) ).to.be.false
    expect( is.sameType( /^/ , new Error() ) ).to.be.false
    expect( is.sameType( /^/ , /^/ ) ).to.be.true

    expect( is.not.sameType( null , null ) ).to.be.false
    expect( is.not.sameType( null , void 0 ) ).to.be.true
    expect( is.not.sameType( null , 0 ) ).to.be.true
    expect( is.not.sameType( null , new Number() ) ).to.be.true
    expect( is.not.sameType( null , '' ) ).to.be.true
    expect( is.not.sameType( null , new String() ) ).to.be.true
    expect( is.not.sameType( null , true ) ).to.be.true
    expect( is.not.sameType( null , false ) ).to.be.true
    expect( is.not.sameType( null , new Boolean() ) ).to.be.true
    expect( is.not.sameType( null , {} ) ).to.be.true
    expect( is.not.sameType( null , [] ) ).to.be.true
    expect( is.not.sameType( null , arguments ) ).to.be.true
    expect( is.not.sameType( null , function () {} ) ).to.be.true
    expect( is.not.sameType( null , new Date() ) ).to.be.true
    expect( is.not.sameType( null , new Error() ) ).to.be.true
    expect( is.not.sameType( null , /^/ ) ).to.be.true

    expect( is.not.sameType( void 0 , null ) ).to.be.true
    expect( is.not.sameType( void 0 , void 0 ) ).to.be.false
    expect( is.not.sameType( void 0 , 0 ) ).to.be.true
    expect( is.not.sameType( void 0 , new Number() ) ).to.be.true
    expect( is.not.sameType( void 0 , '' ) ).to.be.true
    expect( is.not.sameType( void 0 , new String() ) ).to.be.true
    expect( is.not.sameType( void 0 , true ) ).to.be.true
    expect( is.not.sameType( void 0 , false ) ).to.be.true
    expect( is.not.sameType( void 0 , new Boolean() ) ).to.be.true
    expect( is.not.sameType( void 0 , {} ) ).to.be.true
    expect( is.not.sameType( void 0 , [] ) ).to.be.true
    expect( is.not.sameType( void 0 , arguments ) ).to.be.true
    expect( is.not.sameType( void 0 , function () {} ) ).to.be.true
    expect( is.not.sameType( void 0 , new Date() ) ).to.be.true
    expect( is.not.sameType( void 0 , new Error() ) ).to.be.true
    expect( is.not.sameType( void 0 , /^/ ) ).to.be.true

    expect( is.not.sameType( 0 , null ) ).to.be.true
    expect( is.not.sameType( 0 , void 0 ) ).to.be.true
    expect( is.not.sameType( 0 , 0 ) ).to.be.false
    expect( is.not.sameType( 0 , new Number() ) ).to.be.false
    expect( is.not.sameType( 0 , '' ) ).to.be.true
    expect( is.not.sameType( 0 , new String() ) ).to.be.true
    expect( is.not.sameType( 0 , true ) ).to.be.true
    expect( is.not.sameType( 0 , false ) ).to.be.true
    expect( is.not.sameType( 0 , new Boolean() ) ).to.be.true
    expect( is.not.sameType( 0 , {} ) ).to.be.true
    expect( is.not.sameType( 0 , [] ) ).to.be.true
    expect( is.not.sameType( 0 , arguments ) ).to.be.true
    expect( is.not.sameType( 0 , function () {} ) ).to.be.true
    expect( is.not.sameType( 0 , new Date() ) ).to.be.true
    expect( is.not.sameType( 0 , new Error() ) ).to.be.true
    expect( is.not.sameType( 0 , /^/ ) ).to.be.true

    expect( is.not.sameType( new Number() , null ) ).to.be.true
    expect( is.not.sameType( new Number() , void 0 ) ).to.be.true
    expect( is.not.sameType( new Number() , 0 ) ).to.be.false
    expect( is.not.sameType( new Number() , new Number() ) ).to.be.false
    expect( is.not.sameType( new Number() , '' ) ).to.be.true
    expect( is.not.sameType( new Number() , new String() ) ).to.be.true
    expect( is.not.sameType( new Number() , true ) ).to.be.true
    expect( is.not.sameType( new Number() , false ) ).to.be.true
    expect( is.not.sameType( new Number() , new Boolean() ) ).to.be.true
    expect( is.not.sameType( new Number() , {} ) ).to.be.true
    expect( is.not.sameType( new Number() , [] ) ).to.be.true
    expect( is.not.sameType( new Number() , arguments ) ).to.be.true
    expect( is.not.sameType( new Number() , function () {} ) ).to.be.true
    expect( is.not.sameType( new Number() , new Date() ) ).to.be.true
    expect( is.not.sameType( new Number() , new Error() ) ).to.be.true
    expect( is.not.sameType( new Number() , /^/ ) ).to.be.true

    expect( is.not.sameType( '' , null ) ).to.be.true
    expect( is.not.sameType( '' , void 0 ) ).to.be.true
    expect( is.not.sameType( '' , 0 ) ).to.be.true
    expect( is.not.sameType( '' , new Number() ) ).to.be.true
    expect( is.not.sameType( '' , '' ) ).to.be.false
    expect( is.not.sameType( '' , new String() ) ).to.be.false
    expect( is.not.sameType( '' , true ) ).to.be.true
    expect( is.not.sameType( '' , false ) ).to.be.true
    expect( is.not.sameType( '' , new Boolean() ) ).to.be.true
    expect( is.not.sameType( '' , {} ) ).to.be.true
    expect( is.not.sameType( '' , [] ) ).to.be.true
    expect( is.not.sameType( '' , arguments ) ).to.be.true
    expect( is.not.sameType( '' , function () {} ) ).to.be.true
    expect( is.not.sameType( '' , new Date() ) ).to.be.true
    expect( is.not.sameType( '' , new Error() ) ).to.be.true
    expect( is.not.sameType( '' , /^/ ) ).to.be.true

    expect( is.not.sameType( new String() , null ) ).to.be.true
    expect( is.not.sameType( new String() , void 0 ) ).to.be.true
    expect( is.not.sameType( new String() , 0 ) ).to.be.true
    expect( is.not.sameType( new String() , new Number() ) ).to.be.true
    expect( is.not.sameType( new String() , '' ) ).to.be.false
    expect( is.not.sameType( new String() , new String() ) ).to.be.false
    expect( is.not.sameType( new String() , true ) ).to.be.true
    expect( is.not.sameType( new String() , false ) ).to.be.true
    expect( is.not.sameType( new String() , new Boolean() ) ).to.be.true
    expect( is.not.sameType( new String() , {} ) ).to.be.true
    expect( is.not.sameType( new String() , [] ) ).to.be.true
    expect( is.not.sameType( new String() , arguments ) ).to.be.true
    expect( is.not.sameType( new String() , function () {} ) ).to.be.true
    expect( is.not.sameType( new String() , new Date() ) ).to.be.true
    expect( is.not.sameType( new String() , new Error() ) ).to.be.true
    expect( is.not.sameType( new String() , /^/ ) ).to.be.true

    expect( is.not.sameType( true , null ) ).to.be.true
    expect( is.not.sameType( true , void 0 ) ).to.be.true
    expect( is.not.sameType( true , 0 ) ).to.be.true
    expect( is.not.sameType( true , new Number() ) ).to.be.true
    expect( is.not.sameType( true , '' ) ).to.be.true
    expect( is.not.sameType( true , new String() ) ).to.be.true
    expect( is.not.sameType( true , true ) ).to.be.false
    expect( is.not.sameType( true , false ) ).to.be.false
    expect( is.not.sameType( true , new Boolean() ) ).to.be.false
    expect( is.not.sameType( true , {} ) ).to.be.true
    expect( is.not.sameType( true , [] ) ).to.be.true
    expect( is.not.sameType( true , arguments ) ).to.be.true
    expect( is.not.sameType( true , function () {} ) ).to.be.true
    expect( is.not.sameType( true , new Date() ) ).to.be.true
    expect( is.not.sameType( true , new Error() ) ).to.be.true
    expect( is.not.sameType( true , /^/ ) ).to.be.true

    expect( is.not.sameType( new Boolean() , null ) ).to.be.true
    expect( is.not.sameType( new Boolean() , void 0 ) ).to.be.true
    expect( is.not.sameType( new Boolean() , 0 ) ).to.be.true
    expect( is.not.sameType( new Boolean() , new Number() ) ).to.be.true
    expect( is.not.sameType( new Boolean() , '' ) ).to.be.true
    expect( is.not.sameType( new Boolean() , new String() ) ).to.be.true
    expect( is.not.sameType( new Boolean() , true ) ).to.be.false
    expect( is.not.sameType( new Boolean() , false ) ).to.be.false
    expect( is.not.sameType( new Boolean() , new Boolean() ) ).to.be.false
    expect( is.not.sameType( new Boolean() , {} ) ).to.be.true
    expect( is.not.sameType( new Boolean() , [] ) ).to.be.true
    expect( is.not.sameType( new Boolean() , arguments ) ).to.be.true
    expect( is.not.sameType( new Boolean() , function () {} ) ).to.be.true
    expect( is.not.sameType( new Boolean() , new Date() ) ).to.be.true
    expect( is.not.sameType( new Boolean() , new Error() ) ).to.be.true
    expect( is.not.sameType( new Boolean() , /^/ ) ).to.be.true

    expect( is.not.sameType( {} , null ) ).to.be.true
    expect( is.not.sameType( {} , void 0 ) ).to.be.true
    expect( is.not.sameType( {} , 0 ) ).to.be.true
    expect( is.not.sameType( {} , new Number() ) ).to.be.true
    expect( is.not.sameType( {} , '' ) ).to.be.true
    expect( is.not.sameType( {} , new String() ) ).to.be.true
    expect( is.not.sameType( {} , true ) ).to.be.true
    expect( is.not.sameType( {} , false ) ).to.be.true
    expect( is.not.sameType( {} , new Boolean() ) ).to.be.true
    expect( is.not.sameType( {} , {} ) ).to.be.false
    expect( is.not.sameType( {} , [] ) ).to.be.true
    expect( is.not.sameType( {} , arguments ) ).to.be.true
    expect( is.not.sameType( {} , function () {} ) ).to.be.true
    expect( is.not.sameType( {} , new Date() ) ).to.be.true
    expect( is.not.sameType( {} , new Error() ) ).to.be.true
    expect( is.not.sameType( {} , /^/ ) ).to.be.true

    expect( is.not.sameType( [] , null ) ).to.be.true
    expect( is.not.sameType( [] , void 0 ) ).to.be.true
    expect( is.not.sameType( [] , 0 ) ).to.be.true
    expect( is.not.sameType( [] , new Number() ) ).to.be.true
    expect( is.not.sameType( [] , '' ) ).to.be.true
    expect( is.not.sameType( [] , new String() ) ).to.be.true
    expect( is.not.sameType( [] , true ) ).to.be.true
    expect( is.not.sameType( [] , false ) ).to.be.true
    expect( is.not.sameType( [] , new Boolean() ) ).to.be.true
    expect( is.not.sameType( [] , {} ) ).to.be.true
    expect( is.not.sameType( [] , [] ) ).to.be.false
    expect( is.not.sameType( [] , arguments ) ).to.be.true
    expect( is.not.sameType( [] , function () {} ) ).to.be.true
    expect( is.not.sameType( [] , new Date() ) ).to.be.true
    expect( is.not.sameType( [] , new Error() ) ).to.be.true
    expect( is.not.sameType( [] , /^/ ) ).to.be.true

    expect( is.not.sameType( arguments , null ) ).to.be.true
    expect( is.not.sameType( arguments , void 0 ) ).to.be.true
    expect( is.not.sameType( arguments , 0 ) ).to.be.true
    expect( is.not.sameType( arguments , new Number() ) ).to.be.true
    expect( is.not.sameType( arguments , '' ) ).to.be.true
    expect( is.not.sameType( arguments , new String() ) ).to.be.true
    expect( is.not.sameType( arguments , true ) ).to.be.true
    expect( is.not.sameType( arguments , false ) ).to.be.true
    expect( is.not.sameType( arguments , new Boolean() ) ).to.be.true
    expect( is.not.sameType( arguments , {} ) ).to.be.true
    expect( is.not.sameType( arguments , [] ) ).to.be.true
    expect( is.not.sameType( arguments , arguments ) ).to.be.false
    expect( is.not.sameType( arguments , function () {} ) ).to.be.true
    expect( is.not.sameType( arguments , new Date() ) ).to.be.true
    expect( is.not.sameType( arguments , new Error() ) ).to.be.true
    expect( is.not.sameType( arguments , /^/ ) ).to.be.true

    expect( is.not.sameType( function () {} , null ) ).to.be.true
    expect( is.not.sameType( function () {} , void 0 ) ).to.be.true
    expect( is.not.sameType( function () {} , 0 ) ).to.be.true
    expect( is.not.sameType( function () {} , new Number() ) ).to.be.true
    expect( is.not.sameType( function () {} , '' ) ).to.be.true
    expect( is.not.sameType( function () {} , new String() ) ).to.be.true
    expect( is.not.sameType( function () {} , true ) ).to.be.true
    expect( is.not.sameType( function () {} , false ) ).to.be.true
    expect( is.not.sameType( function () {} , new Boolean() ) ).to.be.true
    expect( is.not.sameType( function () {} , {} ) ).to.be.true
    expect( is.not.sameType( function () {} , [] ) ).to.be.true
    expect( is.not.sameType( function () {} , arguments ) ).to.be.true
    expect( is.not.sameType( function () {} , function () {} ) ).to.be.false
    expect( is.not.sameType( function () {} , new Date() ) ).to.be.true
    expect( is.not.sameType( function () {} , new Error() ) ).to.be.true
    expect( is.not.sameType( function () {} , /^/ ) ).to.be.true

    expect( is.not.sameType( new Date() , null ) ).to.be.true
    expect( is.not.sameType( new Date() , void 0 ) ).to.be.true
    expect( is.not.sameType( new Date() , 0 ) ).to.be.true
    expect( is.not.sameType( new Date() , new Number() ) ).to.be.true
    expect( is.not.sameType( new Date() , '' ) ).to.be.true
    expect( is.not.sameType( new Date() , new String() ) ).to.be.true
    expect( is.not.sameType( new Date() , true ) ).to.be.true
    expect( is.not.sameType( new Date() , false ) ).to.be.true
    expect( is.not.sameType( new Date() , new Boolean() ) ).to.be.true
    expect( is.not.sameType( new Date() , {} ) ).to.be.true
    expect( is.not.sameType( new Date() , [] ) ).to.be.true
    expect( is.not.sameType( new Date() , arguments ) ).to.be.true
    expect( is.not.sameType( new Date() , function () {} ) ).to.be.true
    expect( is.not.sameType( new Date() , new Date() ) ).to.be.false
    expect( is.not.sameType( new Date() , new Error() ) ).to.be.true
    expect( is.not.sameType( new Date() , /^/ ) ).to.be.true

    expect( is.not.sameType( new Error() , null ) ).to.be.true
    expect( is.not.sameType( new Error() , void 0 ) ).to.be.true
    expect( is.not.sameType( new Error() , 0 ) ).to.be.true
    expect( is.not.sameType( new Error() , new Number() ) ).to.be.true
    expect( is.not.sameType( new Error() , '' ) ).to.be.true
    expect( is.not.sameType( new Error() , new String() ) ).to.be.true
    expect( is.not.sameType( new Error() , true ) ).to.be.true
    expect( is.not.sameType( new Error() , false ) ).to.be.true
    expect( is.not.sameType( new Error() , new Boolean() ) ).to.be.true
    expect( is.not.sameType( new Error() , {} ) ).to.be.true
    expect( is.not.sameType( new Error() , [] ) ).to.be.true
    expect( is.not.sameType( new Error() , arguments ) ).to.be.true
    expect( is.not.sameType( new Error() , function () {} ) ).to.be.true
    expect( is.not.sameType( new Error() , new Date() ) ).to.be.true
    expect( is.not.sameType( new Error() , new Error() ) ).to.be.false
    expect( is.not.sameType( new Error() , /^/ ) ).to.be.true

    expect( is.not.sameType( /^/ , null ) ).to.be.true
    expect( is.not.sameType( /^/ , void 0 ) ).to.be.true
    expect( is.not.sameType( /^/ , 0 ) ).to.be.true
    expect( is.not.sameType( /^/ , new Number() ) ).to.be.true
    expect( is.not.sameType( /^/ , '' ) ).to.be.true
    expect( is.not.sameType( /^/ , new String() ) ).to.be.true
    expect( is.not.sameType( /^/ , true ) ).to.be.true
    expect( is.not.sameType( /^/ , false ) ).to.be.true
    expect( is.not.sameType( /^/ , new Boolean() ) ).to.be.true
    expect( is.not.sameType( /^/ , {} ) ).to.be.true
    expect( is.not.sameType( /^/ , [] ) ).to.be.true
    expect( is.not.sameType( /^/ , arguments ) ).to.be.true
    expect( is.not.sameType( /^/ , function () {} ) ).to.be.true
    expect( is.not.sameType( /^/ , new Date() ) ).to.be.true
    expect( is.not.sameType( /^/ , new Error() ) ).to.be.true
    expect( is.not.sameType( /^/ , /^/ ) ).to.be.false

  } )

} )
