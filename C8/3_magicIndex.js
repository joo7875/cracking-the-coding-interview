// not distinct code

// function magicIndex(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2);

//         if (mid === arr[mid]) return mid;
//         else if (mid < arr[mid]) right = mid - 1;
//         else left = mid + 1;
//     }

//     return false;
// }

// function magicIndex(arr, left = 0, right = arr.length - 1) {

//     if (right < left) return false;

//     let mid = Math.floor(left + (right - left) / 2);

//     if (mid === arr[mid]) return mid;
//     else if (mid < arr[mid]) return magicIndex(arr, left, mid - 1);
//     else return magicIndex(arr, mid + 1, right);
// }


// distinct code

function magicIndex(arr, left = 0, right = arr.length - 1) {

    if (right < left) return -1;

    let mid = Math.floor(left + (right - left) / 2);
    let midval = arr[mid];

    if (mid === midval) return mid;
    
    let leftIdx = Math.min(midval, mid - 1);
    let l = magicIndex(arr, left, leftIdx);
    console.log('l', l)
    if (l >= 0) return l;

    let rightIdx = Math.max(midval, mid + 1);
    let r = magicIndex(arr, rightIdx, right);
    console.log('r', r)
    
    return r;
}

// const arr = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]; // all distinct
// const arr = [-10, -5, 2, 2, 2, 3, 4, 5, 9, 12, 13]; // not distinct
const arr = [5, 5, 5, 5, 5, 5, 5, 5];
console.log(magicIndex(arr));

// TC: O(logn)