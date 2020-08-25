export function letterCombinations(digits: string): string[] {
  if (!digits) {
    return []
  }
  const ans: string[] = []
  // 拨号键盘
  const keymap: any = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const helper = (letter: string, digits: string) => {
    if (!digits) {
      ans.push(letter)
    } else {
      const str = keymap[digits[0]]
      for (let i = 0; i < str.length; i++) {
        helper(letter + str[i], digits.slice(1))
      }
    }
  }
  helper('', digits)

  return ans
}
