export function findNumOfValidWords(
  words: string[],
  puzzles: string[]
): number[] {
  const frequency = new Map<number, number>()

  for (const word of words) {
    let mask = 0
    for (const ch of word) {
      mask |= 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    if (CountOne(mask) <= 7) {
      frequency.set(mask, (frequency.get(mask) || 0) + 1)
    }
  }

  const ans: number[] = []
  for (const puzzle of puzzles) {
    let total = 0

    // 枚举子集方法一
    // for (let choose = 0; choose < (1 << 6); ++choose) {
    //     let mask = 0;
    //     for (let i = 0; i < 6; ++i) {
    //         if (choose & (1 << i)) {
    //             mask |= (1 << (puzzle[i + 1].charCodeAt() - 'a'.charCodeAt()));
    //         }
    //     }
    //     mask |= (1 << (puzzle[0].charCodeAt() - 'a'.charCodeAt()));
    //     if (frequency.has(mask)) {
    //         total += frequency.get(mask);
    //     }
    // }
    // 枚举子集方法二
    let mask = 0
    for (let i = 1; i < 7; ++i) {
      mask |= 1 << (puzzle[i].charCodeAt(0) - 'a'.charCodeAt(0))
    }
    let subset = mask
    while (subset) {
      let s = subset | (1 << (puzzle[0].charCodeAt(0) - 'a'.charCodeAt(0)))
      if (frequency.has(s)) {
        total += frequency.get(s)!
      }
      subset = (subset - 1) & mask
    }
    // 在枚举子集的过程中，要么会漏掉全集 mask，要么会漏掉空集
    // 这里会漏掉空集，因此需要额外判断空集
    if (frequency.has(1 << (puzzle[0].charCodeAt(0) - 'a'.charCodeAt(0)))) {
      total += frequency.get(
        1 << (puzzle[0].charCodeAt(0) - 'a'.charCodeAt(0))
      )!
    }
    ans.push(total)
  }
  return ans
}

function CountOne(n: number) {
  const str = n.toString(2)
  let count = 0
  for (const ch of str) {
    if (parseInt(ch) === 1) {
      count++
    }
  }
  return count
}
