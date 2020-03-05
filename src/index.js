const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' ',
};

function decode(expr) {
    let sectors = [];
    let decodeAnswer = [];
    expr = expr.split('');

    if (expr.length % 10 != 0) return "error";

    for (let i = 0; i < expr.length; i = i + 10) {
        sectors.push(expr.slice(i, i + 10));
    }

    for (let x = 0; x < sectors.length; x++) {
        decodeAnswer.push(MORSE_TABLE[decoder(sectors[x].join(''))]);
    }


    function decoder(str) {
        if (str == "**********") return ' ';
        let decode = [];
        for (let j = 0; j < str.length; j = j + 2) {
            if (str[j] + str[j + 1] == '00') decode.push('');
            if (str[j] + str[j + 1] == '10') decode.push('.');
            if (str[j] + str[j + 1] == '11') decode.push('-');
        }
        return decode.join('');
    }

    return decodeAnswer.join('');
}

module.exports = {
    decode
}