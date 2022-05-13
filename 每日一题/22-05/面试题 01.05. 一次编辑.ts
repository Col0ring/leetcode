export function oneEditAway(first: string, second: string): boolean {
  const len1 = first.length
  const len2 = second.length
  const diff = len1 - len2
  if (Math.abs(diff) > 1) {
    return false
  }
  let flag = false
  for (let i = 0, j = 0; i < len1 && j < len2; i++, j++) {
    if (first[i] !== second[j]) {
      if (flag) {
        return false
      }
      flag = true
      if (diff !== 0) {
        diff > 0 ? j-- : i--
      }
    }
  }
  return true
}
