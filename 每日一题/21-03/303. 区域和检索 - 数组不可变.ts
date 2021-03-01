export class NumArray {
  sums: number[]
  constructor(nums: number[]) {
    const n = nums.length
    this.sums = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i]
    }
  }

  sumRange(i: number, j: number): number {
    return this.sums[j + 1] - this.sums[i]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
