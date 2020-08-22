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
