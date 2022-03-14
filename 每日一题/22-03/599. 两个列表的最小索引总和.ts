export function findRestaurant(list1: string[], list2: string[]): string[] {
  const mapHelper = new Map<string, number>()
  const ans: string[] = []
  let min = Number.MAX_VALUE
  for (let str of list1) {
    if (list2.indexOf(str) !== -1) {
      const index = list1.indexOf(str) + list2.indexOf(str)
      min = Math.min(min, index)
      mapHelper.set(str, index)
    }
  }
  for (let [key, val] of mapHelper) {
    if (val === min) {
      ans.push(key)
    }
  }
  return ans
}
