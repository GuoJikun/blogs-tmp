export class Queue {
  constructor() {
    this.resp = [];
    this.size = 0;
  }
  shift() {
    if (this.size > 0) {
      --this.size;
    }
    return this.resp.shift();
  }
  push() {
    this.resp.push();
    ++this.size;
  }
  size() {
    return this.size;
  }

  empty() {
    return this.size === 0;
  }
}
