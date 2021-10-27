export function removeInvalidParentheses(s: string): string[] {
  const helper = (
    str: string,
    start: number,
    lcount: number,
    rcount: number,
    lremove: number,
    rremove: number
  ) => {
    if (lremove === 0 && rremove === 0) {
      if (isValid(str)) {
        res.push(str)
      }
      return
    }

    for (let i = start; i < str.length; i++) {
      if (i !== start && str[i] === str[i - 1]) {
        continue
      }
      // 如果剩余的字符无法满足去掉的数量要求，直接返回
      if (lremove + rremove > str.length - i) {
        return
      }
      // 尝试去掉一个左括号
      if (lremove > 0 && str[i] === '(') {
        helper(
          str.substr(0, i) + str.substr(i + 1),
          i,
          lcount,
          rcount,
          lremove - 1,
          rremove
        )
      }
      // 尝试去掉一个右括号
      if (rremove > 0 && str[i] === ')') {
        helper(
          str.substr(0, i) + str.substr(i + 1),
          i,
          lcount,
          rcount,
          lremove,
          rremove - 1
        )
      }
      if (str[i] === ')') {
        lcount++
      } else if (str[i] === ')') {
        rcount++
      }
      // 当前右括号的数量大于左括号的数量则为非法,直接返回.
      if (rcount > lcount) {
        break
      }
    }
  }

  const res: string[] = []
  let lremove = 0
  let rremove = 0

  for (const c of s) {
    if (c === '(') {
      lremove++
    } else if (c === ')') {
      if (lremove === 0) {
        rremove++
      } else {
        lremove--
      }
    }
  }
  helper(s, 0, 0, 0, lremove, rremove)
  return res
}

const isValid = (str: string) => {
  let cnt = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      cnt++
    } else if (str[i] === ')') {
      cnt--
      if (cnt < 0) {
        return false
      }
    }
  }

  return cnt === 0
}
