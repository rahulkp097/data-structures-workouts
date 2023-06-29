
//linked list

// class node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class stack{
//     constructor(value){
//         const newnode=new node(value);
//         this.top=newnode;
//         this.length=1
        
//     }
//  push(value){
//     const newnode=new node(value);
//     if(this.length==0){
//         this.top=newnode;
//     }
//     else {
//         newnode.next=this.top;
//     this.top=newnode

//     }
    
//     return this
// }   

// pop(){
//     if(this.length==0) return undefined
//     let temp=this.top;
//     this.top=this.top.next;
//     temp.next=null;
//     this.length--
//     return this;

// }

// print(){
//     let current=this.top;
//     while(current){
//         console.log(current.value);
//         current=current.next
//     }
// }

    
// }

// let obj=new stack(100)
// obj.push(50)
// obj.push(100)
// obj.push(150)
// obj.push(200)
// obj.pop()
// obj.print()


//Array

// class stack{
//     constructor(){
//        this.item=[]
//     }

// push(value){
//     this.item.push(value)
// }

// Pop(){
//     return this.item.pop()
// }

// peek(){
//     return this.item[this.item.length-1]
// }

// isempty(){
//     if(this.item.length>0)return false
//     return true
// }

// size(){
//     return this.item.length
// }

// print(){
//     console.log(this.item.toString())
// }


// }

// function reverse(str){
//     let newstack= new stack()
//     let i=0;
//     let revtext=""
//     while(i!==str.length){
//         newstack.push(str.charAt(i))
//         i++

//     }
//     console.log(newstack)
//     while(!stack.isempty ()){
//         revtext+=newstack.Pop()
//     }
//     return revtext
//     }
    

// let obj=new stack()
// console.log(obj.isempty())
// obj.push(10)
// obj.push(20)
// obj.push(30)
// obj.push(40)
// console.log(reverse("hello world"))
// console.log(obj.peek())




//reverse string with stack


// class Stack {
 
//     constructor(){  
//         this.elements = []; 
//     }
//     push(element){ 
//         this.elements.push(element) 
//     }
//     pop(){ 
//         if(this.elements.length === 0) return "Underflow situation"; 
//         else return this.elements.pop();
//     }
//     isEmpty(){ 
//         if(this.elements.length > 0) return false;
//         else return true;
//     }
// }

// function reverse(str){
//     //Creates a new stack
//     let stack = new Stack();
     
//     let i = 0;
//     let reversedStr = "";
//     //Adds all the characters to the stack.
//     while (i !== str.length) {
//         stack.push(str.charAt(i));
//         i++;
//     }
  
//     //Creates a reversed string by popping the stack.
//     while (!stack.isEmpty()) {
//         reversedStr += stack.pop();
//     }
//     //returns the reversed string.
//     return reversedStr;
// }

// let str="brottotype"

// console.log(reverse(str))

class stack{
    constructor(){
        this.elements=[]
    }
    
push(value){
    this.elements.push(value)
}
pop(){
    if(this.elements.length==0)return "underflow situation"
    else return this.elements.pop()
}

isempty(){
    if(this.elements.length>0)return false
    
    else return true
}
}

function rev(str){
    let newstack=new stack();
    let i=0;
    while(i!=str.length){
        newstack.push(str[i])
        i++
    }
    let newstr=""
    while(!newstack.isempty()){
        newstr+=newstack.pop()
    }
    return newstr
}

let str="rahul"

console.log(rev(str))