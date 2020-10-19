function backspaceCompare(S: string, T: string): boolean {
  let i = S.length - 1,
    j = T.length - 1
  let sc = 0,
    tc = 0
  while (i >= 0 || j >= 0) {
    while (S[i] === '#') sc++, i--
    while (T[j] === '#') tc++, j--

    while (sc && S[i] !== '#') sc--, i--
    while (tc && T[j] !== '#') tc--, j--

    if (S[i] !== '#' && T[j] !== '#') {
      // 当两个都不是 #
      if (S[i] !== T[j]) return false
      i--
      j--
    }
  }
  return true
}
