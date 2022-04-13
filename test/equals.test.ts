import Type from '../src'

test('type of value equals type kind', () => {
  const values = [
    [false, Type.Kind.BOOLEAN],
    [0, Type.Kind.NUMBER],
    ['', Type.Kind.STRING],
    [Symbol(), Type.Kind.SYMBOL],
    [BigInt('0'), Type.Kind.BIGINT],
    [{}, Type.Kind.OBJECT],
    [[], Type.Kind.ARRAY],
    [() => {}, Type.Kind.FUNCTION],
    [null, Type.Kind.NULL],
    [void 0, Type.Kind.UNDEFINED],
  ]

  values.forEach(([value, kind]) => {
    const type = Type.of(value)
    expect(type).toBe(kind)
  })
})
