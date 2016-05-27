# is.js

An extensible check library.

## Usage

## Cheatsheet

TL;DR

__bundle:nil__

- [is.null( val:any )](#)
- [is.undefined( val:any )](#)
- [is.nil( val:any )](#)

__bundle:number__

- [is.number( val:any )](#)
- [is.nan( val:any )](#)
- [is.odd( num:number )](#)
- [is.even( num:number )](#)
- [is.finite( num:number )](#)
- [is.infinite( num:number )](#)
- [is.integer( num:number )](#)
- [is.safeInteger( num:number )](#)

__bundle:string__

- [is.string( val:any )](#)
- [is.emptyString( str:string )](#)
- [is.stringIncludes( str:string , substr:string )](#)
- [is.startsWith( str:string , prefix:string )](#)
- [is.endsWith( str:string , suffix:string )](#)

__bundle:boolean__

- [is.boolean( val:any )](#)
- [is.true( val:any )](#)
- [is.false( val:any )](#)
- [is.truthy( val:any )](#)
- [is.falsy( val:any )](#)

__bundle:primitive__

- [is.primitive( val:any )](#)

__bundle:object__

- [is.object( val:any )](#)
- [is.emptyObject( obj:object )](#)
- [is.ownPropertyDefined( obj:object , key:string )](#)
- [is.propertyDefined( obj:object , key:string )](#)

__bundle:array__

- [is.array( val:any )](#)
- [is.arrayLike( val:any )](#)
- [is.emptyArray( ary:array )](#)
- [is.arrayIncludes( ary:array , val:any )](#)
- [is.arrayDeepIncludes( ary:array , val:any )](#)

__bundle:function__

- [is.function( val:any )](#)

__bundle:date__

- [is.date( val:any )](#)

__bundle:error__

- [is.error( val:any )](#)

__bundle:regex__

- [is.regex( val:any )](#)

__bundle:type__

- [is.sameType( val:any , oth:any )](#)
- [is.instanceOf( obj:object , ctor:function )](#)
- [is.prototypeOf( proto:object , obj:object )](#)

__bundle:equality__

- [is.equal( val:any , oth:any )](#)
- [is.deepEqual( val:any , oth:any )](#)

## API Reference

### bundle:nil

#### is.null( val:any )

Checks whether given value is `null`.

```js
is.null( null ) // true
is.null( undefined ) // false
```

#### is.undefined( val:any )

Checks whether given value is `undefined`.

```js
is.undefined( null ) // false
is.undefined( undefined ) // true
```

#### is.nil( val:any )

Checks whether given value is either `null` or `undefined`.

```js
is.nil( null ) // true
is.nil( undefined ) // true
```

### bundle:number

#### is.number( val:any )

Checks whether given value is a Number.

```js
is.number( 0 ) // true
is.number( '0' ) // false
is.number( Number.NaN ) // true
is.number( Number.POSITIVE_INFINITY ) // true
is.number( Number.NEGATIVE_INFINITY ) // true
is.number( new Number( 0 ) ) // false
```

#### is.nan( val:any )

Checks whether given value is NaN.

```js
is.nan( 0 ) // false
is.nan( Number.NaN ) // true
is.nan( 'one' ) // false
```

#### is.odd( num:number )

Checks whether given value is an odd number.

```js
is.odd( 1 ) // true
is.odd( 2 ) // false
is.odd( '1' ) // false
is.odd( '2' ) // false
```

#### is.even( num:number )

Checks whether given value is an even number.

```js
is.even( 1 ) // false
is.even( 2 ) // true
is.even( '1' ) // false
is.even( '2' ) // false
```

#### is.finite( num:number )

Checks whether given value is a finite number.

```js
is.finite( 0 ) // true
is.finite( '0' ) // false
is.finite( Number.NaN ) // false
is.finite( Number.POSITIVE_INFINITY ) // false
is.finite( Number.NEGATIVE_INFINITY ) // false
```

#### is.infinite( num:number )

Checks whether given value is a infinite number, i.e, `Number.POSITIVE_INFINITY` or `Number.NEGATIVE_INFINITY`.

```js
is.infinite( 0 ) // false
is.infinite( '0' ) // false
is.infinite( Number.NaN ) // false
is.infinite( Number.POSITIVE_INFINITY ) // true
is.infinite( Number.NEGATIVE_INFINITY ) // true
```

#### is.integer( num:number )

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

#### is.safeInteger( num:number )

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
