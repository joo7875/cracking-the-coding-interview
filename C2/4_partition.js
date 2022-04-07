function partition(p, list) {
    let l1 = new LinkedList();
    let l2 = new LinkedList();

    let cur = list.head;

    while (cur) {
        if (cur.element < p) l1.add(cur.element);
        else l2.add(cur.element);

        cur = cur.next;
    }

    if (l2) {
        let node = l2.head;

        while (node) {
            l1.add(node.element);
            node = node.next;
        }
    }

    return l1;
}

const ll = new LinkedList();
for (let el of [3, 5, 8, 5, 10, 2, 1]) ll.add(el);

console.log(partition(5, ll));