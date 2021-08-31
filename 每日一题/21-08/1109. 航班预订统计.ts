// 差分
// function corpFlightBookings(bookings: number[][], n: number): number[] {
//     const nums: number[] = new Array(n).fill(0);
//     for (const booking of bookings) {
//         // 起始航班
//         nums[booking[0] - 1] += booking[2];
//         if (booking[1] < n) {
//             nums[booking[1]] -= booking[2];
//         }
//     }
//     for (let i = 1; i < n; i++) {
//         nums[i] += nums[i - 1];
//     }
//     return nums;
// };

// 暴力
export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const nums: number[] = new Array(n).fill(0)
  for (const booking of bookings) {
    let first = booking[0]
    const last = booking[1]
    const seats = booking[2]

    while (first <= last) {
      nums[first - 1] += seats
      first++
    }
  }
  return nums
}
