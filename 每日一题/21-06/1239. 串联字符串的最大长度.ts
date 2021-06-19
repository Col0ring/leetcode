// 回溯 + 位运算
export function maxLength(arr: string[]): number {
  let ans = 0
  const masks: number[] = []
  for (const s of arr) {
    let mask = 0
    for (let i = 0; i < s.length; ++i) {
      const ch = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
      if (((mask >> ch) & 1) !== 0) {
        // 若 mask 已有 ch，则说明 s 含有重复字母，无法构成可行解
        mask = 0
        break
      }
      mask |= 1 << ch // 将 ch 加入 mask 中
    }
    if (mask > 0) {
      masks.push(mask)
    }
  }

  const backtrack = (masks: number[], pos: number, mask: number) => {
    if (pos === masks.length) {
      ans = Math.max(ans, mask.toString(2).split('0').join('').length)
      return
    }
    if ((mask & masks[pos]) === 0) {
      // mask 和 masks[pos] 无公共元素
      backtrack(masks, pos + 1, mask | masks[pos])
    }
    backtrack(masks, pos + 1, mask)
  }

  backtrack(masks, 0, 0)
  return ans
}
