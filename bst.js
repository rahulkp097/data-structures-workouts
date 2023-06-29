

class node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
    constructor(){
        this.root=null
    }

insert(value){

    let newnode=new node(value);
    if(this.root===null){
        this.root=newnode;
        return this
    }
    let temp=this.root;
    while(true){
        if(temp.value===value)return undefined
        if(value<temp.value){
            if(temp.left===null){
                temp.left=newnode;
                return this
            }
            temp=temp.left
        }
        else{
            if(temp.right===null){
                temp.right=newnode;
                return this
            }
            temp=temp.right
        }
    }
}




constain(value){
    if(this.root===null)return false
    let temp=this.root
    while(temp){
        if(value<temp.value){
            temp=temp.left;
        }
        else if(value>temp.value){
            temp=temp.right
        }
        else return true
    }
    return false
}


bfs(){
    let node=this.root;
    let queue=[];
    let arr=[];
    queue.push(node)
    while(queue.length){
        node=queue.shift();
        arr.push(node.value)
        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)
    }
    return arr
}

preorder(){
    let node=this.root
    let data=[]
    function traverse(node){
        data.push(node.value)
        if(node.left)traverse(node.left)
        if(node.right)traverse(node.right)
    }
    traverse(node)
    return data;
}

postorder(){
    let node=this.root
    let data=[]
    function traverse(node){
        if(node.left)traverse(node.left)
        if(node.right)traverse(node.right)

        data.push(node.value)
    }
    traverse(node)
    return data
}

inorder(){
    let node=this.root
    let data=[]
    function traverse(node){
        if(node.left)traverse(node.left)
        data.push(node.value)
        if(node.right)traverse(node.right)
    }
    traverse(node)
    return data
}


delete(value) {
    if (this.root === null) {
      return false; 
    }

    let parent = null;
    let current = this.root;

    while (current !== null && current.value !== value) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      return false; 
    }
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    else if (current.left === null || current.right === null) {
      let child = current.left || current.right;
      if (current === this.root) {
        this.root = child;
      } else if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    else {
      let minRight = current.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }
      this.delete(minRight.value);
      current.value = minRight.value;
    }

    return true;
  }


}


let obj=new bst()
obj.insert("A")
obj.insert("B")
obj.insert("C")
obj.insert(3)
obj.insert(8)
obj.insert(20)
obj.insert(16)
console.log(obj.constain(6))
console.log(obj.root)
console.log(obj.bfs())
console.log(obj.preorder())
console.log(obj.postorder())
console.log(obj.inorder())
