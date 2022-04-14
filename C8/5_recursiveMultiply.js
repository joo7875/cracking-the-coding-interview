function recursiveMultiply(a, b) {
    if (a < 0 || b < 0) throw 'error: a and b should only be positive intergers';

    return a < b ? recur(b, a, {}) : recur(a, b, {});
    
    function recur(n1, n2, memo) {
        if (n2 === 0) return 0;
        if (n2 === 1) return n1;
        if (memo[n2]) return memo[n2];

        memo[n2] = n1 + recur(n1, n2 - 1, memo);

        return memo[n2];
    }
}

console.log(recursiveMultiply(3, 9));

// TC(min(a, b))