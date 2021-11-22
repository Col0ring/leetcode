export class Solution {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  reset(): number[] {
    return this.nums
  }

  shuffle(): number[] {
    let numbers = [...this.nums]
    for (let i = 1; i < numbers.length; i++) {
      let index = Math.floor(Math.random() * (i + 1))
      ;[numbers[i], numbers[index]] = [numbers[index], numbers[i]]
    }
    return numbers
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
