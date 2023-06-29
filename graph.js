class graph{
    constructor(){
        this.adjacencyList={}
    }

addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=[]
        return true
    }
    return false

}

addEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return true
    }
    return false
}

removeEdge(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this. adjacencyList[vertex2]){
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=> v!=vertex2)
        this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(v=> v!=vertex1)
        return true
    }
    return false
}

removeVertex(vertex){
    if(!this.adjacencyList[vertex])return undefined
    while(this.adjacencyList[vertex].length){
        let temp=this.adjacencyList[vertex].pop()
        this.removeEdge(vertex,temp)
    }
    delete this.adjacencyList[vertex]
}

}



let obj=new graph()
obj.addVertex(10)
obj.addVertex(20)
obj.addVertex(30)
obj.addVertex(40)
obj.addVertex(50)
obj.addEdge(10,20)
obj.addEdge(30,10)
obj.removeEdge(10,20)
obj.removeVertex(10)
console.log(obj)