// function removeDuplicates(nums: number[]): number {
//     const obj:any = {}
//     for(let i = 0; i<nums.length ; i++){
//         if(obj[nums[i]]){
//             nums.splice(i,1)
//             i--
//         }else{
//             obj[nums[i]] = true
//         }
//     }
//     return nums.length
// };
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  let len = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len++] = nums[i]
    }
  }
  nums.splice(len + 1)
  return len
}
