export function summaryRanges(nums: number[]): string[] {
  const ret: string[] = []
  let i = 0
  const n = nums.length
  while (i < n) {
    const low = i
    i++
    while (i < n && nums[i] === nums[i - 1] + 1) {
      i++
    }
    const high = i - 1
    const temp = ['' + nums[low]]
    if (low < high) {
      temp.push('->')
      temp.push('' + nums[high])
    }
    ret.push(temp.join(''))
  }
  return ret
}
