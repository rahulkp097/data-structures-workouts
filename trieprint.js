class node{
    constructor(){
        this.children=new Map();
        this.end=false
    }
}

class trie{
    constructor(){
        this.root=new node()
    }

addword(word){
    let current=this.root;

    for(let char of word){
        if(!current.children.has(char)){
            current.children.set(char,new node())
        }
        current=current.children.get(char)
    }
     current.end=true
}

search(word){
    let current=this.root
    for(let char of word){
        if(!current.children.has(char))return false
        current=current.children.get(char)
    }
    return current.end
}

startwith(prefix){
    let word=[]
    let current=this.root

    if(prefix== "a" && prefix =="e" && prefix== "i" && prefix== "o" && prefix== "u") return false

    else

    for(let char of prefix){
        if(!current.children.has(char)){
            return word}

        current=current.children.get(char)
    }
    this.allword(current,prefix,word)
    return word
}
allword(current,prefix,word){
    if(current.end){
        word.push(prefix)
    }
    for(let [char,child] of current.children){
        this.allword(child,prefix+char,word)
}
}
}


let obj=new trie();
obj.addword("rahul")
obj.addword("ranjith")
obj.addword("raj")
obj.addword("amal")
let word=obj.startwith("a")
for(let i=0;i<word.length;i++){
    console.log(word[i])
}