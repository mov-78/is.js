# is.js

An extensible check library.

## Usage

## Cheatsheet

TL;DR

#### bundle:nil

- [is.null( val:any )](#)
- [is.undefined( val:any )](#)
- [is.nil( val:any )](#)

#### bundle:number

- [is.number( val:any )](#)
- [is.nan( val:any )](#)
- [is.odd( num:number )](#)
- [is.even( num:number )](#)
- [is.finite( num:number )](#)
- [is.infinite( num:number )](#)
- [is.integer( num:number )](#)
- [is.safeInteger( num:number )](#)

#### bundle:string

- [is.string( val:any )](#)
- [is.emptyString( str:string )](#)
- [is.stringIncludes( str:string , substr:string )](#)
- [is.startsWith( str:string , prefix:string )](#)
- [is.endsWith( str:string , suffix:string )](#)

#### bundle:boolean

- [is.boolean( val:any )](#)
- [is.true( val:any )](#)
- [is.false( val:any )](#)
- [is.truthy( val:any )](#)
- [is.falsy( val:any )](#)

#### bundle:primitive

- [is.primitive( val:any )](#)

#### bundle:object

- [is.object( val:any )](#)
- [is.emptyObject( obj:object )](#)
- [is.ownPropertyDefined( obj:object , key:string )](#)
- [is.propertyDefined( obj:object , key:string )](#)

#### bundle:array

- [is.array( val:any )](#)
- [is.arrayLike( val:any )](#)
- [is.arguments( val:any )](#)
- [is.emptyArray( ary:array )](#)
- [is.arrayIncludes( ary:array , val:any )](#)
- [is.arrayDeepIncludes( ary:array , val:any )](#)

#### bundle:function

- [is.function( val:any )](#)

#### bundle:date

- [is.date( val:any )](#)

#### bundle:error

- [is.error( val:any )](#)

#### bundle:regex

- [is.regex( val:any )](#)

#### bundle:type

- [is.sameType( val:any , oth:any )](#)
- [is.instanceOf( obj:object , ctor:function )](#)
- [is.prototypeOf( proto:object , obj:object )](#)

#### bundle:equality

- [is.equal( val:any , oth:any )](#)
- [is.deepEqual( val:any , oth:any )](#)

## API Reference
