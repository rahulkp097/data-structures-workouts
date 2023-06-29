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

bfs(v){
    let visited=[]
    let queue=[]
    queue.push(v)
    let keys=this.adjacencylist.keys()
    for(let v of keys){
        visited[v]=false
    }
    while(queue.length){
        let e=queue.shift()
        visited[e]=true
        console.log(e)
        let elist=this.adjacencylist.get(e)
        for(let element of elist){
            if(!visited[element]){
                visited[element]=true
                queue.push(element)
            }
        }
    }
}

dfs(startvertex){
    let visited=new Set()
    this.traverse(startvertex,visited)
}

traverse(vertex,visited){
    visited.add(vertex)
    console.log(vertex)
    
    for(let e of this.adjacencylist.get(vertex)){
        if(!visited.has(e)){
            this.traverse(e,visited)
        }
    }
}
}


let obj=new graph();
obj.addvertex("A")
obj.addvertex("B")
obj.addvertex("C")
obj.addvertex("D")
obj.addvertex("E")
obj.addedge("A","B")
obj.addedge("A","C")
obj.addedge("B","D")
obj.addedge("C","E")
// obj.bfs(1)
obj.dfs("A")
console.log(obj)