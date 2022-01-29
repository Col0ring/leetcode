export function highestPeak(isWater: number[][]): number[][] {
  let m = isWater.length,
    n = isWater[0].length
  let offer: number[][] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        isWater[i][j] = 0
        offer.push([i, j])
      } else {
        isWater[i][j] = -1
      }
    }
  }

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  while (offer.length) {
    const len = offer.length
    const newOffer: number[][] = []
    for (let idx = 0; idx < len; idx++) {
      let [i, j] = offer[idx]
      for (let [r, c] of dirs) {
        let nx = i + r,
          ny = j + c

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || isWater[nx][ny] !== -1) {
          continue
        }
        isWater[nx][ny] = isWater[i][j] + 1
        newOffer.push([nx, ny])
      }
    }
    offer = newOffer
  }

  return isWater
}
