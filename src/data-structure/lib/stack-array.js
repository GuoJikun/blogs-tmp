class Stack {
    constructor() {
        this.value = [];
        this.size = 0;
    }
    pop() {
        if (this.size > 0) {
            --this.size;
        }
        return this.value.pop();
    }
    push(val) {
        this.value.push(val);
        ++this.size;
    }
    size() {
        return this.size;
    }

    empty() {
        return this.size === 0;
    }

    peek() {
        if (this.empty()) {
            return undefined;
        }
        return this.value[this.size - 1];
    }

    clear() {
        this.size = 0;
        this.value = [];
    }

    toString() {
        return this.value.join();
    }
}
