function loopDetection(list) {
    
    let slow, fast;
    slow = fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) break;
    }

    if (!fast && !fast.next) return false; // no cycle

    slow = list.head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}

const ll = new LinkedList();
for (let el of [1, 2, 3, 4, 5, 3]) ll.add(el);

console.log(loopDetection(ll));

// TC: O(n)