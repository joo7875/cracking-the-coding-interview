let dp = {};

function countEval(bool, result) {

    if (bool.length % 2 === 0) return 'your expression is a bit strange. are you sure it\'s correct?';
    if (bool.length === 1) return eval(bool) === result ? 1 : 0;
    
    let key = `${bool}:${result}`;

    if (!dp[key]) {
        let count = 0;
        let left, right;

        for (let i = 1; i < bool.length; i += 2) {
            left = bool.slice(0, i);
            right = bool.slice(i + 1);

            if (eval('0' + bool[i] + '0') ===  result) count += countEval(left, 0) * countEval(right, 0);
            if (eval('0' + bool[i] + '1') ===  result) count += countEval(left, 0) * countEval(right, 1);
            if (eval('1' + bool[i] + '0') ===  result) count += countEval(left, 1) * countEval(right, 0);
            if (eval('1' + bool[i] + '1') ===  result) count += countEval(left, 1) * countEval(right, 1);
        }

        dp[key] = count;
    }

    return dp[key];
}

console.log(countEval('0&0&0&1^1|0', 1)); // 10