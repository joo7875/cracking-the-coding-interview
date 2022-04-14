let dp = {};

function stackOfBoxes(boxes) {
    if (boxes.length === 0) return 0;

    boxes.sort();

    let key = boxes.map(el => el.id);

    if (!dp[key]) {
        let height = 0;

        boxes.forEach(box => {
            let stackable = findStack(boxes, box);
            let curHeight = box.height + stackOfBoxes(stackable);
            height = Math.max(height, curHeight);
        });

        dp[key] = height;
    }

    return dp[key];

    function findStack(boxes, base) {
        let stack = [];

        boxes.forEach(box => {
            if (box.height < base.height && box.width < base.width && box.depth < base.depth) stack.push(box);
        });

        return stack;
    }
}

const b1 = {
    width: 1,
    height: 1,
    depth: 1,
    id: 'b1'
}

const b2 = {
    width: 2,
    height: 2,
    depth: 2,
    id: 'b2'
}

const b3 = {
    width: 3,
    height: 3,
    depth: 3,
    id: 'b3'
}

const arr = [b1, b2, b3];
console.log(stackOfBoxes(arr));

// follow-up memoization