// export function intersection(nums1: number[], nums2: number[]): number[] {
//   const ans: number[] = []
//   const setHelper = new Set<number>()
//   for (let i = 0; i < nums1.length; i++) {
//     setHelper.add(nums1[i])
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (setHelper.has(nums2[i])) {
//       ans.push(nums2[i])
//       setHelper.delete(nums2[i])
//     }
//   }
//   return ans
// }

export function intersection(nums1: number[], nums2: number[]): number[] {
  const mapHelper: { [key: string]: boolean } = {}
  const res: number[] = []
  for (const num1 of nums1) {
    // 遍历出现次数
    mapHelper[num1] = true
  }
  for (const num2 of nums2) {
    const hasNumber = mapHelper[num2]
    if (hasNumber) {
      res.push(num2)
      mapHelper[num2] = false
    }
  }
  return res
}
