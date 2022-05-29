export function validIPAddress(queryIP: string): string {
  if (queryIP.indexOf('.') >= 0) {
    // IPv4
    let last = -1
    for (let i = 0; i < 4; ++i) {
      const cur = i === 3 ? queryIP.length : queryIP.indexOf('.', last + 1)
      if (cur < 0) {
        return 'Neither'
      }
      if (cur - last - 1 < 1 || cur - last - 1 > 3) {
        return 'Neither'
      }
      let addr = 0
      for (let j = last + 1; j < cur; ++j) {
        if (Number.isNaN(parseFloat(queryIP[j]))) {
          return 'Neither'
        }
        addr = addr * 10 + (queryIP[j].charCodeAt(0) - '0'.charCodeAt(0))
      }
      if (addr > 255) {
        return 'Neither'
      }
      if (addr > 0 && queryIP[last + 1].charCodeAt(0) === '0'.charCodeAt(0)) {
        return 'Neither'
      }
      if (addr === 0 && cur - last - 1 > 1) {
        return 'Neither'
      }
      last = cur
    }
    return 'IPv4'
  } else {
    // IPv6
    let last = -1
    for (let i = 0; i < 8; ++i) {
      const cur = i === 7 ? queryIP.length : queryIP.indexOf(':', last + 1)
      if (cur < 0) {
        return 'Neither'
      }
      if (cur - last - 1 < 1 || cur - last - 1 > 4) {
        return 'Neither'
      }
      for (let j = last + 1; j < cur; ++j) {
        if (
          Number.isNaN(parseFloat(queryIP[j])) &&
          !('a' <= queryIP[j].toLowerCase() && queryIP[j].toLowerCase() <= 'f')
        ) {
          return 'Neither'
        }
      }
      last = cur
    }
    return 'IPv6'
  }
}
