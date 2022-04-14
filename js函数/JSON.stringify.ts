export function jsonStringify(obj: any): string {
  const type = typeof obj
  const reg = /string|undefined|function/
  if (type !== 'object') {
    if (reg.test(type)) {
      // 或直接调用 toString
      return '"' + obj + '"'
    }
    return String(obj)
  } else {
    const json: string[] = []
    const isArr = Array.isArray(obj)
    for (const k in obj) {
      // 如果是对象，拿到每一个键
      const v = jsonStringify(obj[k])
      // 类似 key - value 形式
      json.push((isArr ? '' : '"' + k + '":') + String(v))
    }
    return (isArr ? '[' : '{') + String(json) + (isArr ? ']' : '}')
  }
}

console.log(
  jsonStringify({
    a: 1,
    b: {
      a: 2,
      c: [2, 3]
    }
  })
)
console.log(
  JSON.stringify({
    a: 1,
    b: {
      a: 2,
      c: [2, 3]
    }
  })
)
