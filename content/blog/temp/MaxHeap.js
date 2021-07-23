console.clear();

class MaxHeapFromFile {
  constructor() {
    // highlight-line
    this.heap = [];
  }
  add(num) {
    this.heap.push(num);
    if (this.heap.length < 2) return;
    this._heapifyUp(this.heap.length - 1);
  }
  insert(num) {
    this.add(num);
  }
  getMax() {
    return this.heap[0] ?? null;
  }
  removeMax() {
    return this.remove();
  }
  remove() {
    if (this.heap.length < 2) {
      return this.heap.shift() ?? null;
    }

    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this._heapifyDown(0);
    return max;
  }
  _heapifyUp(index) {
    if (index < 1) return;

    const parent = Math.floor((index - 1) / 2);

    if (this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      this._heapifyUp(parent);
    }
  }

  _heapifyDown(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let largest = index;

    if (this.heap[left] && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (this.heap[right] && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this._heapifyUp(largest);
    }
  }
  buildHeapUp(array) {
    this.heap = [];
    array.forEach((number) => {
      this.insert(number);
    });
    return this.heap;
  }
  buildHeapDown(array) {
    this.heap = array.slice();
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this._heapifyDown(i);
    }
    return this.heap;
  }
}

const heap = new MaxHeap();
// hide-next-line
