function isLongPressedName(name: string, typed: string): boolean {
  const n = name.length,
    m = typed.length
  let i = 0,
    j = 0
  while (j < m) {
    if (i < n && name[i] === typed[j]) {
      i++
      j++
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++
    } else {
      return false
    }
  }
  return i === n
}
