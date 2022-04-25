export class Solution {
  pos = new Map<number, number[]>()
  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; ++i) {
      if (!this.pos.has(nums[i])) {
        this.pos.set(nums[i], [])
      }

      this.pos.get(nums[i])!.push(i)
    }
  }

  pick(target: number): number {
    const indices = this.pos.get(target)!
    return indices[Math.floor(Math.random() * indices.length)]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
