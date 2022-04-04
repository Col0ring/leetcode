// 分块
export class NumArray {
  nums: number[]
  len: number
  size: number
  chunk: number[]

  constructor(nums: number[]) {
    this.nums = nums
    const len = nums.length
    this.len = Math.floor(Math.sqrt(len))
    this.size = Math.ceil(len / this.len)
    this.chunk = new Array(this.size).fill(0)

    for (let i = 0; i < this.size; i++) {
      let arr = this.nums.slice(i * this.len, (i + 1) * this.len)
      this.chunk[i] = arr.reduce((sum, v) => sum + v, 0)
    }
  }

  update(index: number, val: number): void {
    let i = Math.floor(index / this.len)
    this.chunk[i] += val - this.nums[index]
    this.nums[index] = val
  }

  sumRange(left: number, right: number): number {
    let l = Math.floor(left / this.len)
    let r = Math.floor(right / this.len)

    if (l === r || r - l === 1) {
      return this.sum(this.nums.slice(left, right + 1))
    }

    let chunkSum: number = 0
    let lArr = this.nums.slice(
      left,
      (Math.floor(left / this.len) + 1) * this.len
    )
    let rArr = this.nums.slice(
      Math.floor(right / this.len) * this.len,
      right + 1
    )

    for (
      let i = Math.floor(left / this.len) + 1;
      i < Math.floor(right / this.len);
      i++
    ) {
      chunkSum += this.chunk[i]
    }

    return this.sum(lArr) + chunkSum + this.sum(rArr)
  }

  sum(arr: number[]): number {
    if (arr.length === 0) return 0
    return arr.reduce((sum, v) => sum + v, 0)
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
