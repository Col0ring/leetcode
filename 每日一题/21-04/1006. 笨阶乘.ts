// 栈
export function clumsy(N: number): number {
  const stack = [N--]

  let index = 0 // 用于控制乘、除、加、减
  while (N > 0) {
    if (index % 4 == 0) {
      stack.push(stack.pop()! * N)
    } else if (index % 4 == 1) {
      const cur = stack.pop()!
      stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N))
    } else if (index % 4 == 2) {
      stack.push(N)
    } else {
      stack.push(-N)
    }
    index++
    N--
  }

  // 把栈中所有的数字依次弹出求和
  let sum = 0
  stack.forEach((element) => {
    sum += element
  })
  return sum
}
