export function strongPasswordChecker(password: string): number {
  const n = password.length
  let hasLower = 0,
    hasUpper = 0,
    hasDigit = 0
  for (let i = 0; i < n; ++i) {
    const ch = password[i]
    if (isLowerCase(ch)) {
      hasLower = 1
    } else if (isUpperCase(ch)) {
      hasUpper = 1
    } else if (isDigit(ch)) {
      hasDigit = 1
    }
  }
  const categories = hasLower + hasUpper + hasDigit

  if (n < 6) {
    return Math.max(6 - n, 3 - categories)
  } else if (n <= 20) {
    let replace = 0
    let cnt = 0
    let cur = '#'

    for (let i = 0; i < n; ++i) {
      const ch = password[i]
      if (ch === cur) {
        ++cnt
      } else {
        replace += Math.floor(cnt / 3)
        cnt = 1
        cur = ch
      }
    }
    replace += Math.floor(cnt / 3)
    return Math.max(replace, 3 - categories)
  } else {
    // 替换次数和删除次数
    let replace = 0,
      remove = n - 20
    // k mod 3 = 1 的组数，即删除 2 个字符可以减少 1 次替换操作
    let rm2 = 0
    let cnt = 0
    let cur = '#'

    for (let i = 0; i < n; ++i) {
      const ch = password[i]
      if (ch === cur) {
        ++cnt
      } else {
        if (remove > 0 && cnt >= 3) {
          if (cnt % 3 === 0) {
            // 如果是 k % 3 = 0 的组，那么优先删除 1 个字符，减少 1 次替换操作
            --remove
            --replace
          } else if (cnt % 3 === 1) {
            // 如果是 k % 3 = 1 的组，那么存下来备用
            ++rm2
          }
          // k % 3 = 2 的组无需显式考虑
        }
        replace += Math.floor(cnt / 3)
        cnt = 1
        cur = ch
      }
    }
    if (remove > 0 && cnt >= 3) {
      if (cnt % 3 === 0) {
        --remove
        --replace
      } else if (cnt % 3 === 1) {
        ++rm2
      }
    }
    replace += Math.floor(cnt / 3)

    // 使用 k % 3 = 1 的组的数量，由剩余的替换次数、组数和剩余的删除次数共同决定
    const use2 = Math.min(Math.min(replace, rm2), Math.floor(remove / 2))
    replace -= use2
    remove -= use2 * 2
    // 由于每有一次替换次数就一定有 3 个连续相同的字符（k / 3 决定），因此这里可以直接计算出使用 k % 3 = 2 的组的数量
    const use3 = Math.min(replace, Math.floor(remove / 3))
    replace -= use3
    remove -= use3 * 3
    return n - 20 + Math.max(replace, 3 - categories)
  }
}

const isLowerCase = (ch: string) => {
  return 'a' <= ch && ch <= 'z'
}

const isUpperCase = (ch: string) => {
  return 'A' <= ch && ch <= 'Z'
}

const isDigit = (ch: string) => {
  return parseFloat(ch).toString() === 'NaN' ? false : true
}
