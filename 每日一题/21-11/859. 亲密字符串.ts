export function buddyStrings(s: string, goal: string): boolean {
  // 长度不一致直接返回 false
  if (s.length != goal.length) {
    return false
  }

  if (s === goal) {
    // 存放 26 个字母
    const map: Record<string, number> = {}
    for (let i = 0; i < s.length; i++) {
      map[s[i]] = (map[s[i]] || 0) + 1
      // 是否有两个一样的字符，这样可以这两个交换位置
      if (map[s[i]] > 1) {
        return true
      }
    }
    return false
  } else {
    let first = -1,
      second = -1
    for (let i = 0; i < s.length; i++) {
      // 如果当前字符不同
      if (s[i] !== goal[i]) {
        // 第一个不同字符的位置
        if (first === -1) {
          first = i
          // 第二个不同字符的位置
        } else if (second === -1) {
          second = i
        } else {
          // 不同有第三个
          return false
        }
      }
    }

    // 必须有第二个字符，并且第一个和第二个字符刚好相反
    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    )
  }
}
