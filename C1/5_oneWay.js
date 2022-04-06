function oneWay(s1, s2) {
    if (s1 === s2) return true;

    return s1.length > s2.length ? oneWaySub(s1, s2) : oneWaySub(s2, s1);

    function oneWaySub(s3, s4) {

        let map = new Map();

        for (let char of s3) map.set(char, map.get(char) + 1 || 1);

        for (let char of s4) {
            if (map.has(char)) map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) map.delete(char);
        }

        if (map.size === 1) return true;
        
        return false;
    }
}

console.log(oneWay('pake', 'bake'));