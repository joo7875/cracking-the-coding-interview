function checkPermutation(s1, s2) {
    if (s1.length !== s2.length) return false; // Permutations must be same length

    let map = {};

    for (let char of s1) map[char] ? map[char] += 1 : map[char] = 1;

    for (let char of s2) {
        if (map[char]) map[char]--;
        if (map[char] === 0) return false;
    }

    return true;
}

// function checkPermutation(s1, s2) {

//     return s1.length > s2.length ? permutation(s1, s2) : permutation(s2, s1);

//     function permutation(s3, s4) {
//         let map = {};

//         for (let char of s4) map[char] ? map[char] += 1 : map[char] = 1;

//         for (let char of s3) {
//             if (map[char]) map[char]--;
//             if (Object.entries(map).every(el => el[1] === 0)) return true;
//         }

//         return false;
//     }
// }

console.log(checkPermutation('aba', 'bba'));

// TC: O(s1 + s2)