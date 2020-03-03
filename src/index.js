const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
}

function decode(expr) {
    let res = ''
    let ten = 10

    while (expr.length >= ten) {
        let letter = expr.slice(0, ten)
                         .replace(/00/g, '')
                         .replace(/10/g, '.')
                         .replace(/11/g, '-')
                         .replace('**********', ' ')

       
        if (letter !== ' ') {
          res += MORSE_TABLE[letter]
        } else {
          res += ' '
        }

        expr = expr.slice(ten)
    }

    return res
}

module.exports = {
    decode
}
