class maxheap{
    constructor(){
        this.heap=[]
    }

addvalue(value){
    this.heap.push(value)

    this.heapify()
}

heapify(){
    let index=this.heap.length-1;
    let value=this.heap[index]
    while(index>0){
        let parentindex=Math.floor((index-1)/2)
        let parent=this.heap[parentindex]
       
        if(value>parent)break
    
            this.heap[index]=parent;
            this.heap[parentindex]=value;
            index=parentindex

        
    }
}
}


let obj=new maxheap()
let arr=[50,80,10,30,60,100]
for(let i=0;i<arr.length;i++){
    obj.addvalue(arr[i])
}
console.log(obj)