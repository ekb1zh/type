enum Kind {
  BOOLEAN = 'BOOLEAN',
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  SYMBOL = 'SYMBOL',
  BIGINT = 'BIGINT',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  FUNCTION = 'FUNCTION',
  NULL = 'NULL',
  UNDEFINED = 'UNDEFINED',
}

const of = (value: unknown): Kind => {
  const type = typeof value
  switch (type) {
    case 'boolean':
      return Kind.BOOLEAN
    case 'number':
      return Kind.NUMBER
    case 'string':
      return Kind.STRING
    case 'symbol':
      return Kind.SYMBOL
    case 'bigint':
      return Kind.BIGINT
    case 'undefined':
      return Kind.UNDEFINED
    case 'function':
      return Kind.FUNCTION
    case 'object':
      return value === null
        ? Kind.NULL
        : Array.isArray(value)
        ? Kind.ARRAY
        : Kind.OBJECT
    default:
      throw new TypeError(String(value))
  }
}

export default {
  Kind,
  of,
}
