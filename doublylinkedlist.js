class node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    push(value){
        let newnode=new node(value)
        if(!this.head){
            this.head=newnode;
            this.tail=newnode;
        }
        else{
            this.tail.next=newnode;
            newnode.prev=this.tail;
            this.tail=newnode;
        }
        this.size++
    }

unshift(value){

   let  newnode=new node(value)
    if(!this.head){
        this.head=newnode;
        this.tail=newnode;
    }
    else{
        newnode.next=this.head;
        this.head=newnode

    }
    this.size++
    return this;

}
pop(){
    if(!this.head)return undefined;
    else{
        let current=this.head;
        let newtail=current
        while(current.next){
            newtail=current;
            current=current.next
        }
        this.tail=newtail
        newtail.next=null
        this.size--
        return current
    }
}

shift(){
    if(!this.head)return undefined;
    else{
        var temp=this.head;
       this.head=this.head.next
    }
    
    this.size--;
    return temp;
}





print(){
let current =this.head;
while(current){
    console.log(current.value);
    current=current.next;
}
}

}

obj=new linkedlist()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
obj.push(6)
obj.push(7)
obj.unshift(8)
obj.unshift(9)
obj.unshift(10)
obj.pop()
obj.shift()
obj.print()
