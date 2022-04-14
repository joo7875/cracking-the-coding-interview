function parens(n) {

    let result = [];

    recur('', n);
    return result;

    function recur(cur, remain) {

        const dir = [`(${cur})`, `${cur}()`, `()${cur}`];

        if (remain === 0) result.push(cur);
        else {
            let map = {};

            if (!map[dir[0]]) {
                map[dir[0]] = true;
                recur(dir[0], remain - 1);
            }
            if (!map[dir[1]]) {
                map[dir[1]] = true;
                recur(dir[1], remain - 1);
            }
            if (!map[dir[2]]) {
                map[dir[2]] = true;
                recur(dir[2], remain - 1);
            }
        }
    }
}

const test = 3;
console.log(parens(test));