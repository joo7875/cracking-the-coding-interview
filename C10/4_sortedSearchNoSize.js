function sortedSearchNoSize(arr, x) {

    let idx = 1;
    while (elementAt(idx) !== -1 && elementAt(idx) < x) idx *= 2;

    let left = Math.floor(idx / 2);
    let right = idx;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let val = elementAt(mid);

        if (val === x) return mid;
        else if (val < x) left = mid + 1;
        else right - 1;
    }

    return -1;

    function elementAt(i) {
        if (i >= arr.length) return -1;
        return arr[i];
    }
}

const arr = [1, 3, 4, 5, 6, 7, 9, 10, 13, 14, 16, 17, 20, 25, 28, 30]; // 15
console.log(sortedSearchNoSize(arr, 3));

// TC: O(logn)