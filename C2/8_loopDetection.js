function loopDetection(list) {
    
    let slow, fast;
    slow = fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) return true;
    }

    return false;
}

const ll = new LinkedList();
for (let el of [1, 2, 3, 4, 5, 3]);
console.log(loopDetection(ll));