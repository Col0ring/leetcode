// 数学
export function pathInZigZagTree(label: number): number[] {
  const ans: number[] = []
  let level = 1
  let n = label
  while (n >= 2) {
    level++
    n /= 2
  }
  n = label
  while (level > 0) {
    ans.push(n)
    level--
    n = 2 ** (level - 1) + 2 ** level - 1 - Math.floor(n / 2)
  }
  return ans.reverse()
}
