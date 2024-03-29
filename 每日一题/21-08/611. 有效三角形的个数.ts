// 二分
export function triangleNumber(nums: number[]): number {
  const n = nums.length
  nums.sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let left = j + 1,
        right = n - 1,
        k = j
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[i] + nums[j]) {
          k = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      ans += k - j
    }
  }
  return ans
}
