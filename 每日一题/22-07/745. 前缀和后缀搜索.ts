export class WordFilter {
  dictionary = new Map<string, number>()
  constructor(words: string[]) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const m = word.length
      for (let prefixLength = 1; prefixLength <= m; prefixLength++) {
        for (let suffixLength = 1; suffixLength <= m; suffixLength++) {
          this.dictionary.set(
            word.substring(0, prefixLength) +
              '#' +
              word.substring(m - suffixLength),
            i
          )
        }
      }
    }
  }

  f(pref: string, suff: string): number {
    if (this.dictionary.has(pref + '#' + suff)) {
      return this.dictionary.get(pref + '#' + suff)
    }
    return -1
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
