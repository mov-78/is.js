# is.js

Minimalistic check library.

## Install

Node:

```sh
$ npm install --save @pwn/is
```

Browser:

```html
<script src="path/to/is.js"></script>
```

## Usage

A code sample is worth a thousand words:

```js
is.number( 0 ) // true
is.not.number( 0 ) // false
is.equal( [ 1 , [ 2 , 3 ] ] , [ 1 , [ 2 , 3 ] ] ) // false
is.deepEqual( [ 1 , [ 2 , 3 ] ] , [ 1 , [ 2 , 3 ] ] ) // true
```

All checks, or _predicates_ in `is.js` terminology, takes two general forms:

- __POSITIVE CHECK__: `is.predicate( ...args )` - Checks whether certain condition met.
- __NEGATIVE CHECK__: `is.not.predicate( ...args )` - The inverse of its corresponding _POSITIVE CHECK_.

That's it! What's next?

- [Cheatsheet](#cheatsheet) - List of available predicates.
- [API reference](#api-reference) - Detailed documentation on each predicate.
- [Writing new predicates](#writing-new-predicates) - Learn how to define new predicates and extends existing ones.

## Cheatsheet

TL;DR

__bundle:nil__

- [is.null( value )](#)
- [is.undefined( value )](#)
- [is.nil( value )](#)

__bundle:number__

- [is.number( value )](#)
- [is.nan( value )](#)
- [is.odd( number )](#)
- [is.even( number )](#)
- [is.finite( number )](#)
- [is.infinite( number )](#)
- [is.integer( number )](#)
- [is.safeInteger( number )](#)

__bundle:string__

- [is.string( value )](#)
- [is.emptyString( string )](#)
- [is.stringIncludes( string , substring )](#)
- [is.startsWith( string , prefix )](#)
- [is.endsWith( string , suffix )](#)

__bundle:boolean__

- [is.boolean( value )](#)

__bundle:object__

- [is.object( value )](#)
- [is.emptyObject( object )](#)
- [is.ownPropertyDefined( object , key )](#)
- [is.propertyDefined( object , key )](#)

__bundle:array__

- [is.array( value )](#)
- [is.arrayLike( value )](#)
- [is.emptyArray( array )](#)
- [is.arrayIncludes( array , member )](#)
- [is.arrayDeepIncludes( array , member )](#)

__bundle:type__

- [is.sameType( value , other )](#)
- [is.instanceOf( object , constructor )](#)
- [is.prototypeOf( prototype , object )](#)
- [is.primitive( value )](#)
- [is.date( value )](#)
- [is.error( value )](#)
- [is.function( value )](#)
- [is.map( value )](#)
- [is.regexp( value )](#)
- [is.set( value )](#)
- [is.symbol( value )](#)

__bundle:equality__

- [is.equal( value , other )](#)
- [is.deepEqual( value , other )](#)

## API reference

#### is.null( value )

Checks whether given value is `null`.

```js
is.null( null ) // true
is.null( undefined ) // false
```

#### is.undefined( value )

Checks whether given value is `undefined`.

```js
is.undefined( null ) // false
is.undefined( undefined ) // true
```

#### is.nil( value )

Checks whether given value is either `null` or `undefined`.

```js
is.nil( null ) // true
is.nil( undefined ) // true
```

#### is.number( value )

Checks whether given value is a number.

```js
is.number( 0 ) // true
is.number( Number.NaN ) // true
is.number( Number.POSITIVE_INFINITY ) // true
is.number( Number.NEGATIVE_INFINITY ) // true
is.number( '0' ) // false
is.number( new Number( 0 ) ) // false
```

#### is.nan( value )

Checks whether given value is `NaN`.

```js
is.nan( 0 ) // false
is.nan( Number.NaN ) // true
is.nan( Number.POSITIVE_INFINITY ) // false
is.nan( Number.NEGATIVE_INFINITY ) // false
is.nan( 'one' ) // false
```

#### is.odd( number )

Checks whether given value is an odd number.

```js
is.odd( 1 ) // true
is.odd( 2 ) // false
is.odd( '1' ) // false
is.odd( '2' ) // false
```

#### is.even( number )

Checks whether given value is an even number.

```js
is.even( 1 ) // false
is.even( 2 ) // true
is.even( '1' ) // false
is.even( '2' ) // false
```

#### is.finite( number )

Checks whether given value is a finite number.

```js
is.finite( 0 ) // true
is.finite( '0' ) // false
is.finite( Number.NaN ) // false
is.finite( Number.POSITIVE_INFINITY ) // false
is.finite( Number.NEGATIVE_INFINITY ) // false
```

#### is.infinite( number )

Checks whether given value is an infinite number, i.e, `Number.POSITIVE_INFINITY` or `Number.NEGATIVE_INFINITY`.

```js
is.infinite( 0 ) // false
is.infinite( '0' ) // false
is.infinite( Number.NaN ) // false
is.infinite( Number.POSITIVE_INFINITY ) // true
is.infinite( Number.NEGATIVE_INFINITY ) // true
```

#### is.integer( number )

Checks whether given value is an integer.

```js
is.integer( 0 ) // true
is.integer( 0.1 ) // false
is.integer( Number.NaN ) // false
is.integer( Number.POSITIVE_INFINITY ) // false
is.integer( Number.NEGATIVE_INFINITY ) // false
is.integer( Number.MAX_SAFE_INTEGER ) // true
is.integer( Number.MIN_SAFE_INTEGER ) // true
is.integer( Number.MAX_SAFE_INTEGER + 1 ) // true
is.integer( Number.MIN_SAFE_INTEGER - 1 ) // true
```

#### is.safeInteger( number )

Checks whether given value is a safe integer.

```js
is.safeInteger( 0 ) // true
is.safeInteger( 0.1 ) // false
is.safeInteger( Number.NaN ) // false
is.safeInteger( Number.POSITIVE_INFINITY ) // false
is.safeInteger( Number.NEGATIVE_INFINITY ) // false
is.safeInteger( Number.MAX_SAFE_INTEGER ) // true
is.safeInteger( Number.MIN_SAFE_INTEGER ) // true
is.safeInteger( Number.MAX_SAFE_INTEGER + 1 ) // false
is.safeInteger( Number.MIN_SAFE_INTEGER - 1 ) // false
```

#### is.string( value )

Checks whether given value is a string.

```js
is.string( 'lipsum' ) // true
is.string( `lipsum` ) // true
```

#### is.emptyString( string )

Checks whether given value is an empty string, i.e, a string with whitespace characters only.

```js
is.emptyString( '' ) // true
is.emptyString( ' ' ) // true
is.emptyString( '\f\n\r\t' ) // true
is.emptyString( '\u0009\u000A\u000B\u000C\u000D\u0020' ) // true
is.emptyString( 'lipsum' ) // false
```

#### is.stringIncludes( string , substring )

Checks whether `string` includes `substring`.

```js
is.stringIncludes( 'foobar' , 'oo' ) // true
```

#### is.startsWith( string , prefix )

Checks whether `string` starts with `prefix`.

```js
is.startsWith( 'foobar' , 'foo' ) // true
```

#### is.endsWith( string , suffix )

Checks whether `string` ends with `suffix`.

```js
is.endsWith( 'foobar' , 'bar' ) // true
```

#### is.boolean( value )

Checks whether given value is a boolean.

```js
is.boolean( 1 ) // false
is.boolean( 0 ) // false
is.boolean( true ) // true
is.boolean( false ) // true
is.boolean( new Boolean( true ) ) // false
is.boolean( new Boolean( false ) ) // false
```

#### is.object( value )

Checks whether given value is an object.

```js
is.object( null ) // false
is.object( undefined ) // false
is.object( 0 ) // false
is.object( '' ) // false
is.object( true ) // false
is.object( false ) // false
is.object( Symbol() ) // false
is.object( Symbol.for( 'is' ) ) // false
is.object( {} ) // true
is.object( [] ) // true
is.object( function () {} ) // true
```

#### is.emptyObject( object )

Checks whether given value is an empty object, i.e, an object without any own, enumerable, string keyed properties.

```js
is.emptyObject( {} ) // true
is.emptyObject( { foo : 'bar' } ) // false
is.emptyObject( Object.create( { foo : 'bar' } ) ) // true
is.emptyObject( Object.defineProperty( {} , 'foo' , { value : 'bar' } ) ) // true
```

#### is.ownPropertyDefined( object , key )

Checks whether given property is defined directly on `object`.

```js
is.ownPropertyDefined( { foo : 'bar' } , 'foo' ) // true
is.ownPropertyDefined( Object.create( { foo : 'bar' } ) , 'foo' ) // false
```

#### is.propertyDefined( object , key )

Checks whether given property is defined on `object`, directly or indirectly via prototype chain.

```js
is.propertyDefined( { foo : 'bar' } , 'foo' ) // true
is.propertyDefined( Object.create( { foo : 'bar' } ) , 'foo' ) // true
```

#### is.array( value )

Checks whether given value is an array.

```js
is.array( [] ) // true
is.array( '' ) // false
is.array( document.links ) // false
is.array( function() {} ) // false
```

#### is.arrayLike( value )

Checks whether given value is an _array-like_ object.

An object is qualified as _array-like_ if it has a property named `length`
that is a positive safe integer. Primitives may also be qualified as
_array-like_ if its corresponding primitive wrapper object is _array-like_.

As a special case, functions are never qualified as _array-like_.

```js
is.arrayLike( [] ) // true
is.arrayLike( '' ) // true
is.arrayLike( document.scripts ) // true
is.arrayLike( function() {} ) // false
```

#### is.emptyArray( array )

Checks whether given value is an empty array.

```js
is.emptyArray( [] ) // true
is.emptyArray( [ 0 ] ) // false
is.emptyArray( new Array( 5 ) ) // false
```

#### is.arrayIncludes( array , member )

Checks whether `member` is in `array`, using `is.equal` for membership test.

```js
is.arrayIncludes( [ 0 , 1 , 2 ] , 0 ) // true
is.arrayIncludes( [ [ 1 , 2 ] , 3 ] , [ 1 , 2 ] ) // false
```

#### is.arrayDeepIncludes( array , member )

Checks whether `member` is in `array`, using `is.deepEqual` for membership test.

```js
is.arrayDeepIncludes( [ 0 , 1 , 2 ] , 0 ) // true
is.arrayDeepIncludes( [ [ 1 , 2 ] , 3 ] , [ 1 , 2 ] ) // true
```

#### is.sameType( value , other )

Checks whether given values are of the same type.

```js
is.sameType( 0 , 0 ) // true
is.sameType( 0 , '0' ) // false
is.sameType( 0 , new Number( 0 ) ) // false
is.sameType( 0 , Number.NaN ) // true
is.sameType( [] , {} ) // false
```

#### is.instanceOf( object , constructor )

Checks whether `constructor.prototype` exists within `object`'s prototype chain.

```js
class Foo {}
class Bar extends Foo {}
class Baz {}

const alice = new Bar()
const bob = new Baz()

is.instanceOf( alice , Foo ) // true
is.instanceOf( alice , Bar ) // true
is.instanceOf( alice , Baz ) // false

is.instanceOf( bob , Foo ) // false
is.instanceOf( bob , Bar ) // false
is.instanceOf( bob , Baz ) // true

is.instanceOf( {} , '' ) // false - failed silently if `constructor` is not a function
```

#### is.prototypeOf( prototype , object )

Checks whether `prototype` exists within `object`'s prototype chain.

```js
const foo = {}
const bar = Object.create( foo )
const baz = Object.create( bar )
const qux = {}

is.prototypeOf( foo , bar ) // true
is.prototypeOf( bar , baz ) // true
is.prototypeOf( foo , baz ) // true
is.prototypeOf( foo , qux ) // false
is.prototypeOf( bar , qux ) // false
is.prototypeOf( baz , qux ) // false
```

#### is.primitive( value )

Checks whether given value is a [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

```js
is.primitive( null ) // true
is.primitive( undefined ) // true
is.primitive( 0 ) // true
is.primitive( new Number( 0 ) ) // false
is.primitive( '' ) // true
is.primitive( new String( '' ) ) // false
is.primitive( true ) // true
is.primitive( new Boolean( true ) ) // false
is.primitive( false ) // true
is.primitive( new Boolean( false ) ) // false
is.primitive( Symbol() ) // true
is.primitive( Symbol.for( 'is' ) ) // true
is.primitive( {} ) // false
is.primitive( [] ) // false
is.primitive( function() {} ) // false
```

#### is.date( value )

Checks whether given value is a `Date` object.

```js
is.date( new Date() ) // true
```

#### is.error( value )

Checks whether given value is an `Error` object.

```js
is.error( new Error() ) // true
is.error( new TypeError() ) // true
```

#### is.function( value )

Checks whether given value is a function.

```js
is.function( function () {} ) // true
is.function( function* () {} ) // true
is.function( () => null ) // true
is.function( new Function() ) // true
```

#### is.map( value )

Checks whether given value is a `Map` object.

```js
is.map( new Map() ) // true
```

#### is.regexp( value )

Checks whether given value is a `RegExp` object.

```js
is.regexp( /^/ ) // true
is.regexp( new RegExp() ) // true
```

#### is.set( value )

Checks whether given value is a `Set` object.

```js
is.set( new Set() ) // true
```

#### is.symbol( value )

Checks whether given value is a symbol.

```js
is.symbol( Symbol() ) // true
is.symbol( Symbol.for( 'is' ) ) // true
```

#### is.equal( value , other )

Checks whether given values are equal, using [SameValueZero](http://bit.ly/1soiz3w) algorithm.

```js
is.equal( null , undefined ) // false
is.equal( 0 , 0 ) // true
is.equal( +0 , -0 ) // true
is.equal( 0 , '0' ) // false
is.equal( Number.NaN , Number.NaN ) // true
is.equal( [] , [] ) // false
```

#### is.deepEqual( value , other )

Checks whether given values are deeply equal, i.e:

- If `Type( value ) !== Type( other )`, returns `false`.
- For primitives, checks whether they are equal using _SameValueZero_.
- For arrays, checks whether they have same set of members, all of which are deeply equal.
- Otherwise, checks whether they have same set of own, enumerable, string keyed properties, all of which are deeply equal.

```js
is.deepEqual( null , undefined ) // false
is.deepEqual( 0 , 0 ) // true
is.deepEqual( 0 , '0' ) // false
is.deepEqual( Number.NaN , Number.NaN ) // true
is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : 5 } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : 5 } ] ) // true
```

## Writing new predicates
