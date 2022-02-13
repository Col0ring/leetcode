export function maxNumberOfBalloons(text: string): number {
  const cnt: number[] = new Array(5).fill(0)
  for (const ch of text) {
    if (ch === 'b') {
      cnt[0]++
    } else if (ch === 'a') {
      cnt[1]++
    } else if (ch === 'l') {
      cnt[2]++
    } else if (ch === 'o') {
      cnt[3]++
    } else if (ch === 'n') {
      cnt[4]++
    }
  }
  cnt[2] = Math.floor(cnt[2] / 2)
  cnt[3] = Math.floor(cnt[3] / 2)
  return Math.min(...cnt)
}
