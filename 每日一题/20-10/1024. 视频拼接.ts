// dp
export function videoStitching(clips: number[][], T: number): number {
  const dp: number[] = new Array(T + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i = 1; i <= T; i++) {
    for (const clip of clips) {
      // 切成 i 份的最小片段
      if (clip[0] < i && i <= clip[1]) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1)
      }
    }
  }
  return dp[T] === Number.MAX_SAFE_INTEGER ? -1 : dp[T]
}
