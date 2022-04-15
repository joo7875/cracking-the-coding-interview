function groupAnagrams(a, b) {

    if (a.length !== b.length) return false;

    a = a.split('').sort().join('');
    b = b.split('').sort().join('');

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

const a = 'abcde';
const b = 'bdaec';
console.log(groupAnagrams(a, b));

// TC: O(a + b)