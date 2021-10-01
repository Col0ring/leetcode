export function destCity(paths: string[][]): string {
  const citiesA = new Set<string>()
  for (const path of paths) {
    citiesA.add(path[0])
  }
  for (const path of paths) {
    if (!citiesA.has(path[1])) {
      return path[1]
    }
  }
  return ''
}
