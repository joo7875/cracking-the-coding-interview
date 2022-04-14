// function permutationsWithoutDups(s) {

//     let seen = new Set();
//     let result = [];

//     recur([]);

//     return result;

//     function recur(subset) {
//         if (subset.length === s.length) result.push(subset);

//         for (let i = 0; i < s.length; i++) {
//             if (!seen.has(s[i])) {
//                 seen.add(s[i]);
//                 recur([...subset, s[i]]);
//                 seen.delete(s[i]);
//             }
//         }
//     }
// }

function permutationsWithoutDups(s) {
    let result = [];

    recur('', s);
    return result;

    function recur(cur, remain) {
        if (remain.length === 0) result.push(cur);
        else {
            for (let i = 0; i < remain.length; i++) {
                // console.log(i, cur + remain.charAt(i), remain.slice(0, i) + remain.slice(i + 1))
                recur(cur + remain.charAt(i), remain.slice(0, i) + remain.slice(i + 1));
            }
        }
    }
}

const string = 'abc';
console.log(permutationsWithoutDups(string));