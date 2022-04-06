function stringRotation(s1, s2) {

    let len = s1.length;

    s2 = s2.concat(s2); // erbottlewat + erbottlewat = erbottlewaterbottlewat

    for (let i = 0; i <= len; i++) {
        if (s1 === s2.slice(i, len + i)) return true;
    }

    return false;
}

console.log(stringRotation('waterbottle', 'erbottlewat'));

// TC: O(n)