function URLify(s) {
    s = s.split(' ').filter(el => el !== '').join('%20');;
    return s;
}

console.log(URLify('Mr John Smith     '));

// TC: O(n)