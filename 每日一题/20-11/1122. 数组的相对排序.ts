// 计数排序
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const ans: number[] = []
  const len = 1001
  const mapHelper: Record<string, number> = {}
  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i]
    if (mapHelper[num]) {
      mapHelper[num]++
    } else {
      mapHelper[num] = 1
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i]
    while (mapHelper[num]) {
      ans.push(num)
      mapHelper[num]--
    }
  }
  const more: number[] = []
  const keys = Object.keys(mapHelper)
  for (const key of keys) {
    while (mapHelper[key]) {
      more.push(+key)
      mapHelper[key]--
    }
  }

  more.sort((a, b) => a - b)

  // 因为值最大为 1000，这里从小到大判断
  //   for (let i = 0; i < len; i++) {
  //     while (mapHelper[i]) {
  //       ans.push(i)
  //       mapHelper[i]--
  //     }
  //   }

  return ans.concat(more)
}
