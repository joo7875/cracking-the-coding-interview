function deleteMiddleNode(k, list) {

    let cur = list.head.next;
    let pre = null;

    while (cur && cur.next) {
        if (cur.element === k) pre.next = cur.next;
        else pre = cur;

        cur = cur.next;
    }

    return list;
}

let ll = new LinkedList();
for (let el of [3, 5, 4, 3, 1, 2]) ll.add(el);

console.log(deleteMiddleNode(3, ll));