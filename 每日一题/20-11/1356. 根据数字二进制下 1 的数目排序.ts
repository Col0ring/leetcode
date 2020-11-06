// 排序
export function sortByBits(arr: number[]): number[] {
  // 缓存
  const map: Record<string, number> = {}
  const countBinOne = (num: number): number => {
    if (map[num]) {
      return map[num]
    }
    // 转换为二进制
    const binStr = num.toString(2)
    const res = binStr.replace(/0/g, '').length
    map[num] = res
    return res
  }

  return arr.sort((a, b) => countBinOne(a) - countBinOne(b) || a - b)
}
