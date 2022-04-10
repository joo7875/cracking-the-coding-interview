// function routeBetweenNodes(s, e, graph) {

//     let visited = new Set();
//     visited.add(s);
//     dfs(s);

//     return false;

//     function dfs(start) {
//         if (start === e) return true;

//         if (graph[start]) {
//             for (let node of graph[start]) {
//                 if (!visited.has(node)) {
//                     visited.add(node);
//                     dfs(node);
//                 }
//             }
//         }
//     }

// }

function routeBetweenNodes(s, e, graph) {

    let visited = new Set();
    visited.add(s);
    let queue = [s];

    while (queue.length) {
        let node = queue.shift();
        
        if (node === e) return true;

        if (graph[node]) {
            for (let el of graph[node]) {
                if (!visited.has(el)) {
                    visited.add(el);
                    queue.push(el);
                }
            }
        }
    }

    return false;
}

const graph_true = [[1], [0, 2], [3]];
const graph_false = [[1], [2], [1]];
console.log(routeBetweenNodes(0, 3, graph_false));

// TC: O(n), n = graph.length
// SC: at most O(graph.length) by using queue