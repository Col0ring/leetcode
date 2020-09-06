// export function topKFrequent(nums: number[], k: number): number[] {
//   const mapHelper: { [key: string]: number } = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (mapHelper[nums[i]]) {
//       mapHelper[nums[i]]++
//     } else {
//       mapHelper[nums[i]] = 1
//     }
//   }
//   const arr = Object.keys(mapHelper).map((key) => ({
//     value: mapHelper[key],
//     key: +key
//   }))
//   arr.sort((a, b) => a.value - b.value)
//   return arr.map((item) => item.key).slice(0, k)
// }

// 桶排序
export function topKFrequent(nums: number[], k: number): number[] {
  const mapHelper: { [key: string]: number } = {}
  for (let i = 0; i < nums.length; i++) {
    if (mapHelper[nums[i]]) {
      mapHelper[nums[i]]++
    } else {
      mapHelper[nums[i]] = 1
    }
  }
  const arr: number[][] = []
  // 直接在确定位置赋值
  Object.keys(mapHelper).forEach((key) => {
    arr[mapHelper[key]]
      ? arr[mapHelper[key]].push(+key)
      : (arr[mapHelper[key]] = [+key])
  })
  const ans: number[] = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      ans.push(...arr[i])
      if (ans.length === k) {
        break
      }
    }
  }
  return ans
}
