function buildOrder(projects, graph) {

    let map = {};
    let order = {};
    let seen = new Set();
    let queue = [];

    for (let [x, y] of graph) {
        map[x] ? map[x].push(y) : map[x] = [y];
        order[y] ? order[y] += 1 : order[y] = 1;
    }

    for (let p of projects) {
        if (!order[p]) queue.push(p); // node that doesn't have incoming element
    }

    while (queue.length) {
        let node = queue.shift();

        if (map[node]) {
            for (let el of map[node]) {
                queue.push(el);
            }
        }

        if (!seen.has(node)) seen.add(node);
    }

    return seen.size === projects.length ? [...seen] : null;
}

// const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// const dependancies = [['a','d'], ['f','b'], ['b','d'], ['f','a'], ['d','c']];

const projects = ['a', 'b', 'c'];
const dependancies = [['a','b'], ['a','c'], ['b','a']];

console.log(buildOrder(projects, dependancies));