// 暴力搜索
export function containsNearbyAlmostDuplicate(
  nums: number[],
  k: number,
  t: number
): boolean {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(j - i) <= k) {
        if (Math.abs(nums[j] - nums[i]) <= t) {
          return true
        }
      } else {
        break
      }
    }
  }
  return false
}

// 二叉搜索树
