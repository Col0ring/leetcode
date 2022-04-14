// 首先实现一个currying的函数
export function currying(fn: (...args: any[]) => any, length: number) {
  length = length || fn.length
  return function (...args: any[]) {
    if (args.length >= length) {
      return fn(...args)
    } else {
      return currying(fn.bind(null, ...args), length - args.length)
    }
  }
}

const add = currying((...args) => args.reduce((pre, next) => pre + next, 0), 5)
