export function complexNumberMultiply(num1: string, num2: string): string {
  const complex1 = [num1.split('+')[0], num1.split('+')[1].split('i')[0]]
  const complex2 = [num2.split('+')[0], num2.split('+')[1].split('i')[0]]
  const real1 = parseInt(complex1[0])
  const imag1 = parseInt(complex1[1])
  const real2 = parseInt(complex2[0])
  const imag2 = parseInt(complex2[1])
  return (
    +real1 * real2 - imag1 * imag2 + '+' + (real1 * imag2 + imag1 * real2) + 'i'
  )
}
