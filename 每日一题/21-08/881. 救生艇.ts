export function numRescueBoats(people: number[], limit: number): number {
  let ans = 0
  people.sort((a, b) => a - b)
  let light = 0,
    heavy = people.length - 1
  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      ++light
    }
    --heavy
    ++ans
  }
  return ans
}
