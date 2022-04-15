function sparseSearch(arr, s, left = 0, right = arr.length - 1) {

    if (arr.length === 0) return -1;
    if (left >= right) return -1;

    if (arr[left] === s) return left;
    if (arr[right] === s) return right;

    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === s) return mid;
    else if (arr[mid] === '') return sparseSearch(arr, s, left, mid - 1) || sparseSearch(arr, s, mid + 1, right);
}

const arr = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];
console.log(sparseSearch(arr, 'ball'));

// TC: best case O(logn), worst case O(n)