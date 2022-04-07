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

    node1 ? calculate(node1, carry) : calculate(node2, carry);

    if (carry) result.push(carry);

    return result.reverse().join('');

    function calculate(node, carry) {
        while (node) {
            let sum = node.element + carry;

            if (sum > 9) {
                carry = 1;
                sum -= 10;
            }

            result.push(sum);
            node = node.next;
        }
    }
}

const l1 = new LinkedList();
for (let el of [9, 9, 9, 9, 9]) l1.add(el);

const l2 = new LinkedList();
for (let el of [9, 9, 9]) l2.add(el);

console.log(sumLists(l1, l2));

// TC: O(l1 + l2)