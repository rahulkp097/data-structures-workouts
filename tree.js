// class tree{
//     constructor(value){
//         this.value=value
//         this.data=[]

//     }

// addvalue(node){
//     this.data.push(node);
  
// }

// print(){
//     console.log(this.data)
  
//     this.data.forEach(element => {
//         element.addvalue()
//     });


// }
// }

// const root=new tree(10)
// const Anode=new tree(20)
// const Bnode=new tree(30)
// const Cnode=new tree(40)
// const Dnode=new tree(50)

// root.addvalue(Anode)
// root.addvalue(Bnode)
// Anode.addvalue(Cnode)
// Anode.addvalue(Dnode)
// root.print()



class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function sumTree(root) {
    if (!root) {
      return 0;
    }
    return root.val + sumTree(root.left) + sumTree(root.right);
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
console.log(root)
  
  
  
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

  
  
class Tree{
    constructor(){
        this.root =null
    }

    add(data){
        const newNode = new Node(data);
        if(this.root ===null){
            this.root=newNode;
            return "node added"
        }
        let current = this.root;
        while(true) {
            let currentData = current.data;
            if(currentData>data){
                if(current.left === null){
                    current.left =  newNode
                    return "added art left"
                }
                else{
                    current= current .left
                }
            }
            else{
                if(currentData<data){
                    if(current.right === null){
                        current.node = newNode
                    return "added at right"}
                }
                else{
                    current=current.right
                }
            }
        }
        
    }
    display(){
        return this
    }
}

const tree = new Tree()
tree.add(100)
tree.add(20)
tree.add(150)
tree.add(120)
tree.add(200)
console.log(tree.display())
