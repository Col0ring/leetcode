export function reverseWords(s: string): string {
  const arr = s.split(' ')
  let ans = ''
  for (let i = 0; i < arr.length; i++) {
    ans +=
      arr[i].split('').reverse().join('') + (i === arr.length - 1 ? '' : ' ')
  }
  return ans
}
