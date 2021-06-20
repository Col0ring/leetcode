export class ThroneInheritance {
  edges: Map<string, string[]>
  dead: Set<string>
  king: string
  constructor(kingName: string) {
    this.edges = new Map()
    this.dead = new Set()
    this.king = kingName
  }

  birth(parentName: string, childName: string): void {
    if (!this.edges.has(parentName)) {
      this.edges.set(parentName, [])
    }
    this.edges.get(parentName)!.push(childName)
  }

  death(name: string): void {
    this.dead.add(name)
  }

  getInheritanceOrder(): string[] {
    const ans: string[] = []

    const preorder = (name: string) => {
      if (!this.dead.has(name)) {
        ans.push(name)
      }
      if (this.edges.has(name)) {
        for (const childName of this.edges.get(name)!) {
          preorder(childName)
        }
      }
    }

    preorder(this.king)
    return ans
  }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
