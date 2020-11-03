// 线性扫描，找到至高点
export function validMountainArray(A: number[]): boolean {
  const N = A.length
  let i = 0

  // 递增扫描
  while (i + 1 < N && A[i] < A[i + 1]) {
    i++
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === N - 1) {
    return false
  }

  // 递减扫描
  while (i + 1 < N && A[i] > A[i + 1]) {
    i++
  }

  return i === N - 1
}
