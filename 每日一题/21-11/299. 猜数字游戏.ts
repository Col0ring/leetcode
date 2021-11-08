export function getHint(secret: string, guess: string): string {
  let bulls = 0
  const cntS: number[] = new Array(10).fill(0)
  const cntG: number[] = new Array(10).fill(0)
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] == guess[i]) {
      ++bulls
    } else {
      ++cntS[secret[i].charCodeAt(0) - '0'.charCodeAt(0)]
      ++cntG[guess[i].charCodeAt(0) - '0'.charCodeAt(0)]
    }
  }
  let cows = 0
  for (let i = 0; i < 10; ++i) {
    cows += Math.min(cntS[i], cntG[i])
  }
  return bulls + 'A' + cows + 'B'
}
