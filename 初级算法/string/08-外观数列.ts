// function countAndSay(n: number): string {
//   if (n == 1) {
//     return '1'
//   }
//   const tempArr = countAndSay(n - 1).match(/(\d)\1*/g)! // 该正则进行相同分组，调用 match方法得出接下来用的数组,比如 str = "111221"，结果就是 str.match(/(\d)\1*/g)  ["111", "22", "1"]
//   let ans = ''
//   tempArr.forEach((item) => {
//     var len = item.length
//     var num = item[0]
//     ans = ans + len + num
//   })
//   return ans //最后返回结果
// }

export function countAndSay(n: number): string {
  if (n === 1) {
    return '1'
  }
  let last = '1'
  while (n > 1) {
    let current = ''
    let count = 0
    for (let i = 0; i < last.length; i++) {
      count++
      if (last[i] !== last[i + 1]) {
        current += count + last[i]
        count = 0
      }
    }
    last = current
    n--
  }
  return last
}
