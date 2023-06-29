//linkedlist

// class node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }

// class queue{
//     constructor(value){
//         const newnode=new node(value);
//         this.first=newnode;
//         this.last=newnode;
//         this.length++
//     }
    
//  enqueue(value){
//      const newnode=new node(value);
//      if(this.length==0){
//          this.first=newnode;
//          this.last =newnode;
//      }
//      else {
//          this.last.next=newnode
//          this.last=newnode;
//      }
//      this.length++
//      return this
//  }
 
//  dequeue(){
//      let temp=this.first;
//      this.first=this.first.next
//      temp.next=null
//      this.length--
//      return temp
//  }
 
//  print(){
//      let current=this.first;
//      while(current){
//          console.log(current.value);
//          current=current.next
//      }
//  }
 
// }


// let obj=new queue(100)
// obj.enqueue(50)
// obj.enqueue(40)
// obj.enqueue(10)
// obj.dequeue()
// obj.print()


//Array

class   queue{
    constructor(){
        this.itmes=[]
    }

enqueue(value){
    this.itmes.push(value);
}

dequeue(value){
   return this.itmes.shift()
}

isempty(){
    return this.itmes.length==0;
}

peek(){
    if(!this.isempty){
        return this.itmes[0]
    }
    return null
}

size(){
    return this.itmes.length
}
print(){
   console.log(this.itmes.toString())
}
}
let obj=new queue();
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)
obj.enqueue(50)
obj.print()