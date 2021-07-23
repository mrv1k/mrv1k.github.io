---
title: temp!
---

> asd
>
> -- very deep quote

```javascript{numberLines: 42}
const meaningOfLife = 42;
```

```bash
export PATH="$PATH:$HOME/.composer/vendor/bin"

if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi
```

currently diff doesn't highlight as intended

```diff-text
diff
+ hey // highlight-line
- ho // highlight-line
```

## We

### Test

[random](https://www.random.org/)

### Embed

`embed:MaxHeap.js`

### Inline

```js
console.clear();
class MaxHeapInline {
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
    // highlight-next-line
    for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
      this._heapifyDown(i);
    }
    return this.heap;
  }
}

const heap = new MaxHeap();
```
