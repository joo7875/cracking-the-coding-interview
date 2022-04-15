function rankFromStream(arr, target) {
    
    arr = arr.sort((a, b) => a - b);
    let map = {};

    for (let i = 0; i < arr.length; i++) map[arr[i]] = i;

    return map[target] >= 0 ? map[target] : -1;
}

const arr = [5, 1, 4, 4, 5, 9, 7, 13, 3];
console.log(rankFromStream(arr, 4));

// TC: O(n)