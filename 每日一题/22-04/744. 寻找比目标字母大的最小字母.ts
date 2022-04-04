export function nextGreatestLetter(letters: string[], target: string): string {
  const length = letters.length
  let nextGreater = letters[0]
  for (let i = 0; i < length; i++) {
    if (letters[i] > target) {
      nextGreater = letters[i]
      break
    }
  }
  return nextGreater
}
