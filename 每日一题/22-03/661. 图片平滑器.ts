export function imageSmoother(img: number[][]): number[][] {
  const m = img.length,
    n = img[0].length
  const ret: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = 0,
        sum = 0
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < m && y >= 0 && y < n) {
            num++
            sum += img[x][y]
          }
        }
      }
      ret[i][j] = Math.floor(sum / num)
    }
  }
  return ret
}
