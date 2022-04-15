function findDuplicates(arr) {

    let set = new Set();
    let dup = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i]) && !dup.has(arr[i])) dup.add(arr[i]);
        else set.add(arr[i]);
    }

    return dup;
}

const arr = [6, 3, 3, 8, 6, 1, 2, 9, 4, 3, 4, 1];
console.log(findDuplicates(arr));