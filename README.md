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

```tsx
import Type from '@ekb1zh/type'

Type.of(null) // => 'null'
Type.of([]) // => 'array'
Type.of({}) // => 'object'
```

Also you can use `Kind` for type checking.

```tsx
import Type from '@ekb1zh/type'

const valid: Type.Kind = 'null'
const invalid: Type.Kind = 'bla-bla-bla'
```

The complete list of types that this library defines

```
'null'
'undefined'
'boolean'
'number'
'string'
'symbol'
'bigint'
'function'
'array'
'object'
```
