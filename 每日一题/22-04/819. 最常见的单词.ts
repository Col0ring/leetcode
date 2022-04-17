export function mostCommonWord(paragraph: string, banned: string[]): string {
  let str = paragraph.toLocaleLowerCase().replace(/[^a-z]/g, ' ')
  let arr = str.split(' ')
  let bannedMap = banned.reduce((l, i) => {
    l[i] = true
    return l
  }, {} as Record<string, boolean>)

  let map: Record<string, number> = {}
  let max = ''
  let maxNum = 0
  arr.forEach((item) => {
    if (bannedMap[item] === undefined && item !== '') {
      map[item] !== undefined ? map[item]++ : (map[item] = 1)
      if (map[item] > maxNum) {
        maxNum = map[item]
        max = item
      }
    }
  })

  return max
}
