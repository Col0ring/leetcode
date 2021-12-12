export function toLowerCase(s: string): string {
  let str = ''
  for (let ch of s) {
    if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
      ch = String.fromCharCode(ch.charCodeAt(0) | 32)
    }
    str += ch
  }
  return str
}
