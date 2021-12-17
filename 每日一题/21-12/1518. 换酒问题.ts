export function numWaterBottles(
  numBottles: number,
  numExchange: number
): number {
  let bottle = numBottles,
    ans = numBottles
  while (bottle >= numExchange) {
    bottle -= numExchange
    ++ans
    ++bottle
  }
  return ans
}
