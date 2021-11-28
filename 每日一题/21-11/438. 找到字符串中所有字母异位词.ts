export function findAnagrams(s: string, p: string): number[] {
  // 异位词，不考虑顺序，将字母统计次数即可。
  // 滑动窗口，map存储，每次移动时删去前一位，加入后一位
  const map1: Map<string, number> = new Map()
  const map2: Map<string, number> = new Map()
  const len1: number = s.length,
    len2: number = p.length
  // map2存储子串信息
  for (let z = 0; z < len2; z++) {
    map2.set(p[z], map2.has(p[z]) ? map2.get(p[z])! + 1 : 1)
  }
  const map2Iter = map2.entries()
  // 初始化滑动窗口的值。这个 len 是 len2
  for (let z = 0; z < len2; z++) {
    map1.set(s[z], map1.has(s[z]) ? map1.get(s[z])! + 1 : 1)
  }
  const resArr: number[] = new Array()
  // 左区间
  let left = 0,
    // 右区间
    right = len2 - 1
  while (right < len1) {
    let flag = true
    // 如果发现 key 的值不对，证明不是相同的
    for (let [key, value] of map2Iter) {
      if (map1.get(key) !== value) {
        flag = false
        break
      }
    }
    if (flag) {
      resArr.push(left)
    }
    // 移动时删除前一位，加入后一位
    map1.set(s[left], map1.get(s[left])! - 1)
    left++
    right++
    if (right < len1) {
      map1.set(s[right], map1.get(s[right]) ? map1.get(s[right])! + 1 : 1)
    }
  }
  return resArr
}
