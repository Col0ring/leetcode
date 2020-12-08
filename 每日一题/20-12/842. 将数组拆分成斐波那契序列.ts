export function splitIntoFibonacci(S: string): number[] {
  const list = new Array().fill(0)
  backtrack(list, S, S.length, 0, 0, 0)
  return list
}

const backtrack = (
  list: number[],
  S: string,
  length: number,
  index: number,
  sum: number,
  prev: number
) => {
  if (index === length) {
    return list.length >= 3
  }
  let currLong = 0
  for (let i = index; i < length; i++) {
    if (i > index && S[index] === '0') {
      break
    }
    currLong = currLong * 10 + S[i].charCodeAt(0) - '0'.charCodeAt(0)
    if (currLong > Math.pow(2, 31) - 1) {
      break
    }
    let curr = currLong
    if (list.length >= 2) {
      if (curr < sum) {
        continue
      } else if (curr > sum) {
        break
      }
    }
    list.push(curr)
    if (backtrack(list, S, length, i + 1, prev + curr, curr)) {
      return true
    } else {
      list.splice(list.length - 1, 1)
    }
  }
  return false
}
