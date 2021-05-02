/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

export function GetImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>()
  for (const employee of employees) {
    map.set(employee.id, employee)
  }
  const dfs = (id: number) => {
    const employee = map.get(id)!
    let total = employee.importance
    const subordinates = employee.subordinates
    for (const subId of subordinates) {
      total += dfs(subId)
    }
    return total
  }

  return dfs(id)
}
