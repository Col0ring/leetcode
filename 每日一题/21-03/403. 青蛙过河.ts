// 记忆化搜索
export function canCross(stones: number[]): boolean {
  return helper(stones, 0, 0, new Set<number>())
}
function helper(stones: number[], index: number, k: number, set: Set<number>) {
  const key = index * 1000 + k
  if (set.has(key)) {
    return false
  } else {
    set.add(key)
  }
  for (let i = index + 1; i < stones.length; i++) {
    const gap = stones[i] - stones[index]
    if (gap >= k - 1 && gap <= k + 1) {
      if (helper(stones, i, gap, set)) {
        return true
      }
    } else if (gap > k + 1) {
      break
    }
  }
  return index == stones.length - 1
}
