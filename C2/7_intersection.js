function intersection(l1, l2) {

    let head1 = l1;
    let head2 = l2;

    while (head1 !== head2) {
        head1 = head1 !== null ? head1.next : l2;
        head2 = head2 !== null ? head2.next : l1;

        if (head1 !== null && head2 !== null && head1.element === head2.element) {
            return head1.element;
        }
    }

}

const l1 = new LinkedList();
const l2 = new LinkedList();

for (let el of [1, 3, 5, 7, 8]) l1.add(el);
for (let el of [2, 5, 7, 8]) l2.add(el);

console.log(intersection(l1.head, l2.head));

// TC: O(l1 + l2)