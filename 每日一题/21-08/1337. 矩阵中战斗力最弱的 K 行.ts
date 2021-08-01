export function kWeakestRows(mat: number[][], k: number): number[] {
  // 已知 1 <= k <= m 略去判空
  const resList: number[] = []
  let tempN = 0
  while (resList.length < k && tempN < mat[0].length) {
    // 只要返回的索引数小于k，便一直遍历每一行，同时列自增
    for (let z = 0; z < mat.length; z++) {
      if (mat[z][tempN] === 0 && !resList.includes(z)) {
        resList.push(z)
        // 如果在这里判定 最后结束时就不需要判定了 或者颠过来
        // 因为可能当次循环中推入的数量会超出k
        if (resList.length === k) {
          break
        }
      }
    }
    tempN++
  }
  // 到这里需要判定长度是否达到k，不够的话说明剩下的N行均为战斗力爆表的军人，按顺序补入即可
  if (resList.length < k) {
    // 这里需要注意的是进入此条件说明最后一列已经判定完毕，需要退一位
    tempN--
    for (let z = 0; z < mat.length; z++) {
      // 这里长度不够说明那一行全是军人 判定最后一位是1即可
      if (mat[z][tempN] === 1) {
        resList.push(z)
        if (resList.length === k) {
          break
        }
      }
    }
  }
  return resList
}
