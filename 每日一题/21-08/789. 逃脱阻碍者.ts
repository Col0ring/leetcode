export function escapeGhosts(ghosts: number[][], target: number[]): boolean {
  const source = [0, 0]
  const distance = manhattanDistance(source, target)
  for (const ghost of ghosts) {
    const ghostDistance = manhattanDistance(ghost, target)
    if (ghostDistance <= distance) {
      return false
    }
  }
  return true
}

const manhattanDistance = (point1: number[], point2: number[]) => {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
}
