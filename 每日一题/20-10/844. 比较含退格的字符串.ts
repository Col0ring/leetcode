// 栈
function backspaceCompare(S: string, T: string): boolean {
  const SArr: string[] = []
  const TArr: string[] = []
  let lenS = 0
  let lenT = 0
  while (lenS < S.length || lenT < T.length) {
    if (lenS !== S.length) {
      if (S[lenS] === '#') {
        SArr.pop()
      } else {
        SArr.push(S[lenS])
      }

      lenS++
    }

    if (lenT !== T.length) {
      if (T[lenT] === '#') {
        TArr.pop()
      } else {
        TArr.push(T[lenT])
      }
      lenT++
    }
  }
  return SArr.join() === TArr.join()
}
