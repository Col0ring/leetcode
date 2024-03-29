export class TopVotedCandidate {
  tops: number[] = []
  voteCounts = new Map<number, number>()
  times: number[]
  constructor(persons: number[], times: number[]) {
    this.voteCounts.set(-1, -1)
    this.times = times
    let top = -1
    for (let i = 0; i < persons.length; ++i) {
      const p = persons[i]
      if (!this.voteCounts.has(p)) {
        this.voteCounts.set(p, 0)
      } else {
        this.voteCounts.set(p, this.voteCounts.get(p)! + 1)
      }
      if (this.voteCounts.get(p)! >= this.voteCounts.get(top)!) {
        top = p
      }
      this.tops.push(top)
    }
  }

  q(t: number): number {
    let l = 0,
      r = this.times.length - 1
    // 找到满足 times[l] <= t 的最大的 l
    while (l < r) {
      const m = l + Math.floor((r - l + 1) / 2)
      if (this.times[m] <= t) {
        l = m
      } else {
        r = m - 1
      }
    }

    return this.tops[l]
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
