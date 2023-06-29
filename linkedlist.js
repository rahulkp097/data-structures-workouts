class node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }

addnode(value){
    const newnode=new node(value);
    if(this.length==0){
        this.head=newnode;
        this.tail=newnode
    }
    else{
        this.tail.next=newnode;
        this.tail=newnode;
    }
    this.length++
}

print(){
    let current=this.head;
    while(current){
        console.log(current.value);
        current=current.next
    }
}
}


const array=[10,20,30,40,50,60];
let obj=new linkedList();
for(i=0;i<array.length;i++){
    obj.addnode(array[i]);
}

obj.print()

const newarray=[];

let current=obj.head;

while(current){
    newarray.push(current.value);
    current=current.next
}


console.log(newarray)