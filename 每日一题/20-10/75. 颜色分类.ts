/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  // 对于所有 idx < i : nums[idx < i] = 0
  // j是当前考虑元素的下标
  let p0 = 0,
    curr = 0
  // 对于所有 idx > k : nums[idx > k] = 2
  let p2 = nums.length - 1

  while (curr <= p2) {
    if (nums[curr] === 0) {
      // 交换第 p0个和第curr个元素
      // i++，j++
      const tmp = nums[p0]
      nums[p0++] = nums[curr]
      nums[curr++] = tmp
    } else if (nums[curr] === 2) {
      // 交换第k个和第curr个元素
      // p2--
      const tmp = nums[curr]
      // 因为是从后面过来，所以curr不++，还要把当前和后面比较
      nums[curr] = nums[p2]
      nums[p2--] = tmp
    } else {
      curr++
    }
  }
}

// 两次遍历可以先记录每个出现的次数，再进行赋值
