function sortedMerge(a, b, countA, countB) {

    for (let i = countA, j = 0; i < countA + countB; i++) a[i] = b[j++];
    return a.sort((a,b) => a - b);
}

const a = [3, 8, 20];
const b = [1, 5, 7, 55];
console.log(sortedMerge(a, b, 3, 4));

// TC: O(countA + countB)