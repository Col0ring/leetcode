export function numberOfWeakCharacters(properties: number[][]): number {
  properties.sort((o1, o2) => {
    return o1[0] === o2[0] ? o1[1] - o2[1] : o2[0] - o1[0]
  })
  let maxDef = 0
  let ans = 0
  for (const p of properties) {
    if (p[1] < maxDef) {
      ans++
    } else {
      maxDef = p[1]
    }
  }
  return ans
}
