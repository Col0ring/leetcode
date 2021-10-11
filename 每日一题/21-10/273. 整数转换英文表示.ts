export function numberToWords(num: number): string {
  const small = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen'
  ]
  const middle = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety'
  ]
  const large = ['Billion', 'Million', 'Thousand', '']

  const [BILLION, MILLION, THOUSAND] = [1000000000, 1000000, 1000]
  function num2Str(x: number) {
    let ans = []
    if (x >= 100) {
      ans.push(small[Math.floor(x / 100)])
      ans.push('Hundred')
      x %= 100
    }

    if (x >= 20) {
      ans.push(middle[Math.floor(x / 10)])
      x %= 10
    }

    if (x !== 0) {
      ans.push(small[x])
    }

    return ans.join(' ')
  }

  function num2Words(num: number) {
    let s = []
    if (num === 0) return small[0]

    if (num >= BILLION) {
      s.push(num2Str(Math.floor(num / BILLION)))
      s.push(large[0])
      num %= BILLION
    }

    if (num >= MILLION) {
      s.push(num2Str(Math.floor(num / MILLION)))
      s.push(large[1])
      num %= MILLION
    }

    if (num >= THOUSAND) {
      s.push(num2Str(Math.floor(num / THOUSAND)))
      s.push(large[2])
      num %= THOUSAND
    }

    if (num > 0) {
      s.push(num2Str(num))
    }

    return s.join(' ')
  }

  return num2Words(num)
}
