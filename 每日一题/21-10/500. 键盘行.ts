function findWords(words: string[]): string[] {
  const limit = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return words.filter((word) => {
    let i = -2
    return word.split('').every((char) => {
      const index = limit.findIndex((lw) => lw.includes(char.toLowerCase()))
      if ((i !== index && i !== -2) || index === -1) {
        return false
      } else {
        i = index
        return true
      }
    })
  })
}
