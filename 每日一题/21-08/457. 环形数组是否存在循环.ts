export function circularArrayLoop(nums: number[]): boolean {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue
    }
    let slow = i,
      fast = next(nums, i)
    // 判断非零且方向相同
    while (
      nums[slow] * nums[fast] > 0 &&
      nums[slow] * nums[next(nums, fast)] > 0
    ) {
      if (slow === fast) {
        if (slow !== next(nums, slow)) {
          return true
        } else {
          break
        }
      }
      slow = next(nums, slow)
      fast = next(nums, next(nums, fast))
    }
    let add = i
    while (nums[add] * nums[next(nums, add)] > 0) {
      const tmp = add
      add = next(nums, add)
      nums[tmp] = 0
    }
  }
  return false
}

const next = (nums: number[], cur: number) => {
  const n = nums.length
  return (((cur + nums[cur]) % n) + n) % n // 保证返回值在 [0,n) 中
}
