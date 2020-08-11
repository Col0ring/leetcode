function reverseWords(s: string): string {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}
