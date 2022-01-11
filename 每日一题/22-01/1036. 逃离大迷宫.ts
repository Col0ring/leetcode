enum Status {
  BLOCKED = -1,
  VALID = 0,
  FOUND = 1
}

const dirs: number[][] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]
const BOUNDARY = 1000000

export function isEscapePossible(
  blocked: number[][],
  source: number[],
  target: number[]
): boolean {
  if (blocked.length < 2) {
    return true
  }

  const hashBlocked = new Set<string>()
  for (const pos of blocked) {
    hashBlocked.add([pos[0], pos[1]].toString())
  }

  let result = check(blocked, source, target, hashBlocked)
  if (result === Status.FOUND) {
    return true
  } else if (result === Status.BLOCKED) {
    return false
  } else {
    result = check(blocked, target, source, hashBlocked)
    return result !== Status.BLOCKED
  }
}

const check = (
  blocked: number[][],
  start: number[],
  finish: number[],
  hashBlocked: Set<string>
) => {
  const sx = start[0],
    sy = start[1]
  const fx = finish[0],
    fy = finish[1]
  let countdown = Math.floor((blocked.length * (blocked.length - 1)) / 2)
  const startPair = [sx, sy]
  const queue: number[][] = []
  queue.push(startPair)
  const visited = new Set<string>()
  visited.add(startPair.toString())
  while (queue.length && countdown > 0) {
    const [x, y] = queue.shift()!
    for (let d = 0; d < 4; ++d) {
      const nx = x + dirs[d][0],
        ny = y + dirs[d][1]
      const newPair = [nx, ny]
      if (
        nx >= 0 &&
        nx < BOUNDARY &&
        ny >= 0 &&
        ny < BOUNDARY &&
        !hashBlocked.has(newPair.toString()) &&
        !visited.has(newPair.toString())
      ) {
        if (nx === fx && ny === fy) {
          return Status.FOUND
        }
        --countdown
        queue.push(newPair)
        visited.add(newPair.toString())
      }
    }
  }
  if (countdown > 0) {
    return Status.BLOCKED
  }
  return Status.VALID
}
