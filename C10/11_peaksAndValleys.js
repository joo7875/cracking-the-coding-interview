function peaksAndValleys(arr) {

    for (let i = 1; i < arr.length; i += 2) {
        let maxIdx = max(arr, i-1, i, i+1);
        if (i !== maxIdx) [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
        // console.log(i, maxIdx, arr)
    }

    return arr;

    function max(arr, a, b, c) {
        let len = arr.length;

        let aVal = a >= 0 && a < len ? arr[a] : -Infinity;
        let bVal = b >= 0 && b < len ? arr[b] : -Infinity;
        let cVal = c >= 0 && c < len ? arr[c] : -Infinity;

        let max = Math.max(aVal, bVal, cVal);
        
        if (max === aVal) return a;
        else if (max === bVal) return b;
        else return c;
    }

    function swap(arr, i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

const arr = [5, 3, 1, 2, 3]
console.log(peaksAndValleys(arr));

// O(n)