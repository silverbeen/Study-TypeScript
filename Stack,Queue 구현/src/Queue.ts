class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
const stringQueue = new Queue<string>();

numberQueue.push(1);
stringStack.push("a");
