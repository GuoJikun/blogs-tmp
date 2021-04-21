export class List {
  constructor() {
    this.size = 0;
    this.pos = 0;
    this.items = [];
  }
  append(element) {
    this.items[this.size++] = element;
  }
  find(element) {
    for (const i = 0; i < this.size; i++) {
      if (this.items[i] === element) {
        return i;
      }
    }
    return -1;
  }
}
