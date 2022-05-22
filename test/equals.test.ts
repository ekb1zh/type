import Type from '../dist'

test('type of value equals type kind', () => {
  const values: [unknown, Type.Kind][] = [
    [false, 'boolean'],
    [0, 'number'],
    ['', 'string'],
    [Symbol(), 'symbol'],
    [BigInt('0'), 'bigint'],
    [{}, 'object'],
    [[], 'array'],
    [() => {}, 'function'],
    [null, 'null'],
    [void 0, 'undefined'],
  ]

  values.forEach(([value, kind]) => {
    const type = Type.of(value)
    expect(type).toBe(kind)
  })
})
