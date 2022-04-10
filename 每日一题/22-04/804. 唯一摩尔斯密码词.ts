export function uniqueMorseRepresentations(words: string[]): number {
  const MORSE = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]

  const seen = new Set<string>()
  for (const word of words) {
    let code = ''
    for (const ch of word) {
      code += MORSE[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    seen.add(code)
  }
  return seen.size
}
