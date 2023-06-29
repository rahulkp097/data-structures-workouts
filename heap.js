class MaxHeap{
    constructor(){
    this.heap = []
    }
  add(value){
    this.heap.push(value)
  
    let current = this.heap.length-1;
    while(current > 0){
      let parent = Math.floor((current-1)/2);
      if(this.heap[current] < this.heap[parent]){
      break;
      }
      [this.heap[current],this.heap[parent]] = [this.heap[parent],this.heap[current]]
      current = parent;
    }
  }
  removeMax(){
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1){
      return this.heap.pop();
    }
    let max = this.heap[0]
    this.heap[0] = this.heap.pop()
    let current = 0
  
    let left = current * 2 + 1;
    let right = current * 2 + 2;
    let largest = current;
  
    while(true){
    if(left < current && this.heap[current] > this.heap[largest]){
      largest = left;
    }
    if(right < current && this.heap[current] > this.heap[largest]){
      largest = right;
    }
    if(largest === current){
      break;
    }
    [this.heap[current], this.heap[largest]] = [this.heap[largest], this.heap[current]]
    current = largest;
  }
  return max;
  }
  }
  
  let maxHeap = new MaxHeap()
  maxHeap.add(20);
  maxHeap.add(50);
  maxHeap.add(80);
  maxHeap.add(5);
  maxHeap.add(10);
  console.log(maxHeap);
  console.log(maxHeap.removeMax())
  console.log(maxHeap);