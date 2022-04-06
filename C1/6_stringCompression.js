function stringCompression(s) {
    let compressed = [];
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === s[i+1]) count++;
        else {
            compressed.push(s[i] + count);
            count = 1;
        }
    }
    
    return compressed.join('');
}

console.log(stringCompression('a'));