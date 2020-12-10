// 二分
// export function findDuplicate(nums: number[]): number {
//   const n = nums.length
//   let l = 1,
//     r = n - 1,
//     ans = -1
//   while (l <= r) {
//     let mid = (l + r) >> 1
//     let cnt = 0
//     for (let i = 0; i < n; ++i) {
//       cnt += nums[i] <= mid ? 1 : 0
//     }
//     if (cnt <= mid) {
//       l = mid + 1
//     } else {
//       r = mid - 1
//       ans = mid
//     }
//   }
//   return ans
// }

// 快慢指针
export function findDuplicate(nums: number[]): number {
  let slow = 0,
    fast = 0

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow != fast)
  slow = 0
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}
