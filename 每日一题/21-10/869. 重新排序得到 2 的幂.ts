export function reorderedPowerOf2(n: number): boolean {
  const backtrack = (nums: string[], idx: number, num: number) => {
    if (idx === nums.length) {
      return isPowerOfTwo(num)
    }
    for (let i = 0; i < nums.length; ++i) {
      // 不能有前导零
      if (
        (num === 0 && nums[i] === '0') ||
        vis[i] ||
        (i > 0 && !vis[i - 1] && nums[i] === nums[i - 1])
      ) {
        continue
      }
      vis[i] = true
      if (
        backtrack(
          nums,
          idx + 1,
          num * 10 + nums[i].charCodeAt(0) - '0'.charCodeAt(0)
        )
      ) {
        return true
      }
      vis[i] = false
    }
    return false
  }

  const nums = Array.from('' + n)
  nums.sort()
  const vis = new Array(nums.length).fill(false)
  return backtrack(nums, 0, 0)
}

const isPowerOfTwo = (n: number) => {
  return (n & (n - 1)) === 0
}
