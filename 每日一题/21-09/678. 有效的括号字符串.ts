// // stack
// export function checkValidString(s: string): boolean {
//   const leftStack: number[] = []
//   const asteriskStack: number[] = []
//   const n = s.length
//   for (let i = 0; i < n; i++) {
//     const c = s[i]
//     if (c === '(') {
//       leftStack.push(i)
//     } else if (c === '*') {
//       asteriskStack.push(i)
//     } else {
//       if (leftStack.length) {
//         leftStack.pop()
//       } else if (asteriskStack.length) {
//         asteriskStack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   // 如果都还有剩余
//   while (leftStack.length && asteriskStack.length) {
//     const leftIndex = leftStack.pop()!
//     const asteriskIndex = asteriskStack.pop()!
//     if (leftIndex > asteriskIndex) {
//       return false
//     }
//   }
//   // 是否已经取完
//   return leftStack.length === 0
// }

// dp
// export function checkValidString(s: string): boolean {
//   const n = s.length
//   const dp: boolean[][] = new Array(n)
//     .fill(0)
//     .map(() => new Array(n).fill(false))
//   // 先算 length = 1 的
//   for (let i = 0; i < n; i++) {
//     if (s[i] === '*') {
//       dp[i][i] = true
//     }
//   }
//   // 再算 length = 2 的
//   for (let i = 1; i < n; i++) {
//     const c1 = s[i - 1],
//       c2 = s[i]
//     dp[i - 1][i] = (c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')
//   }
//   // 算 length = 3 以上的
//   for (let i = n - 3; i >= 0; i--) {
//     const c1 = s[i]
//     for (let j = i + 2; j < n; j++) {
//       const c2 = s[j]
//       if ((c1 === '(' || c1 === '*') && (c2 === ')' || c2 === '*')) {
//         dp[i][j] = dp[i + 1][j - 1]
//       }
//       //  [i, k][i,k] 和 [k+1,j]  有效的话，直接拼接
//       for (let k = i; k < j && !dp[i][j]; k++) {
//         dp[i][j] = dp[i][k] && dp[k + 1][j]
//       }
//     }
//   }
//   return dp[0][n - 1]
// }

// 贪心
// export function checkValidString(s: string): boolean {
//   let minCount = 0,
//     maxCount = 0
//   const n = s.length
//   for (let i = 0; i < n; i++) {
//     const c = s[i]
//     if (c === '(') {
//       minCount++
//       maxCount++
//     } else if (c === ')') {
//       minCount = Math.max(minCount - 1, 0)
//       maxCount--
//       if (maxCount < 0) {
//         return false
//       }
//     } else {
//       minCount = Math.max(minCount - 1, 0)
//       maxCount++
//     }
//   }
//   return minCount === 0
// }

// 贪心， 两次遍历
export function checkValidString(s: string): boolean {
  const n = s.length
  let l = 0
  let m = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      l++
    } else if (s[i] === '*') {
      m++
    } else {
      if (l === 0) {
        m--
        if (m < 0) {
          return false
        }
      } else {
        l--
      }
    }
  }

  let r = 0
  m = 0
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === ')') {
      r++
    } else if (s[i] === '*') {
      m++
    } else {
      if (r === 0) {
        m--
        if (m < 0) {
          return false
        }
      } else {
        r--
      }
    }
  }

  return true
}
