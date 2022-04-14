function jsonParse(text: string) {
  var at = 0
  var ch = ' '

  var escapee = {
    '"': '"',
    '\\': '\\',
    '/': '/',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
  }

  var error = function (m) {
    console.log(m)
    throw {
      name: 'SyntaxError',
      message: m,
      at: at,
      text: text
    }
  }

  var next = function (c) {
    if (c && c !== ch) {
      error("Expected '" + c + "' instead of '" + ch + "'")
    }
    ch = text.charAt(at)
    at = at + 1

    return ch
  }

  var white = function () {
    while (ch && ch <= ' ') {
      next()
    }
  }

  var number = function () {
    var number
    var string = ''

    if (ch === '-') {
      string = '-'
      next('-')
    }

    while (ch >= '0' && ch <= '9') {
      string += ch
      next()
    }

    if (ch === '.') {
      string += '.'
      while (next() && ch >= '0' && ch <= 9) {
        string += ch
      }
    }

    if (ch === 'e' || ch === 'E') {
      string += ch
      next()
      if (ch === '-' || ch === '+') {
        string += ch
        next()
      }
      while (ch >= '0' && ch <= '9') {
        string += ch
        next()
      }
    }

    number = string - 0
    if (!isFinite(number)) {
      error('Bad number')
    } else {
      return number
    }
  }

  var string = function () {
    var hex
    var i
    var string = ''
    var uffff

    if (ch === '"') {
      while (next()) {
        if (ch === '"') {
          next()
          return string // 空字符串
        }

        if (ch === '\\') {
          next()
          if (ch === 'u') {
            uffff = 0
            for (var i = 0; i < 4; i += 1) {
              hex = parseInt(next(), 16)
              if (!isFinite(hex)) {
                break
              }

              uffff = uffff * 16 + hex
            }
            string += String.fromCharCode(uffff)
          } else if (typeof escapee[ch] === 'string') {
            string += escapee[ch]
          } else {
            break
          }
        } else {
          string += ch
        }
      }
    }
    error('Bad string')
  }

  var word = function () {
    switch (ch) {
      case 't':
        next('t')
        next('r')
        next('u')
        next('e')
        return true
      case 'f':
        next('f')
        next('a')
        next('l')
        next('s')
        next('e')
        return false
      case 'n':
        next('n')
        next('u')
        next('l')
        next('l')
        return null
    }

    error("Unexpected '" + ch + "'")
  }
  var value

  var array = function () {
    var array = []
    if (ch === '[') {
      next('[')
      white()

      if (ch === ']') {
        next(']')
        return array // 空数组
      }

      while (ch) {
        array.push(value())
        white()
        if (ch === ']') {
          next(']')
          return array
        }
        next(',')
        white()
      }
    }

    error('Bad array')
  }

  var object = function () {
    var key
    var object = {}
    if (ch === '{') {
      next('{')
      white()

      if (ch === '}') {
        next('}')
        return object // 空对象
      }

      while (ch) {
        key = string()
        white()
        next(':')

        if (Object.hasOwnProperty.call(object, key)) {
          error('Duplicate key "' + key + '"')
        }

        object[key] = value()
        white()
        if (ch === '}') {
          next('}')
          return object
        }
        next(',')
        white()
      }
    }

    error('Bad object')
  }

  value = function () {
    white()
    switch (ch) {
      case '{':
        return object()
      case '[':
        return array()
      case '"':
        return string()
      case '-':
        return number()
      default:
        return ch >= '0' && ch <= '9' ? number() : word()
    }
  }

  return value(text)
}
