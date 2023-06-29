class node{
    constructor(){
        this.children=new Map();
        this.end=false
    }
}

class Trie{
    constructor(){
        this.root=new node();
    }

addword(word){
    let current=this.root
    for(let char of word){
        if(!current.children.has(char)){
            current.children.set(char,new node())
        }
        current=current.children.get(char)
    }
    current.end=true
}

search(word){
    let current=this.root;

    for(let char of word ){
        if(!current.children.has(char)){
            return false
        }
        current=current.children.get(char)
    }
    return current.end
}

startwith(prefix){
    let current=this.root;
    
    if(!prefix.length)return false

    for(let char of prefix){
        if(!current.children.has(char))return false 

        current=current.children.get(char)
        console.log(current)
    }
        
}


}


let obj=new Trie();
obj.addword("rahul")
obj.addword("Amal")
obj.addword("Sarat")
console.log(obj.search("rahul"))
console.log(obj)