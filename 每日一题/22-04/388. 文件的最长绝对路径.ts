export function lengthLongestPath(input: string): number {
  const n = input.length
  let pos = 0
  let ans = 0
  const stack: number[] = []

  while (pos < n) {
    /* 检测当前文件的深度 */
    let depth = 1
    while (pos < n && input[pos] === '\t') {
      pos++
      depth++
    }
    /* 统计当前文件名的长度 */
    let isFile = false
    let len = 0
    while (pos < n && input[pos] !== '\n') {
      if (input[pos] === '.') {
        isFile = true
      }
      len++
      pos++
    }
    /* 跳过当前的换行符 */
    pos++

    while (stack.length >= depth) {
      stack.pop()
    }
    if (stack.length) {
      len += stack[stack.length - 1] + 1
    }
    if (isFile) {
      ans = Math.max(ans, len)
    } else {
      stack.push(len)
    }
  }
  return ans
}
