export function constructRectangle(area: number): number[] {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) {
    --w
  }
  return [Math.floor(area / w), w]
}
