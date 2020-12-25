export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const numOfChildren = g.length,
    numOfCookies = s.length
  let count = 0
  for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
      j++
    }
    if (j < numOfCookies) {
      count++
    }
  }
  return count
}
