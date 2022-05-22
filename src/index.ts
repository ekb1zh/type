namespace Type {
  export type Kind =
    | 'null'
    | 'undefined'
    | 'boolean'
    | 'number'
    | 'string'
    | 'symbol'
    | 'bigint'
    | 'function'
    | 'array'
    | 'object'

  export const of = (value: unknown): Kind => {
    const type = typeof value
    if (type === 'object') {
      return value === null ? 'null' : Array.isArray(value) ? 'array' : 'object'
    } else {
      return type
    }
  }
}

export default Type
