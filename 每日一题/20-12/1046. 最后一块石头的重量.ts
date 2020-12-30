export function lastStoneWeight(stones: number[]): number {
  let len = stones.length
  let r = len === 1 ? stones[0] : 0
  while (len >= 2) {
    stones.sort((a, b) => b - a)
    const [a, b] = stones.splice(0, 2)
    if (a !== b) {
      stones.push(a - b)
    }
    len = stones.length
    r = stones[0] || 0
  }
  return r
}
