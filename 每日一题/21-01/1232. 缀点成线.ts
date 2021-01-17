export function checkStraightLine(coordinates: number[][]): boolean {
  const deltaX = coordinates[0][0],
    deltaY = coordinates[0][1]
  const n = coordinates.length
  for (let i = 0; i < n; i++) {
    coordinates[i][0] -= deltaX
    coordinates[i][1] -= deltaY
  }
  const A = coordinates[1][1],
    B = -coordinates[1][0]
  for (let i = 2; i < n; i++) {
    const [x, y] = [coordinates[i][0], coordinates[i][1]]
    if (A * x + B * y !== 0) {
      return false
    }
  }
  return true
}
