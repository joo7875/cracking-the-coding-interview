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

// console.log(subsets([1, 2, 3]));

function questionmark(s, target) {

    if (!s || s.length === 0) return false;

    s = s.split('???');
    let sum = 0;

    for (let str of s) {
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) sum += Number(str[i]);
        }
    }

    return sum === target;
}

// console.log(questionmark('arrb6???oiuqwer???hhh8?', 10));


 var numEnclaves = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    const dir = [[0,1],[1,0],[-1,0],[0,-1]];
    
    let result = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let op = dfs(i, j, 0);
                if (op !== -Infinity) result += op;
            }
        }
    }
    
    return result;
        
    function dfs(i, j, count) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return count;
        if ((i === 0 || j === 0 || i === m - 1 || j === n - 1) && grid[i][j] === 1) count = -Infinity;
        
        count++;
        grid[i][j] = 0;
        
        for (let [dx, dy] of dir) {
            count = dfs(i + dx, j + dy, count);
        }
        
        return count;
    }
};

const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
// console.log(numEnclaves(grid));


// Write a function "compress" that, given an alphabetic string, returns a compressed version of the string that is able to be decompressed back into the original string.

// compress(DOOR)
// output: DO2R

function compress(input) {

    if (!input || input.length === 0) return -1;

    let result = '';
    let pointer = 0;
    let count = 1;

    for (let i = 1; i < input.length; i++) {

        if (input[pointer] !== input[i]) {
            result += input[pointer];
            
            if (count !== 1) {
                result += count;
                count = 1;
            }
            pointer = i;
        } 
        else count++;
    }

    result += input[pointer];
    
    if (pointer < input.length - 1) result += (input.length - pointer);

    return result;
}

console.log(compress('DDOOORRRR'));