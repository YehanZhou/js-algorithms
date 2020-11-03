class Graph {
    constructor(isDirected = false){
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Dictionary()
    }

    addVertex(v) {
        if(!this.vertices.includes(v)) {
            this.vertices.push[v]
            this.adjList.set(v, [])
        }
    }

    addEdge(a, b) {
        if(!this.vertices.includes(a)) {
            this.vertices.push(a)
        }
        if(!this.vertices.includes(b)) {
            this.vertices.push(b)
        }
        this.adjList.get(a).push(b)
        if(!this.isDirected) {
            this.adjList.get(b).push(a)
        }
    }

    getVertices() {
        return this.vertices
    }

    getAdjList() {
        return this.adjList
    }

    toString() {
        return this.adjList.toString()
    }
}

const graph = new Graph()

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log('********* printing graph ***********')

console.log(graph.toString())