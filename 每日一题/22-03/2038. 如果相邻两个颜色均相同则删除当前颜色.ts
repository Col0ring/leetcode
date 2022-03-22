export function winnerOfGame(colors: string): boolean {
  const freq = [0, 0]
  let cur = 'C'
  let cnt = 0
  for (let i = 0; i < colors.length; i++) {
    const c = colors[i]
    if (c !== cur) {
      cur = c
      cnt = 1
    } else {
      cnt += 1
      if (cnt >= 3) {
        freq[cur.charCodeAt(0) - 'A'.charCodeAt(0)] += 1
      }
    }
  }
  return freq[0] > freq[1]
}
