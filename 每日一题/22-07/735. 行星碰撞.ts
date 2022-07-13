export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []
  for (const aster of asteroids) {
    let alive = true
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster // aster 是否存在
      if (stack[stack.length - 1] <= -aster) {
        // 栈顶行星爆炸
        stack.pop()
      }
    }
    if (alive) {
      stack.push(aster)
    }
  }
  const size = stack.length
  const ans: number[] = new Array(size).fill(0)
  for (let i = size - 1; i >= 0; i--) {
    ans[i] = stack.pop()!
  }
  return ans
}
