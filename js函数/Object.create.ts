export function create(obj: object) {
  function Fn() {}
  Fn.prototype = obj
  return new ((Fn as unknown) as FunctionConstructor)()
}
