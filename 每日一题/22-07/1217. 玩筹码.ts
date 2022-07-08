export function minCostToMoveChips(position: number[]): number {
  let even = 0,
    odd = 0
  for (const pos of position) {
    if ((pos & 1) !== 0) {
      odd++
    } else {
      even++
    }
  }
  return Math.min(odd, even)
}
