function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0
  }

  let i = 0,
    j = 1

  while (i < haystack.length) {
    if (haystack.slice(i, j) === needle) {
      return i
    }
    if (j < haystack.length) {
      j++
    } else {
      i++
      j = i + 1
    }
  }

  return -1
}
