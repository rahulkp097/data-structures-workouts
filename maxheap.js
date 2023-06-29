class maxHeap{
    constructor(){
        this.array = new Array()
    }

    insert(element){
        this.array.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.array.length-1
       
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.array[parentIndex]<this.array[index]){
                [this.array[parentIndex],this.array[index]] = [this.array[index],this.array[parentIndex]]
            }
            else{
                break;
            }
           index = parentIndex
        }
    }

 delete(){
    if(this.array.length ===0) return "Empty array";

    let length = this.array.length - 1;
    [this.array[length],this.array[0]] = [this.array[0],this.array[length]]
    this.array.pop();
    this.sinkDown();
 }

 sinkDown(){
    let node = 0;
    let lc,rc;

    while (node <= this.array.length - 1){
        rc = 2 * node + 2;
        lc = 2 *node +1

    if(this.array[node]<this.array[rc] || this.array[node]<this.array[lc]){
        if(this.array[rc]<this.array[lc]){
            [this.array[node],this.array[lc]] = [this.array[lc] , this.array[node]]
            node = lc;
        }
      else {
        [this.array[node],this.array[rc] ] = [this.array[rc] , this.array[node]]
    node = rc;  
    }
    }
    else{
       break;
   }
}
 }
}
let maxheap = new maxHeap();
maxheap.insert(10)
maxheap.insert(100)
maxheap.insert(1000);
maxheap.insert(10000);
maxheap.insert(100000)
console.log(maxheap.array)
maxheap.delete()
console.log(maxheap.array)
