function palindromePermutation(s) {
    s = s.toLowerCase().split('').filter(el => el !== ' ');

    let map = {};
    let odd = 0;

    for (let char of s) map[char] ? map[char] += 1 : map[char] = 1;

    Object.entries(map).map(el => {
        if (Number(el[1]) % 2 !== 0) odd++;
    });

    if (Object.entries(map).every(el => Number(el[1]) % 2 === 0)) return true;
    if (odd === 1) return true;

    return false;
    
}

console.log(palindromePermutation('Tact Coa'));

// TC: O(n)