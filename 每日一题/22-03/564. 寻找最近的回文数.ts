export function nearestPalindromic(n: string): string {
  // 特殊情况
  if (n.length === 1) {
    return (Number.parseInt(n) - 1).toString()
  }
  const len = n.length
  // 把 n 分成两部分，只看左半部分
  const left = Number.parseInt(n.slice(0, (len + 1) / 2))
  // 回文性质，只要看 left + 1，left，left - 1
  const arr: string[] = new Array(5)
  const reverse = (s: string, f: number): string => {
    // 如果是 n 长度为奇数，需要扔到中间的一个
    return s.split('').reverse().join('').slice(f)
  }
  for (let i = left - 1; i <= left + 1; i++) {
    const s = i.toString()
    arr[i - left + 2] = s + reverse(s, len % 2)
  }
  // 还有特殊情况，即 left 变化后，长度也变（如 10 -> 9，或 9 -> 10），如果长度变化了，那么其实最优解应该是 99..99 或 10..01
  arr[0] = '9'.repeat(len - 1)
  arr[4] = '1' + '0'.repeat(len - 1) + '1'
  // 最后比较谁离 n 更近
  const getAbs = (s: string): number => {
    if (!s || s === n || s.startsWith('0')) {
      return Number.MAX_VALUE
    }
    const num = Number.parseInt(n),
      numS = Number.parseInt(s)
    return Math.abs(num - numS)
  }
  return arr.reduce((acc, cur) => (getAbs(cur) < getAbs(acc) ? cur : acc))
}
