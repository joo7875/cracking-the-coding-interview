class CircularArray {
	constructor() {
		this.arr = [];
		this.front = null;
		this.back = null;
	}

	rotate() {
		if (this.arr.length > 0) {
			this.front = (this.front + 1) % this.arr.length;
			this.back = (this.back + 1) % this.arr.length;
		}
	}

	push(val) {
		if (this.arr.length === 0) {
			this.arr.push(val);
			this.front = 0;
			this.back = 0;
		}
		else if (this.front <= this.back) {
			this.arr.push(val);
			this.back += 1;
		}
		else {
			this.arr = this.arr.slice(0, this.back + 1).concat([val]).concat(this.arr.slice(this.front));
		}
	}

	pop() {
		if (this.arr.length === 0) return;
		else if (this.front <= this.back) {
			let answer = this.arr.pop();
			this.back -= 1;

			return answer;
		}
		else {
			let answer = this.arr[this.back];
			this.arr = this.arr.slice(0, this.back).concat(this.arr.slice(this.front));
			this.back -= 1;

			return answer;
		}
	}
}

let ca = new CircularArray();
ca.push(1);
ca.push(2);
ca.push(3);
ca.push(4);
ca.push(5);
ca.rotate(); // 0 4
ca.rotate(); // 1 0

console.log(ca.arr, ca.front, ca.back); // 2 1
console.log(ca.pop());