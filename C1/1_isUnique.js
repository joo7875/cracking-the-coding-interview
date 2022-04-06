function isUnique(s) {

    if (s.length > 128) return false; // In case string s is ASCII

    let set = new Set();
    
    for (let char of s) {
        if (set.has(char)) return false;
        set.add(char);
    }

    return true;
}

console.log(isUnique('aaa'));

// TC: O(n) or O(c)
// TC: O(min(n, c)), c is size of characters set

// SP: O(c)