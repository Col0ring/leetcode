export function majorityElement(nums: number[]): number[] {
  const cnt = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (cnt.has(nums[i])) {
      cnt.set(nums[i], cnt.get(nums[i])! + 1)
    } else {
      cnt.set(nums[i], 1)
    }
  }
  const ans: number[] = []
  for (const x of cnt.keys()) {
    if (cnt.get(x)! > Math.floor(nums.length / 3)) {
      ans.push(x)
    }
  }

  return ans
}
