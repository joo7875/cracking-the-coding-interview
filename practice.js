function encode(s) {

    if (s.length === 0) return '';

    let result = '';
    let count = 1;
    let pre = s[0];

    for (let i = 1; i <= s.length; i++) {
        if (pre === s[i]) count++;
        else {
            result += `${count}${pre}`
            count = 1;
            pre = s[i];
        }
    }

    return result;
}

function decode(s) {

    if (s.length === 0) return '';

    let num = '';
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (!Number.isNaN(Number(s[i]))) num += s[i]; // if is number
        else {
            result += s[i].repeat(Number(num));
            num = '';
        }
    }

    return result;
}

const a = 'aaaabbccc'
const b = '4a2b3c'
console.log(encode(a));
console.log(decode(b));