export function distributeCandies(candyType: number[]): number {
  const set = new Set(candyType)
  return Math.min(set.size, candyType.length / 2)
}
