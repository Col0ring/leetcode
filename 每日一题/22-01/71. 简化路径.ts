// 栈
export function simplifyPath(path: string): string {
  const names = path.split('/')
  const stack: string[] = []
  for (const name of names) {
    if (name === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else if (name.length && name !== '.') {
      stack.push(name)
    }
  }

  return '/' + stack.join('/')
}
