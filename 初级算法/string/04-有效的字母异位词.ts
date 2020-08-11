export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  const mapHelper: { [key: string]: number } = {}
  for (let i = 0; i < s.length; i++) {
    if (mapHelper[s[i]]) {
      mapHelper[s[i]]++
    } else {
      mapHelper[s[i]] = 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (mapHelper[t[i]]) {
      mapHelper[t[i]]--
    }
  }
  return Object.keys(mapHelper).every((key) => mapHelper[key] === 0)
}
