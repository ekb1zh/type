import Type from '../dist'

test(`getting types like "Type.Kind", not like "typeof Type['Kind']"`, () => {
  const kind: Type.Kind = 'null'
  expect(kind)
})
