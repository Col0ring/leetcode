// 贪心算法 + 双指针
export function partitionLabels(S: string): number[] {
  // 先变成数组
  const s = S.split(''),
    d = new Map(s.map((v, k) => [v, k])),
    ans: number[] = []
  let l = -1,
    r = 0
  s.forEach((c, i) => {
    // 获取到最右边的位置
    r = Math.max(r, d.get(c)!)
    // 当前索引为最终索引时证明到了最后
    if (i === r) {
      ans.push(r - l)
      l = i
    }
  })
  return ans
}
