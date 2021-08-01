export function frequencySort(s: string): string {
  let mapHelper: { [key: string]: number } = {}
  for (let ch of s) {
    if (mapHelper[ch]) {
      mapHelper[ch]++
    } else {
      mapHelper[ch] = 1
    }
  }
  let ans = ''
  let keys = Object.keys(mapHelper).sort((a, b) => mapHelper[b] - mapHelper[a])
  for (let i = 0; i < keys.length; i++) {
    ans += keys[i].repeat(mapHelper[keys[i]])
  }
  return ans
}
