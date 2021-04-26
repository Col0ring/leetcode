// 二分
export function shipWithinDays(weights: number[], D: number): number {
  // 确定二分查找左右边界
  let left = Math.max(...weights),
    right = weights.reduce((a, b) => a + b)
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    //  need 为需要运送的天数
    // cur 为当前这一天已经运送的包裹重量之和
    let need = 1,
      cur = 0
    for (const weight of weights) {
      if (cur + weight > mid) {
        need++
        cur = 0
      }
      cur += weight
    }

    if (need <= D) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
