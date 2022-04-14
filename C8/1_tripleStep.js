function tripleStep(n, memo = {}) {
    if (n < 0) return 0;
    if (n === 0) return 1;

    if (memo[n]) return memo[n];

    memo[n] = tripleStep(n-1, memo) + tripleStep(n-2, memo) + tripleStep(n-3, memo);

    return memo[n];
}

console.log(tripleStep(4));

// TC: O(n)