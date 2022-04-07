function removeDups(list) {
    
    let cur = list.head;
    let pre = null;
    let set = new Set();

    while (cur) {
        if (set.has(cur.element)) pre.next = cur.next;
        else {
            set.add(cur.element);
            pre = cur;
        }
        cur = cur.next;
    }
    
    return list;
}

let ll = new LinkedList();
for (let el of [3, 5, 4, 3, 3, 2]) ll.add(el);

console.log(removeDups(ll));