function permutationsWithDups(s) {
    
    let result = [];

    recur('', s);
    return result;

    function recur(cur, remain) {
        if (remain.length === 0) result.push(cur);
        else {
            let map = {};

            for (let i = 0; i < remain.length; i++) {
                if (!map[remain.charAt(i)]) {
                    map[remain.charAt(i)] = true;
                    console.log(i, cur + remain.charAt(i), remain.slice(0, i) + remain.slice(i + 1))
                    recur(cur + remain.charAt(i), remain.slice(0, i) + remain.slice(i + 1));
                }
            }
        }

    }

}

const string = 'aab';
console.log(permutationsWithDups(string));