export function defangIPaddr(address: string): string {
  return address.replace(/\./gi, '[.]')
}
