export function calPoints(ops: string[]): number {
  let ret = 0
  const points: number[] = []
  for (const op of ops) {
    const n = points.length
    switch (op[0]) {
      case '+':
        ret += points[n - 1] + points[n - 2]
        points.push(points[n - 1] + points[n - 2])
        break
      case 'D':
        ret += 2 * points[n - 1]
        points.push(2 * points[n - 1])
        break
      case 'C':
        ret -= points[n - 1]
        points.pop()
        break
      default:
        ret += parseInt(op)
        points.push(parseInt(op))
        break
    }
  }
  return ret
}
