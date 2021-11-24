export function originalDigits(s: string): string {
  const c = new Map<string, number>()
  for (const ch of s) {
    c.set(ch, (c.get(ch) || 0) + 1)
  }

  const cnt: number[] = new Array(10).fill(0)
  cnt[0] = c.get('z') || 0
  cnt[2] = c.get('w') || 0
  cnt[4] = c.get('u') || 0
  cnt[6] = c.get('x') || 0
  cnt[8] = c.get('g') || 0

  cnt[3] = (c.get('h') || 0) - cnt[8]
  cnt[5] = (c.get('f') || 0) - cnt[4]
  cnt[7] = (c.get('s') || 0) - cnt[6]

  cnt[1] = (c.get('o') || 0) - cnt[0] - cnt[2] - cnt[4]

  cnt[9] = (c.get('i') || 0) - cnt[5] - cnt[6] - cnt[8]

  const ans: string[] = []
  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < cnt[i]; ++j) {
      ans.push(String.fromCharCode(i + '0'.charCodeAt(0)))
    }
  }
  return ans.join('')
}
