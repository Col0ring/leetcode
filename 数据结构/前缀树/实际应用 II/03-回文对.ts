// 暴力
// export function palindromePairs(words: string[]): number[][] {
//   const ans: number[][] = []
//   const isPalindrome = (str: string): boolean => {
//     const len: number = str.length
//     for (let i = 0; i < Math.floor(len / 2); i++) {
//       if (str[i] != str[len - i - 1]) {
//         return false
//       }
//     }
//     return true
//   }
//   const len = words.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let s = words[i] + words[j]
//       if (isPalindrome(s)) {
//         ans.push([i, j])
//       }
//       s = words[j] + words[i]
//       if (isPalindrome(s)) {
//         ans.push([j, i])
//       }
//     }
//   }
//   return ans
// }

//  哈希

const isPalindrome = (str: string) => {
  let l = 0,
    r = str.length - 1
  while (l < r) {
    if (str[l++] != str[r--]) return false // 我很不想这么写，尽量一句话做一件事吧
  }
  return true
}

function palindromePairs(words: string[]): number[][] {
  const reverseds = new Map<string, number>()
  // 先保存回文字符
  for (let i = 0; i < words.length; i++) {
    const reversed = words[i].split('').reverse().join('')
    reverseds.set(reversed, i)
  }
  const res: number[][] = []
  for (let i = 0; i < words.length; i++) {
    const curWord = words[i]
    if (isPalindrome(curWord) && reverseds.has('') && curWord !== '') {
      res.push([reverseds.get('')!, i])
    }

    // 相对于暴力法来说就是实现进行存储，然后少判断一些已经回文的字符串
    for (let j = 0; j < curWord.length; j++) {
      const left = curWord.substring(0, j)
      const right = curWord.substring(j)
      if (
        isPalindrome(left) &&
        reverseds.has(right) &&
        reverseds.get(right) !== i
      ) {
        // 拼接在右边
        res.push([reverseds.get(right)!, i])
      }
      if (
        isPalindrome(right) &&
        reverseds.has(left) &&
        reverseds.get(left) !== i
      ) {
        // 拼接在左边
        res.push([i, reverseds.get(left)!])
      }
    }
  }
  return res
}
