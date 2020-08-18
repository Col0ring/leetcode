export function decodeString(s: string): string {
  let numStack: number[] = [] // 存 倍数num 的栈
  let strStack: string[] = [] // 存 待拼接的str 的栈
  let result = ''
  let num = 0 // 倍数
  for (const char of s) {
    // 逐字符扫描
    if (!Number.isNaN(+char)) {
      // 遇到数字
      num = num * 10 + +char
    } else if (char === '[') {
      // 遇到 [
      strStack.push(result) // result串进入strStack栈等待
      result = '' // 完成进栈后 清零
      // 推入倍数
      numStack.push(num)
      num = 0
    } else if (char === ']') {
      // 遇到 ]，两个栈的栈顶出栈
      let repeatTimes = numStack.pop()! // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes) // 构建子串
    } else {
      // 遇到字母，追加给result串
      result += char
    }
  }
  return result
}
