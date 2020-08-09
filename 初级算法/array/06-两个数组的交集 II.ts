function intersect(nums1: number[], nums2: number[]): number[] {
  const mapHelper: any = {}
  const res: number[] = []
  for (const num1 of nums1) {
    // 遍历出现次数
    if (mapHelper[num1]) {
      mapHelper[num1]++
    } else {
      mapHelper[num1] = 1
    }
  }
  for (const num2 of nums2) {
    const count = mapHelper[num2]
    if (count) {
      res.push(num2)
      mapHelper[num2]--
    }
  }
  return res
}

// 如果事先排好序考虑双指针
