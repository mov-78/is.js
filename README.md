# is.js

Minimalistic check library.

## Install

Node:

```sh
$ npm install --save @pwn/is
```

Browser:

```html
<script src="path/to/is.min.js"></script>
```

## Features

- Zero dependencies.
- Works with Node, AMD and all browsers, including IE6.
- Modular and extensible.

## Usage

A code sample is worth a thousand words:

```js
const is = require( '@pwn/is' )

is.array( [] ) // true
is.not.integer( 0 ) // false
is.propertyDefined( { foo : { bar : 0 } } , 'foo.bar' ) // true
is.equal( [ 1 , [ 2 , 3 ] ] , [ 1 , [ 2 , 3 ] ] ) // false
is.deepEqual( [ 1 , [ 2 , 3 ] ] , [ 1 , [ 2 , 3 ] ] ) // true
```

All checks, or _predicates_ in `is.js` terminology, takes two general forms:

- __POSITIVE CHECK__: `is.predicate( ...args )` - Checks whether certain condition met.
- __NEGATIVE CHECK__: `is.not.predicate( ...args )` - The inverse of its corresponding positive check.

That's it! What's next?

- [Cheatsheet](#cheatsheet) - List of available predicates shipped with `is.js`.
- [API reference](#api-reference) - Detailed documentation on each predicate.
- [Writing new predicates](#writing-new-predicates) - Learn how to define new predicates.

## Cheatsheet

TL;DR

> A _bundle_ is simply a way of organizing related predicates.

__bundle:nil__

- [is.null( value )](#isnull-value-)
- [is.undefined( value )](#isundefined-value-)
- [is.nil( value )](#isnil-value-)

__bundle:number__

- [is.number( value )](#isnumber-value-)
- [is.numeral( value )](#isnumeral-value-)
- [is.nan( value )](#isnan-value-)
- [is.odd( number )](#isodd-number-)
- [is.even( number )](#iseven-number-)
- [is.finite( number )](#isfinite-number-)
- [is.infinite( number )](#isinfinite-number-)
- [is.integer( number )](#isinteger-number-)
- [is.safeInteger( number )](#issafeinteger-number-)

__bundle:string__

- [is.string( value )](#isstring-value-)
- [is.emptyString( string )](#isemptystring-string-)
- [is.substring( substring , string , [offset=0] )](#issubstring-substring--string--offset0-)
- [is.prefix( prefix , string )](#isprefix-prefix--string-)
- [is.suffix( suffix , string )](#issuffix-suffix--string-)

__bundle:boolean__

- [is.boolean( value )](#isboolean-value-)

__bundle:object__

- [is.object( value )](#)
- [is.emptyObject( object )](#)
- [is.propertyDefined( object , keyPath )](#)
- [is.conforms( object , schema , [strict=false] )](#)

__bundle:array__

- [is.array( value )](#isarray-value-)
- [is.arrayLikeObject( value )](#isarraylikeobject-value-)
- [is.inArray( value , array , [offset=0] , [comparator=is.equal] )](#isinarray-value--array--offset0--comparatorisequal-)

__bundle:type__

- [is.sameType( value , other )](#)
- [is.primitive( value )](#)
- [is.date( value )](#)
- [is.error( value )](#)
- [is.function( value )](#)
- [is.map( value )](#)
- [is.regexp( value )](#)
- [is.set( value )](#)
- [is.symbol( value )](#)

__bundle:equality__

- [is.equal( value , other )](#isequal-value--other-)
- [is.deepEqual( value , other )](#isdeepequal-value--other-)

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

#### is.numeral( value )

Checks whether given value is a numeral, i.e:

- a genuine finite number
- or a string that represents a finite number

```js
is.numeral( null ) // false
is.numeral( undefined ) // false
is.numeral( true ) // false
is.numeral( false ) // false
is.numeral( Symbol( 0 ) ) // false
is.numeral( Symbol.for( 0 ) ) // false
is.numeral( { valueOf() { return 0 } } ) // false
is.numeral( [ 0 ] ) // false
is.numeral( () => 0 ) // false

is.numeral( '' ) // false
is.numeral( 'one' ) // false
is.numeral( '1px' ) // false
is.numeral( '  0xFF  ' ) // true
is.numeral( '1e1' ) // true
is.numeral( '1.1E-1' ) // true
is.numeral( '-1' ) // true
is.numeral( '1.1' ) // true
is.numeral( new Number( 1 ) ) // true
is.numeral( new String( '-1.1' ) ) // true

is.numeral( Number.NaN ) // false
is.numeral( Number.POSITIVE_INFINITY ) // false
is.numeral( Number.NEGATIVE_INFINITY ) // false
```

#### is.nan( value )

Checks whether given value is `NaN`.

```js
is.nan( 0 ) // false
is.nan( Number.NaN ) // true
is.nan( new Number( Number.NaN ) ) // false
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
is.odd( new Number( 1 ) ) // false
is.odd( new Number( 2 ) ) // false
is.odd( Number.NaN ) // false
is.odd( Number.POSITIVE_INFINITY ) // false
is.odd( Number.NEGATIVE_INFINITY ) // false
```

#### is.even( number )

Checks whether given value is an even number.

```js
is.even( 1 ) // false
is.even( 2 ) // true
is.even( '1' ) // false
is.even( '2' ) // false
is.even( new Number( 1 ) ) // false
is.even( new Number( 2 ) ) // false
is.even( Number.NaN ) // false
is.even( Number.POSITIVE_INFINITY ) // false
is.even( Number.NEGATIVE_INFINITY ) // false
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

Checks whether given value is an infinite number, i.e,
`Number.POSITIVE_INFINITY` or `Number.NEGATIVE_INFINITY`.

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
is.integer( '0' ) // false
is.integer( new Number( 0 ) ) // false
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
is.safeInteger( '0' ) // false
is.safeInteger( new Number( 0 ) ) // false
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
is.string( new String( 'lipsum' ) ) // false
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

#### is.substring( substring , string , [offset=0] )

Checks whether one string may be found within another string.

```js
is.substring( 'ps' , 'lipsum' ) // true
is.substring( [ 'ps' ] , 'lipsum' ) // true; `substring` will be converted to a string as needed
is.substring( 'ps' , [ 'lipsum' ] ) // throws TypeError: `string` must be a string primitive
is.substring( 'ps' , 'lipsum' , 3.14 ) // true; non-integer offset will be omitted and defaults to 0
is.substring( 'sp' , 'lipsum' ) // false
is.substring( 'ps' , 'lipsum' , 2 ) // true
is.substring( 'ps' , 'lipsum' , 3 ) // false
is.substring( 'ps' , 'lipsum' , -4 ) // true; supports negative offset
is.substring( 'ps' , 'lipsum' , 10 ) // throws RangeError
```

#### is.prefix( prefix , string )

Checks whether `string` starts with `prefix`.

```js
is.prefix( 'lip' , 'lipsum' ) // true
is.prefix( 'sum' , 'lipsum' ) // false
is.prefix( 'lip' , [ 'lipsum' ] ) // throws TypeError: `string` must be a string primitive
is.prefix( [ 'lip' ] , 'lipsum' ) // true - `prefix` will be converted to a string as needed
```

#### is.suffix( suffix , string )

Checks whether `string` ends with `suffix`.

```js
is.suffix( 'sum' , 'lipsum' ) // true
is.suffix( 'lip' , 'lipsum' ) // false
is.suffix( 'sum' , [ 'lipsum' ] ) // throws TypeError: `string` must be a string primitive
is.suffix( [ 'sum' ] , 'lipsum' ) // true - `suffix` will be converted to a string as needed
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

#### is.propertyDefined( object , keyPath )

Checks whether given property is defined(recursively) on `object`.

```js
is.propertyDefined( { foo : 'bar' } , 'foo' ) // true
is.propertyDefined( Object.create( { foo : 'bar' } ) , 'foo' ) // true
is.propertyDefined( { foo : { bar : { baz : 0 } } } , 'foo.bar.baz' ) // true
is.propertyDefined( { foo : { bar : { baz : 0 } } } , 'foo.qux.baz' ) // false
is.defaults.keyPathSeparator = '|' // keyPath separator is configurable
is.propertyDefined( { foo : { bar : 0 } } , 'foo.bar' ) // false
is.propertyDefined( { foo : { bar : 0 } } , 'foo|bar' ) // true
```

#### is.conforms( object , schema , [strict=false] )

Checks whether `object` conforms to `schema`.

A `schema` is an object whose properties are functions that takes
these parameters(in order):

- __value:any__ - The value of current iteration.
- __key:string__ - The corresponding key of current iteration.
- __context:object__ - The object in question.

These functions, or _validators_, are called for each corresponding key
in `object` to check whether object conforms to the schema. An object is
said to be conforms to the schema if all validators passed.

In strict mode(where `strict=true`), `is.conforms` also checks whether
`object` and `schema` has the same set of own, enumerable, string-keyed
properties, in addition to check whether all validators passed.

```js
is.conforms(
  { name : 'Pwn' } ,
  { name : is.exist }
) // true

is.conforms(
  { name : 'Pwn' } ,
  {
    name : function ( value , key , context ) {
      return is.string( value ) && value.length >= 3
    }
  }
) // true

//
// strict mode
//

is.conforms(
  {
    name : '@pwn/is' ,
    access : 'public'
  } ,
  {
    name ( value , key , context ) {
      return is.string( value ) && value.length >= 3
    }
  } ,
  true // enable strict mode
) // false; `object` has extraneous properties
```

#### is.array( value )

Checks whether given value is an array.

```js
is.array( [] ) // true
is.array( '' ) // false
is.array( document.scripts ) // false
is.array( function() {} ) // false
```

#### is.arrayLikeObject( value )

Checks whether given value is an _array-like_ object.

An object is qualified as _array-like_ if it has a property named
`length` that is a positive safe integer. As a special case, functions
are never qualified as _array-like_.

```js
is.arrayLikeObject( [] ) // true
is.arrayLikeObject( '' ) // false
is.arrayLikeObject( document.scripts ) // true
is.arrayLikeObject( function() {} ) // false
```

#### is.inArray( value , array , [offset=0] , [comparator=is.equal] )

Checks whether given array or array-like object contains certain element.

- __value__: The element to search.
- __array__: The array or array-like object to search from.
- __offset__: The index to search from, inclusive.
- __comparator__: The comparator invoked per element against `value`.

The default comparator, which is `is.equal`, can be configured by setting
`is.defaults.inArrayComparator` to another comparator function.

By default, `is.inArray` skip _holes_ in sparse arrays. This behavior
can be turned off by setting `is.defaults.skipHoles` to `false`.

```js
is.inArray( 2 , [ 1 , 2 , 3 ] ) // true
is.inArray( 4 , [ 1 , 2 , 3 ] ) // false
is.inArray( 2 , [ 1 , 2 , 3 ] , 1 ) // true
is.inArray( 2 , [ 1 , 2 , 3 ] , 2 ) // false
is.inArray( 2 , [ 1 , 2 , 3 ] , 3 ) // throws RangeError
is.inArray( 2 , [ 1 , 2 , 3 ] , -2 ) // true; supports negative offset
is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] ) // false
is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , 0 , is.deepEqual ) // true
is.inArray( [ 2 ] , [ 1 , [ 2 ] , 3 ] , is.deepEqual ) // true; `offset` can be omitted when passing a custom comparator only
is.inArray( 2 , [ 1 , 2 , 3 ] , ( val , arrMember ) => val === arrMember ) // true; `comparator` takes two parameters, the element to search and the array element of current iteration
is.inArray( undefined , new Array( 5 ) ) // false; skip holes by default
is.default.skipHoles = false // configurable; turn off skipping holes
is.inArray( undefined , new Array( 5 ) ) // true
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
is.equal( 0 , '0' ) // false
is.equal( +0 , -0 ) // true; SameValueZero
is.equal( Number.NaN , Number.NaN ) // true; SameValueZero
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
is.deepEqual( +0 , -0 ) // true; SameValueZero
is.deepEqual( Number.NaN , Number.NaN ) // true; SameValueZero
is.deepEqual( [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] , [ 1 , { foo : [ 2 , [ 3 , 4 ] ] , bar : { baz : 5 } } ] ) // true
is.deepEqual( Object.create( { foo : 1 } ) , Object.create( { foo : 2 } ) ) // true; only own, enumerable, string-keyed properties are checked
```

## Writing new predicates

_Predicates_ are essentially functions that checks whether certain condition met based on passed in arguments. They are packaged in various _bundles_. Conceptually, a bundle is simply a way
of organizing related predicates. Implementation-wise, a bundle is a just a
function that takes two parameters:

- `util:object` - The utility object.
- `is:object` - The `is` export.

The `util` object defines a method called `addPredicate` that allows you to define new predicates:

> util.addPredicate( name:string , predicate:function )
> - name - The name of the predicate.
> - predicate - The predicate function.

Once defined, the predicate will be available on both `is` and `is.not` — `util.addPredicate` wraps the predicate in a delegate function and automatically handles positive/negative cases for you.

Still confused? Take a look at this sample bundle:

```js
// my_bundle.js
module.exports = function bundle( util , is ) {

  util.addPredicate( 'positive' , function isPositive( value ) {
    return is.number( value ) && value > 0
  } )

  util.addPredicate( 'negative' , function isNegative( value ) {
    return is.number( value ) && value < 0
  } )

}
```

To use a bundle, simple call `is.use`:

> is.use( bundle:function )

```js
const is = require( '@pwn/is' )

// import all predicates from my_bundle.js
is.use( require( 'path/to/my_bundle' ) )

is.positive( +1 ) // true
is.not.positive( -1 ) // true
is.negative( -1 ) // true
is.not.negative( +1 ) // true
```
