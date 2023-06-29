class graph{
    constructor(){
        this.adjacencylist=new Map()
    }

addvertex(v){
    this.adjacencylist.set(v,[])

}
addedge(v,e){
    this.adjacencylist.get(v).push(e)
    this.adjacencylist.get(e).push(v)
}

// findcycle(){
//     let visited=new set()
//     let keys=this.adjacencylist.keys()

//     for(let e of keys){
//         if(!visited.has(e) && this.dfshascycle(e,visited,null)){
//             return true;
//         }
//     }
//     return false
// }

// dfshascycle(e,visited,parent){
//     visited.add(e)
//     for(let adj of this.adjacencylist())
// }

hasCycle() {
    const visited = new Set();
    for (let v of this.adjacencylist.keys()) {
      if (!visited.has(v) && this.dfsHasCycle(v, visited, null)) {
        return true;
      }
    }
    return false;
  }
  
  dfsHasCycle(v, visited, parent) {
    visited.add(v);
    for (let adj of this.adjList.get(v)) {
      if (!visited.has(adj)) {
        if (this.dfsHasCycle(adj, visited, v)) {
          return true;
        }
      } else if (adj !== parent) {
        return true;
      }
    }
    return false;
  }
}