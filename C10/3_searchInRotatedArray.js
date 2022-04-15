function searchInRotatedArray(arr, target) {
    if (arr.length === 0 || !arr) return -1;

    let left = 0;
    let right = arr.length - 1;

    // sorted arr
    if (arr[left] < arr[right]) return arr.indexOf(target);

    while (left <= right) {
        let mid = Math.floor(left + (right - left));

        if (arr[mid] === target) return mid;
        
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (arr[mid] < target && target <= arr[right]) left = mid + 1;
            else right = mid - 1;
        }
    }

    return -1;
}

const arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
console.log(searchInRotatedArray(arr, 5));

// TC: O(logn)