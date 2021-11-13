export function detectCapitalUse(word: string): boolean {
  // 若第 1 个字母为小写，则需额外判断第 2 个字母是否为小写
  if (
    word.length >= 2 &&
    word[0] === word[0].toLowerCase() &&
    word[1] === word[1].toUpperCase()
  ) {
    return false
  }

  // 无论第 1 个字母是否大写，其他字母必须与第 2 个字母的大小写相同
  for (let i = 2; i < word.length; ++i) {
    if (
      (word[i] === word[i].toLowerCase() ? 1 : 0) ^
      (word[1] === word[1].toLowerCase() ? 1 : 0)
    ) {
      return false
    }
  }
  return true
}
