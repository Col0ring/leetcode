// 从低到高
export function reconstructQueue(people: number[][]): number[][] {
  // 将people按身高从大到小排序，如果身高一样则将前面高于自己人数小的人放在前面
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
  // 创建新数组 ans
  let ans: number[][] = []
  for (let i = 0; i < people.length; i++) {
    // 挨个根据前面高于自己人数插入到ans里
    // 因为people已按照身高排序，所以某个人被插入到ans里时，所有比他高的都已经在ans里了
    // 而身高比他矮的人怎样插入到ans里都不影响前面高于他的人数
    // 所以这样得到的数组就是符合我们要求的队列
    ans.splice(people[i][1], 0, people[i])
  }
  return ans
}
