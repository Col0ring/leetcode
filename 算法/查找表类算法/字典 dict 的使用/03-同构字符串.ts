// export function isIsomorphic(s: string, t: string): boolean {
//   // 因为 s 和 t 是同等长度的
//   for (let i = 0; i < s.length; i++) {
//     // 如果是相同的会取前面一个，这样可以判断对应
//     if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
//       return false
//     }
//   }
//   return true
// }
// hash
export function isIsomorphic(s: string, t: string): boolean {
  // 因为 s 和 t 是同等长度的
  const helper = (s: string, t: string) => {
    const mapHelper = new Map<string, string>()
    for (let i = 0; i < s.length; i++) {
      const c1 = s[i]
      const c2 = t[i]
      if (mapHelper.has(c1)) {
        if (mapHelper.get(c1) !== c2) {
          return false
        }
      } else {
        mapHelper.set(c1, c2)
      }
    }
    return true
  }
  // 要进行双向映射，因为是一对多的关系，反过来也要成立才行
  return helper(s, t) && helper(t, s)
}
