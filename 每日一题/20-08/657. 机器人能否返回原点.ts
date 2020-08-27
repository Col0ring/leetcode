export function judgeCircle(moves: string): boolean {
  let ans = false
  const mapHelper: { [key: string]: number } = {}
  for (let i = 0; i < moves.length; i++) {
    if (mapHelper[moves[i]]) {
      mapHelper[moves[i]]++
    } else {
      mapHelper[moves[i]] = 1
    }
  }
  if (mapHelper['U'] === mapHelper['D'] && mapHelper['L'] === mapHelper['R']) {
    ans = true
  }
  return ans
}
