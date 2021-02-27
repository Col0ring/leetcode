// 分治
export function longestSubstring(s: string, k: number): number {
  const n = s.length
  return dfs(s, 0, n - 1, k)
}

const dfs = (s: string, l: number, r: number, k: number) => {
  const cnt = new Array(26).fill(0)
  for (let i = l; i <= r; i++) {
    cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  let split = ''
  for (let i = 0; i < 26; i++) {
    if (cnt[i] > 0 && cnt[i] < k) {
      split = String.fromCharCode(i + 'a'.charCodeAt(0))
      break
    }
  }
  if (!split) {
    return r - l + 1
  }

  let i = l
  let ret = 0
  while (i <= r) {
    while (i <= r && s[i] === split) {
      i++
    }
    if (i > r) {
      break
    }
    let start = i
    while (i <= r && s[i] !== split) {
      i++
    }

    const length = dfs(s, start, i - 1, k)
    ret = Math.max(ret, length)
  }
  return ret
}
