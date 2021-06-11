// 贪心
export function numSquares(n: number): number {
  //把平方集合求出
  let sqLists = new Set<number>()
  for (let i = 1; i * i <= n; i++) {
    sqLists.add(i * i)
  }
  //根据定律，一个数都能表示成四个数的平方数之和
  //所以count值1,2,3,4这四种情况
  //状态有限用贪心，状态无限用动态规划

  /**
   * 贪心算法判断梳子number是否可以划分为count个数
   */
  const isCanDivide = (number: number, count: number) => {
    if (count === 1) {
      return sqLists.has(number)
    }
    // 一直到最后一个数
    for (let s of sqLists) {
      if (isCanDivide(number - s, count - 1)) {
        return true
      }
    }
    return false
  }
  //count最大就是4
  let count = 1
  for (; count <= 4; count++) {
    if (isCanDivide(n, count)) {
      return count
    }
  }
  return count
}
