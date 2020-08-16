export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const dx = [1, 0, 0, -1]
  const dy = [0, 1, -1, 0]
  const dfs = (x: number, y: number, color: number, newColor: number) => {
    if (image[x][y] === color) {
      image[x][y] = newColor
      for (let i = 0; i < 4; i++) {
        const mx = x + dx[i],
          my = y + dy[i]
        if (mx >= 0 && mx < image.length && my >= 0 && my < image[0].length) {
          dfs(mx, my, color, newColor)
        }
      }
    }
  }
  let currentColor = image[sr][sc]
  if (currentColor !== newColor) {
    dfs(sr, sc, currentColor, newColor)
  }
  return image
}
