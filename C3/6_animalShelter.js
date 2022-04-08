class animalShelter {
    constructor() {
        this.dogQueue = [];
        this.catQueue = [];
        this.allQueue = []; // no need if we use "order" for each dog and cat
    }

    enqueue(type, name) {
        switch (type) {
            case 'dog': this.dogQueue.push(name); break;
            case 'cat': this.catQueue.push(name); break;
        }

        this.allQueue.push({ type, name });
    }

    dequeueDog() {
        if (!this.isEmpty('dog')) {
            let val = this.dogQueue.shift();
            this.allQueue = this.allQueue.filter(({ type, name }) => !(type === 'dog' && name === val));
        }
    }

    dequeueCat() {
        if (!this.isEmpty('cat')) {
            let val = this.catQueue.shift();
            this.allQueue = this.allQueue.filter(({ type, name }) => !(type === 'cat' && name === val));
        }
    }

    dequeueAny() {
        if (!this.isEmpty('all')) {
            let val = this.allQueue.shift();

            switch (val.type) {
                case 'dog': this.dogQueue.shift(); break;
                case 'cat': this.catQueue.shift(); break;
            }
        }
    }

    isEmpty(type) {
        switch (type) {
            case 'dog': return this.dogQueue.length === 0;
            case 'cat': return this.catQueue.length === 0;
            case 'all': return this.allQueue.length === 0;
        }
    }
}

let animal = new animalShelter();

animal.enqueue('cat', 'c');
animal.enqueue('cat', 'd');
animal.enqueue('cat', 'e');
animal.enqueue('dog', 'a');
animal.enqueue('dog', 'b');

animal.dequeueDog();
animal.dequeueAny();
animal.dequeueCat();

console.log(animal);

