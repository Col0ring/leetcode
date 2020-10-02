// export function numJewelsInStones(J: string, S: string): number {
//   let ans = 0
//   for (let i = 0; i < S.length; i++) {
//     if (J.indexOf(S[i]) !== -1) {
//       ans++
//     }
//   }
//   return ans
// }

// 哈希
export function numJewelsInStones(J: string, S: string): number {
  const mapHelper = new Map<string, boolean>()
  for (let i of J) {
    mapHelper.set(i, true)
  }
  let ans = 0
  for (let i of S) {
    if (mapHelper.has(i)) {
      ans++
    }
  }
  return ans
}
