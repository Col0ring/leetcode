export function findOcurrences(
  text: string,
  first: string,
  second: string
): string[] {
  const words = text.split(' ')
  const list: string[] = []
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      list.push(words[i])
    }
  }
  const size = list.length
  const ret: string[] = Array(size).fill('')
  for (let i = 0; i < size; i++) {
    ret[i] = list[i]
  }
  return ret
}
