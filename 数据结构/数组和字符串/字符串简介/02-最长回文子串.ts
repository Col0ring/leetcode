function longestPalindrome(s: string): string {
  const len = s.length
  if (!len || len === 1) {
    return s
  }
  let dp: boolean[][] = []
  let ans = ''
  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = len - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = true
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
      }
      if (dp[i][j] && j - i + 1 >= ans.length) {
        // update res
        ans = s.slice(i, j + 1)
      }
    }
  }
  return ans
}
