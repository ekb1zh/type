import Type from '../dist'

test(`type of enum as "Type.Kind", not as "typeof Type['Kind']"`, () => {
  const kind: Type.Kind = Type.Kind.NULL

  console.log({
    kind,
  })
})
