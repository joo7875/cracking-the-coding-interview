function mergeSort(arr) {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);

    
    function merge(left, right) {
        let result = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) result.push(left.shift());
            else result.push(right.shift());
        }

        return result.concat(left.slice().concat(right.slice()));
    }
}

// const file = [6, 3, 4, 7, 9, 2, 1];
const file = ['a', 'f', 'r', 's', 'c', 'd'];
console.log(mergeSort(file));

// TC: O(nlogn)