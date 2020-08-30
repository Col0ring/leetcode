// export function canVisitAllRooms(rooms: number[][]): boolean {
//   let ans = 0
//   // bfs
//   const seen = new Set<number>()
//   const queue: number[] = []
//   if (rooms[0].length) {
//     queue.push(...rooms[0])
//   }
//   seen.add(0)
//   ans++
//   while (queue.length) {
//     const n = queue.shift()!
//     if (seen.has(n)) {
//       continue
//     }
//     if (rooms[n].length) {
//       queue.push(...rooms[n])
//     }
//     seen.add(n)
//     ans++
//   }
//   return ans === rooms.length
// }

// dfs
export function canVisitAllRooms(rooms: number[][]): boolean {
  let ans = 0
  const seen = new Set<number>()
  const dfs = (x: number) => {
    seen.add(x)
    ans++
    for (let it of rooms[x]) {
      if (!seen.has(it)) {
        dfs(it)
      }
    }
  }
  dfs(0)
  return ans === rooms.length
}
