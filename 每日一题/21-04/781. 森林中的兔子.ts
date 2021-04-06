// 贪心
//export function numRabbits(answers: number[]): number {
//     const count = new Map<number, number>();
//     for (const y of answers) {
//         count.set(y, (count.get(y) || 0) + 1);
//     }
//     let ans = 0;
//     for (const [y, x] of count.entries()) {
//         // 依据每一个的贪心 x 只兔子回答 y
//         ans += Math.floor((x + y) / (y + 1)) * (y + 1);
//     }
//     return ans;
// };

export function numRabbits(answers: number[]): number {
  const map: Record<string, number> = {}
  let ans = 0
  for (const a of answers) {
    if (map[a]) {
      map[a]--
    } else {
      ans += a + 1
      map[a] = a
    }
  }
  return ans
}
