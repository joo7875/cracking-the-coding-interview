class LinkedList {
    constructor(key, val) {
        this.pair = [key, val];
        this.next = null;
    }

    insert(key, val) {
        if (!this.next) this.next = new LinkedList(key, val);
        else this.next.insert(key, val);
    }

    find(key) {
        if (this.pair[0] === key) return this.pair[1];
        else if (this.next) return this.next.find(key);
        else return null;
    }

    replace(key, val) {
        if (this.pair[0] === key) this.pair = [key, val];
        else if (this.next) this.next.replace(key);
    }

    delete(key) {
        if (this.pair[0] === key) this = this.next;
        else if (this.next) this.next.delete(key);
    }
}

var getHash = (key, limit) => {
    if (typeof key !== 'string') throw 'error: key is not a string';
    else {
        let answer = 0;
        for (let i = 0; i < key.length; i++) answer += key[i];
        return answer % limit;
    }
}

class HashTable {
    constructor() {
        this.arr = [];
        this.limit = 5;
    }

    insert(key, val) {
        let hash = getHash(key, this.limit);
        if (this.arr[hash] === undefined) this.arr[hash] = new LinkedList(key, val);
        else this.arr[hash].insert(key, val);
    }

    retrieve(key) {
        let hash = getHash(key, this.limit);
        if (this.arr[hash] === undefined) throw 'key does not exist';
        else return this.arr[hash].find(key);
    }

    delete(key) {
        let hash = getHash(key, this.limit);
        if (this.arr[hash] === undefined) throw 'key does not exist';
        else this.arr[hash].delete(key);
    }
}

