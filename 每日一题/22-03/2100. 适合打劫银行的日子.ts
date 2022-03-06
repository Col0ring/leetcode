export function goodDaysToRobBank(security: number[], time: number): number[] {
  const n = security.length
  const left: number[] = new Array(n).fill(0)
  const right: number[] = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1
    }
    if (security[n - i - 1] <= security[n - i]) {
      right[n - i - 1] = right[n - i] + 1
    }
  }

  const ans = []
  for (let i = time; i < n - time; i++) {
    if (left[i] >= time && right[i] >= time) {
      ans.push(i)
    }
  }
  return ans
}
