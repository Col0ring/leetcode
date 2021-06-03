// 1 的数量减去 0 的数量等于 0
function findMaxLength(nums: number[]): number {
  let maxLength = 0
  const map = new Map<number, number>()
  // 把 0 看做 -1
  let counter = 0
  map.set(counter, -1)
  const n = nums.length
  // 计数
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (num === 1) {
      counter++
    } else {
      counter--
    }
    // 如果已存在，证明之前到最开始某个地方都有相同的 0 和 1，不然不会回到原点
    if (map.has(counter)) {
      // 拿到最开始之前的索引
      const prevIndex = map.get(counter)!
      maxLength = Math.max(maxLength, i - prevIndex)
    } else {
      map.set(counter, i)
    }
  }
  return maxLength
}
