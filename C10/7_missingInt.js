function missingInt(arr) {

    arr = arr.sort((a, b) => a - b);
    let result = new Set();

    for (let i = 0; i <= arr[arr.length - 1]; i++) result.add(i);
    for (let n of arr) result.delete(n);
    
    return [...result];
}

const arr = [1, 6, 8, 4, 2, 3, 5, 0, 9, 20, 17, 14, 12, 11];
console.log(missingInt(arr));

// 4 000 000 000 * 8 bytes => 32 000 000 000 bytes = 32 GB
//  TC: O(arr[arr.length - 1])