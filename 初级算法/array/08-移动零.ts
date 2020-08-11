/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//     const len = nums.length
//     let count = 0
//     for(let i = 0; i < len - count; i++){
//         if(nums[i] === 0){
//             nums.splice(i, 1)
//             nums.push(0)
//             count++
//             i--
//         }
//     }
// };

// function moveZeroes(nums: number[]): void {
//     let j = 0
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== 0){
//             nums[j] = nums[i]
//             j++
//         }
//     }
//     for(let i = j; i < nums.length; i++){
//         nums[i] = 0
//     }
// };

export function moveZeroes(nums: number[]): void {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
    }
  }
}
