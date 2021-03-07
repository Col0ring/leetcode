// 回溯 - 记忆存储
export function partition(s: string): string[][] {
  const n = s.length
  const ret: string[][] = []
  const ans: string[] = []
  const f: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))

  const dfs = (i: number) => {
    if (i === n) {
      ret.push(ans.slice())
      return
    }
    for (let j = i; j < n; ++j) {
      if (isPalindrome(i, j) === 1) {
        ans.push(s.slice(i, j + 1))
        dfs(j + 1)
        ans.pop()
      }
    }
  }

  // 记忆化搜索中，f[i][j] = 0 表示未搜索，1 表示是回文串，-1 表示不是回文串
  const isPalindrome = (i: number, j: number) => {
    if (f[i][j] !== 0) {
      return f[i][j]
    }
    if (i >= j) {
      f[i][j] = 1
    } else if (s[i] === s[j]) {
      f[i][j] = isPalindrome(i + 1, j - 1)
    } else {
      f[i][j] = -1
    }
    return f[i][j]
  }

  dfs(0)
  return ret
}
