class TrieNode{
  constructor(){
    this.children = new Map();
    this.isEndOfWord = false;
  }
}
class Trie{
  constructor(){
    this.root = new TrieNode();
  }

addword(word){
  let current = this.root;
  for(let char of word){
    if(!current.children.has(char)){
      current.children.set(char,new TrieNode())
    }
    current = current.children.get(char)
  }
  current.isEndOfWord = true;
}
search(word){
  let current = this.root;
  for (let char of word){
    if(!current.children.has(char)){
      return false;
    }
    current = current.children.get(char)
  }
  return current.isEndOfWord;
}
startsWith(prefix){
  let word=[]
  let current= this.root;
    if(!prefix.length) return word

    for(let letter of prefix ){
        if(!current.children.has(letter)) return false
        current=current.children.get(letter)
    }
    this.printword(current,prefix,word)
    return word

}

printword(current,prefix,word){
  for(let v of current.isEndOfWord){
      word.push(v)
  }
  for(let [char,child] of current.children.get(v)){
      this.printword(child,prefix+char,word)
  }
  }
}
let searchString = new Trie()
searchString.addword("RAN")
searchString.addword("RAIN")
searchString.addword("RAINNING")
console.log(searchString)

let word=searchString.startsWith("R")
for(let i=0;i<word.length;i++){
  console.log(word[i])
}
// console.log(searchString.startsWith("RAINNI"))






