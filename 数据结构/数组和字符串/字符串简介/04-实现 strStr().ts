// function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle)
// }

// function strStr(haystack: string, needle: string): number {
//   const reg = new RegExp(needle)
//   const index = reg.exec(haystack)?.index
//   return index ?? -1
// }

export function strStr(haystack: string, needle: string): number {
  if (!needle) {
    return 0
  }
  for (let i = 0; i < haystack.length; i++) {
    for (let j = i + 1; j <= haystack.length; j++) {
      if (needle === haystack.slice(i, j)) {
        return i
      }
    }
  }
  return -1
}
