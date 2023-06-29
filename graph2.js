
class Graph {
    constructor() {
        this.graph = new Map();
    }
    insertVertex(data) {
        this.graph.set(data, [])


    }
    insertIfBiDirectional(vertex, data) {
        let getValue = this.graph.get(vertex)
        getValue.push(data)


    }
    graphInsert(vertex, edge, isBiDirectional) {
        if (!this.graph.has(vertex)) {


            this.insertVertex(vertex)
        }
        if (!this.graph.has(edge)) {
            this.insertVertex(edge)
        }
        if (isBiDirectional) {
            this.insertIfBiDirectional(vertex, edge)
            this.insertIfBiDirectional(edge, vertex)
        }
        else {
            this.insertIfBiDirectional(vertex, edge)
        }

        


    }
   
   
    depthFirstSerachIterative(start) {
        let result = [];
        let visited = {}
        let stack = [start]
        let currentVertex;
        visited[start] = true
        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.graph.get(currentVertex).forEach((element) => {
                if (!visited[element]) {
                    visited[element] = true
                    stack.push(element)
                }
            })
        }
        let left = []
        for (let x of this.graph.keys()) {


            if (!result.includes(x)) {
                result.push(x)
            }
        }




        return result;
    }
    breadthFirstSearch(start) {
        let result = []
        let queue = [start]
        let visited = {}
        visited[start] = true
        while (queue.length) {
            result.push(queue.shift())
            this.graph.get(start).forEach(value => {
                if (!visited[value]) {
                    visited[value] = true
                    queue.push(value)
                }
            });
        }
        return result
    }


    display() {


        for (let i of this.graph) {
            console.log(i)
        }
    }
}
let g = new Graph()
g.graphInsert(3, 5, true)
g.graphInsert(3, 4, true)
g.graphInsert(5, 6, false)
g.graphInsert(3, 6, false)
g.graphInsert(3, 7, false)
console.log(g.depthFirstSerachIterative(5))
console.log(g.breadthFirstSearch(3))
