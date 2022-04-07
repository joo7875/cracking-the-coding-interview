function returnKthToLast(k, list) {
    
    let fast = list.head;
    let slow = list.head;

    for (let i = 0; i < k; i++) {
        if (fast) fast = fast.next;
    }
    if (fast === null) return list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow.next;
}

const ll = new LinkedList();
for (let el of [3, 5, 2, 1, 4]) ll.add(el);

console.log(returnKthToLast(6, ll));