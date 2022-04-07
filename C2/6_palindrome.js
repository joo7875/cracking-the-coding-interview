function palindrome(list) {
    
    let cur = list.head;
    let head = '';
    let tail = '';

    while (cur) {
        head = head + cur.element;
        tail = cur.element + tail;

        cur = cur.next;
    }

    return head === tail;
}

const ll = new LinkedList();
for (let el of [3, 2, 1, 2, 3]) ll.add(el);
console.log(palindrome(ll));