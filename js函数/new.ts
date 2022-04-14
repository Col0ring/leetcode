export function _new(Fn: Function, ...args: any[]) {
  // 效果等同下面两句
  const ins = Object.create(Fn.prototype)
  /*
        const ins = {}
        ins.__proto__ = Fn.prototype
    */
  Fn.call(ins, ...args)
  return ins
}
