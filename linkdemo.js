// // Construct Single Node
// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   // Create/Get/Remove Nodes From Linked List
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     // Insert first node
//     insertFirst(data) {
//       this.head = new Node(data, this.head);
//       this.size++;
//     }
  
//     // Insert last node
//     insertLast(data) {
//       let node = new Node(data);
//       let current;
  
//       // If empty, make head
//       if (!this.head) {
//         this.head = node;
//       } else {
//         current = this.head;
  
//         while (current.next) {
//           current = current.next;
//         }
  
//         current.next = node;
//       }
  
//       this.size++;
//     }
  
//     // Insert at index
//     insertAt(data, index) {
//       //  If index is out of range
//       if (index > 0 && index > this.size) {
//         return;
//       }
  
//       // If first index
//       if (index === 0) {
//         this.insertFirst(data);
//         return;
//       }
  
//       const node = new Node(data);
//       let current, previous;
  
//       // Set current to first
//       current = this.head;
//       let count = 0;
  
//       while (count < index) {
//         previous = current; // Node before index
//         count++;
//         current = current.next; // Node after index
//       }
  
//       node.next = current;
//       previous.next = node;
  
//       this.size++;
//     }
  
//     // Get at index
//     getAt(index) {
//       let current = this.head;
//       let count = 0;
  
//       while (current) {
//         if (count == index) {
//           console.log(current.data);
//         }
//         count++;
//         current = current.next;
//       }
  
//       return null;
//     }
  
//     // Remove at index
//     removeAt(index) {
//       if (index > 0 && index > this.size) {
//         return;
//       }
  
//       let current = this.head;
//       let previous;
//       let count = 0;
  
//       // Remove first
//       if (index === 0) {
//         this.head = current.next;
//       } else {
//         while (count < index) {
//           count++;
//           previous = current;
//           current = current.next;
//         }
  
//         previous.next = current.next;
//       }
  
//       this.size--;
//     }
  
//     // Clear list
//     clearList() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     // Print list data
//     printListData() {
//       let current = this.head;
  
//       while (current) {
//         console.log(current.data);
//         current = current.next;
//       }
//     }
//   }
  
//   const ll = new LinkedList();
  
//   ll.insertFirst(100);
//   ll.insertFirst(200);
//   ll.insertFirst(300);
//   ll.insertLast(400);
//   ll.insertAt(500, 3);
  
//   // ll.clearList();
//   // ll.getAt(2);
  
//   ll.printListData();


class node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class linkedlist{
    constructor (){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
push(value){
    const newnode=new node(value)
    if(!this.head){
        this.head=newnode;
        this.tail=this.head;
    }
    else{
        this.tail.next=newnode;
        this.tail=newnode;
    }
    this.size++
    this.size++
}

unshift(value){
    const newnode=new node(value)
    if(!this.head){
        this.head=newnode;
        this.tail=this.head;
    }
    else{
        newnode.next=this.head
        this.head=newnode;
    
        
    }
    this.size++;
    return this;
}
pop() {
    if(!this.head)return undefined
    let current=this.head;
    let newtail=current;
    while(current.next){
       newtail=current
        current=current.next;
    }
    this.tail=newtail;
    this.tail.next=null;
    this.size--
    if(this.size==0){
        this.head=0;
        this.tail=0;
        
    }return current;
}

shift(){
    if(!this.head)return undefined;

    let temp=this.head;
    this.head=this.head.next;
    this.size--

}

get(index){
    if(index<0 || index >=this.length-1) return undefined;
    let temp=this.head;
    for(let i=0;i<index;i++){
        temp=temp.next;
    }return temp;
}

set(index,val){
    if(index<0 || index >=this.length){
        return undefined
    }
    let current=this.get(index);
        current.value=val;
        return true
    

}
insert(index, value){
    if(index<0 || index >=this.length)return undefined;
    if(index==0)return this.unshift(value);
    if(index==this.length-1) return this.push(value);

    let newnode=new node(value)
    let prev =this.get(index-1);
    let temp=prev.next;
    newnode.next=temp;
    prev.next=newnode
    this.size++
    return this

}

remove(index){
    if(index<0 || index >=this.length)return undefined;
    if(index===0)return this.shift();
    if(index===this.length-1)return this.pop()

   let  prev=this.get(index-1)
   let temp=prev.next;
   prev.next=temp.next;
   temp.next=null 
   this.size--
   return temp


}



fromarray(array)
{
for(let i=array.length-1;i>=0;i--){
    let newnode=new node(array[i])
    newnode.next=this.head;
    this.head=newnode;
    this.size++
}
return this
}

reverse(){
    let node=this.head;
    this.head=this.tail;
    this.tail=node;
    let next;
    let prev=null
    for(let i=0;i<this.size;i++){
       next=node.next;
        node.next=prev
        prev=node;
        node=next;
    }
    return this
}


print(){
let current=this.head;
    while(current){
        console.log(current.value);
        current=current.next;
    }
}


    
}
const array=[1,2,3,4,5]
let obj = new linkedlist();
// obj.push(50)
// obj.push(100)
// obj.push(150)
obj.unshift(500)
obj.unshift(400)
obj.unshift(300)
obj.unshift(200)
// obj.set(2,1000)
// obj.insert(2,2000)
// obj.remove()
// obj.fromarray(array)
obj.reverse();
obj.print()
