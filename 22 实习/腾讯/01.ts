export function combine(a: number[], b: number[]): number[] {
  const ans: number[] = []
  let i = 0,
    j = 0
  while (i < a.length || j < b.length) {
    if (a[i] <= b[j] || j === b.length) {
      ans.push(a[i])
      i++
      console.log(i)
    } else if (b[j] < a[i] || i === a.length) {
      ans.push(b[j])
      j++
    }
  }

  return ans
}

var a = [1, 3, 5, 6, 7],
  b = [2, 3, 9]
console.log(combine(a, b)) // [1, 2, 3, 3, 5, 6, 7, 9]
