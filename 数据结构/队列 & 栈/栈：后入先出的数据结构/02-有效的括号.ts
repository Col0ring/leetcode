export function isValid(s: string): boolean {
  const mapCharacters = { '(': ')', '{': '}', '[': ']' }
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const str = s[i] as '(' | '{' | '['
    if (mapCharacters[str]) {
      stack.push(mapCharacters[str])
    } else {
      if (str !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}
