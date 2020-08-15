function dailyTemperatures(T: number[]): number[] {
  const stack: number[] = []
  const ans: number[] = new Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    while (stack.length && t > T[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()!
      // 不能直接 push，因为有可能是 32 30 31 这种情况
      ans[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }
  return ans
}
