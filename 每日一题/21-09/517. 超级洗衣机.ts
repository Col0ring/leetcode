export function findMinMoves(machines: number[]): number {
  const tot = machines.reduce((prev, next) => prev + next, 0)
  const n = machines.length
  if (tot % n !== 0) {
    return -1
  }
  let avg = Math.floor(tot / n)
  let ans = 0,
    sum = 0
  for (let num of machines) {
    num -= avg
    sum += num
    ans = Math.max(ans, Math.max(Math.abs(sum), num))
  }
  return ans
}
