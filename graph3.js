class graph{
    constructor(){
    this.adjacencyList=new Map()
}

addvertex(v){
    this.adjacencyList.set(v,[]);
}

addEdge(v,e){
    this.adjacencyList.get(v).push(e)
    this.adjacencyList.get(e).push(v)
}

printgraph(){

    let allkeys=this.adjacencyList.keys();

    for(let i of allkeys){
        let getvalues=this.adjacencyList.get(i)
        let conc=""

        for( let j of getvalues){
            conc+=j+""
            console.log(i+"->"+conc);
        }
    }

}


}


let obj=new graph()
obj.addvertex("A")
obj.addvertex("B")
obj.addvertex("C")
obj.addvertex("D")
obj.addvertex("F")
obj.addvertex("G")
obj.addEdge('A','C')
obj.addEdge('A','B')
obj.addEdge('A','D')
console.log(obj)
// obj.printgraph()