const highbit = 1 << 7

function isBody(num: number) {
  return num & highbit && !(num & (1 << 6))
}
function getSequenceLength(num: number) {
  let length = 0
  let bit = highbit
  while (bit & num) {
    length++
    bit >>= 1
  }
  return length
}
export function validUtf8(data: number[]): boolean {
  let i = 0

  while (i < data.length) {
    const head = data[i]
    let sequenceLength = getSequenceLength(head)
    if (sequenceLength === 1 || sequenceLength > 4) {
      return false
    }
    if (sequenceLength) {
      while (sequenceLength - 1) {
        i++
        if (i >= data.length || !isBody(data[i])) {
          return false
        }
        sequenceLength--
      }
    }
    i++
  }
  return true
}
