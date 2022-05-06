function permutations(letters) {
    
    let seen = new Set();
    let result = [];
    dfs([]);
    
    return result;
    
    function dfs(subset) {
        if (subset.length === letters.length) result.push(subset.join(''));
        
        for (let i = 0; i < letters.length; i++) {
            if (!seen.has(i)) {
                seen.add(i);
                dfs([...subset, letters[i]]);
                seen.delete(i);
            }
        }
    }
}

// console.log(permutations('abc'));

 var letterCombinations = function(digits) {
    if (!digits || digits.length === 0) return [];
    
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    
    const result = [];
    
    dfs(0, '');
    return result;
    
    function dfs(i, s) {
        if (i === digits.length) {
            result.push(s);
            return;
        }
        
        for (let c of map[digits[i]]) dfs(i + 1, s + c);
    }
};

// console.log(letterCombinations('23'));

 var subsets = function(nums) {
    let result = [];
    let stack = [];
    
    dfs(0);
    
    return result;
    
    function dfs(i) {
        if (i === nums.length) {
            result.push([...stack]);
            return;
        }
        
        stack.push(nums[i]);
        dfs(i + 1);
        
        stack.pop();
        dfs(i + 1);
    }
};

console.log(subsets([1, 2, 3]));