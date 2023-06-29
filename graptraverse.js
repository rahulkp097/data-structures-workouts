// class graph{
//     constructor (){
//         this.adjacencylist=new Map()
//     }
// addvertex(v){
//     this.adjacencylist.set(v,[])
// }

// addedge(v,e){
//     this.adjacencylist.get(v).push(e)
//     // this.adjacencylist.get(e).push(v)
// }

// bfs(v){
//     let q=[v]
//     let visited=new Set()
//     visited[v]=true

//     while(q.length!=null){
//     let element=q.shift()
//     let ad=this.adjacencylist.get(element)
//     for(let node of ad){
//         if(!visited.has(node)){
//             visited.add(node)
//             q.push(node)
//             console.log(node)
//         }

//     }
//     }
// }

// display(){
    
//     let keys=this.adjacencylist.keys()
//     for(let i of keys){
//         console.log(i)
//     }
// }


// }


// let obj=new graph()
//  obj.addvertex("A")
//  obj.addvertex("B")
//  obj.addvertex("C")
//  obj.addvertex("D")
//  obj.addvertex("E")
//  obj.addedge("A","B")
//  obj.addedge("A","D")
//  obj.addedge("D","B")
//  obj.addedge("D","E")
//  obj.addedge("E","D")
//  obj.addedge("E","C")
//  obj.addedge("C","B")
//  obj.addedge("C","E")
//  obj.addedge("B","C")
//  obj.addedge("B","D")
//  console.log(obj.adjacencylist)
// console.log(obj.bfs("B"))
// console.log(obj)





class graph{
    constructor (){
        this.adjacencylist=new Map()
    }
addvertex(v){
    this.adjacencylist.set(v,[])
}

addvalue(v,e){
    this.adjacencylist.get(v).push(e)
    this.adjacencylist.get(e).push(v)
}

bfs(v){
    let queue=[]
    let visited=[]
    queue.push(v)
    let keys=this.adjacencylist.keys()
    for(let i of keys){
        visited[i]=false
    }

    while(queue.length){
        let e=queue.shift()
        visited[e]=true
        console.log(e)
        let elist=this.adjacencylist.get(e)
        for(let e of elist){
            if(!visited[e]){
                queue.push(e)
                visited[e]=true

            }
        }
    }
}

dfs(v){
let visited=[]
let keys=this.adjacencylist.keys();
for(let v of keys){
    visited[v]=false
}
this.traverse(v,visited)

}
 traverse(v,visited){
    visited[v]=true
    console.log(v)
    let elist=this.adjacencylist.get(v);
    for(let e of elist){
        if(!visited[e]){
            visited[e]=true;
         this.traverse(e,visited)
        }
    }
}


}





let obj=new graph()
obj.addvertex("1")
obj.addvertex("2")
obj.addvertex("3")
obj.addvertex("4")
obj.addvertex("5")
obj.addvertex("6")
obj.addvalue("1","2")
obj.addvalue("3","2")
obj.addvalue("6","5")
obj.addvalue("4","5")
obj.addvalue("6","1")
obj.bfs("1")
obj.dfs("1")
console.log(obj)