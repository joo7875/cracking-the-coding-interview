function sumLists(l1, l2) {

    let node1 = l1.head;
    let node2 = l2.head;

    let result = [];
    let carry = 0;

    while (node1 && node2) {
        
        let v1 = node1.element;
        let v2 = node2.element;

        let sum = v1 + v2 + carry;

        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }

        result.push(sum);

        node1 = node1.next;
        node2 = node2.next;
    }

    if (node1) {
        result.push(node1.element);
        node1 = node1.next;
    }

    if (node2) {
        result.push(node2.element);
        node2 = node2.next;
    }

    return result.reverse().join('');
}

const l1 = new LinkedList();
for (let el of [7, 1, 6]) l1.add(el);

const l2 = new LinkedList();
for (let el of [5, 9, 2]) l2.add(el);

console.log(sumLists(l1, l2));