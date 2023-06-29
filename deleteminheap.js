class minheap{
    constructor(){
        this.data=[]
    }
addvalue(value){
    this.data.push(value)
    this.heapify()
}

heapify(){
    let index=this.data.length-1;
    let value=this.data[index]
    
    while(index>0){
        let parentindex=Math.floor((index-1)/2)
        let parent=this.data[parentindex]
        if(value>parent)break
        
        [this.data[index],this.data[parentindex]]=[this.data[parentindex],this.data[index]]
        index=parentindex
    }
    
}

deletemin(){
    if(this.data.length==0)return 
    
    let minelement=this.data[0]
    let lastelement=this.data.pop()
    
    if(this.data.length>0){
        this.data[0]=lastelement
        
        let currentindex=0
        let heapsize=this.data.length
        
        while(true){
            let leftindex=2*currentindex+1
            let rightindex=2*currentindex+2
            let smallestindex=currentindex
            
        if(leftindex<heapsize &&  this.data[leftindex] < this.data[rightindex]){
            smallestindex=leftindex
        }
        if(rightindex<heapsize && this.data[rightindex]<this.data[smallestindex]){
            smallestindex=rightindex
        }
        
        if(smallestindex==currentindex)break;
        
        [this.data[smallestindex],this.data[currentindex]]=
        [this.data[currentindex],this.data[smallestindex]]
        
        currentindex=smallestindex
        }
    }
    return minelement
}

}

let arr=[50,10,30,40,90,5]

let obj=new minheap();
for(let i=0;i<arr.length;i++){
    obj.addvalue(arr[i])
}
obj.deletemin()

console.log(obj)