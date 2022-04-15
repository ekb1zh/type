## Simple tool for getting data type

### Install

```sh
npm i @ekb1zh/type
```

### Reason

You can't just find out the type of the `null`, `array` and `object` values in runtime. For these three values, the type is always `object`.

```ts
typeof null // => 'object'
typeof [] // => 'object'
typeof {} // => 'object'
```

This little library solves this problem quickly and efficiently.

```ts
import Type from '@ekb1zh/type'

Type.of(null) === Type.Kind.NULL // => true
Type.of([]) === Type.Kind.ARRAY // => true
Type.of({}) === Type.Kind.OBJECT // => true
```

or

```ts
import Type from '@ekb1zh/type'

Type.Kind[Type.of(null)] // => 'NULL'
Type.Kind[Type.of([])] // => 'ARRAY'
Type.Kind[Type.of({})] // => 'OBJECT'
```

The complete list of types that this library defines

```
BOOLEAN
NUMBER
STRING
SYMBOL
BIGINT
OBJECT
ARRAY
FUNCTION
NULL
UNDEFINED
```
