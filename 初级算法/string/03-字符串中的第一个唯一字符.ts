// function firstUniqChar(s: string): number {
//   const mapHelper = new Map<string, boolean>()
//   for (let i = 0; i < s.length; i++) {
//     if (mapHelper.has(s[i])) {
//       continue
//     }
//     let flag = false
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         flag = true
//         break
//       }
//     }
//     if (!flag) {
//       return i
//     }
//     mapHelper.set(s[i], true)
//   }

//   return -1
// }

function firstUniqChar(s: string): number {
  const mapHelper = new Map<string, boolean>()
  const indexMapHelper = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    if (mapHelper.has(s[i])) {
      if (indexMapHelper.has(s[i])) {
        indexMapHelper.delete(s[i])
      }
    } else {
      mapHelper.set(s[i], true)
      indexMapHelper.set(s[i], i)
    }
  }
  for (let [, index] of indexMapHelper) {
    return index
  }
  return -1
}
