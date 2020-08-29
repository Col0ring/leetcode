function kmp_table(prefix: number[], pattern: string) {
  const n = pattern.length
  prefix[0] = 0
  let len = 0
  let i = 1
  // 第一个肯定是 0 ，i 直接从 1 开始比较
  while (i < n) {
    if (pattern[i] === pattern[len]) {
      len++
      prefix[i] = len
      i++
    } else {
      if (len === 0) {
        prefix[i] = 0
        i++
      } else {
        // 不能直接为0
        len = prefix[len - 1]
      }
    }
  }
}

function kmp_search(text: string, pattern: string): number[] {
  const prefix: number[] = []
  const m = text.length
  const n = pattern.length
  kmp_table(prefix, pattern)
  let i = 0
  let j = 0
  const ans: number[] = []
  while (i < m) {
    if (j === n - 1 && text[i] === pattern[j]) {
      ans.push(i - j)
      // 如果只要最前面的一个直接 return 就行了
      j = prefix[j]
    }
    if (text[i] === pattern[j]) {
      i++
      j++
    } else {
      j = prefix[j]
      if (j === 0 && prefix[j] === 0) {
        i++
      }
    }
  }
  // 返回能匹配的索引数组
  return ans
}
