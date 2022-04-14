// 排序 + 双指针
export function threeSum(nums: number[]): number[][] {
  const n = nums.length
  if (n < 3) {
    return []
  }
  // 如何不重复。需要先排好序
  nums.sort((a, b) => a - b)
  const ans: number[][] = []
  for (let i = 0; i < nums.length - 2; i++) {
    // O(n^2)
    if (nums[i] > 0) break // 第一个数大于 0，后面的数都比它大，肯定不成立了
    if (i > 0 && nums[i] === nums[i - 1]) continue // 去掉重复情况
    const target = -nums[i]
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        ans.push([nums[i], nums[left], nums[right]])

        // 现在要增加 left，减小 right，但是不能重复，比如: [-2, -1, -1, -1, 3, 3, 3], i = 0, left = 1, right = 6, [-2, -1, 3] 的答案加入后，需要排除重复的 -1 和 3
        left++
        right-- // 首先无论如何先要进行加减操作
        while (left < right && nums[left] == nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] == nums[right + 1]) {
          right--
        }
      } else if (nums[left] + nums[right] < target) {
        left++
      } else {
        // nums[left] + nums[right] > target
        right--
      }
    }
  }
  return ans
}
