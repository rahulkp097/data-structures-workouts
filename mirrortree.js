class Tree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
    
height(root){
    if(root==null)return false
    
    let left= this.height(root.left)
    let right=this.height(root.right)
    
    return Math.max(left,right)+1
}
mirror(root){
    if(root==null) return 
    
  let temp=root.left
    root.left=root.right
    root.right=temp
    
    this.mirror(root.left)
    this.mirror(root.right)
    return root
}


}

let obj=new Tree()
let root=new Tree(10)
root.left=new Tree(50)
root.right=new Tree(60)
root.left.right=new Tree(60)
root.left.right.left=new Tree(60)
root.right.left=new Tree(60)

console.log(root)
console.log(obj.height(root))
obj.mirror(root)

console.log(root)