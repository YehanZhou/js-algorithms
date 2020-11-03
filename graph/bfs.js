const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

function initColors(vertices) {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}

function breadthFirstSearch(graph, firstVertex, callback) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const queue = new Queue()
    const color = initColors(vertices)
    queue.enqueue(firstVertex)

    while(!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        console.log(`Discovered ${u}`)
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if(color[w] === Colors.WHITE) {
                queue.enqueue(w)
                color[w] = Colors.GREY
            }
        }
        console.log(`explored ${u}`)
        color[u] = Colors.BLACK
        if(callback) {
            callback(u)
        }
    }
}

function BFS(graph, firstVertex) { // 计算开始顶点到所有顶点的最短路径
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const queue = new Queue()
    const color = initColors(vertices)
    queue.enqueue(firstVertex)

    const distances = {}
    const pres = {}

    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0
        pres[vertices[i]] = null        
    }

    while(!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i]
            if(color[w] === Colors.WHITE) {
                distances[w] = distances[u] + 1
                pres[w] = u
                queue.enqueue(w)
                color[w] = Colors.GREY
            }
        }
        color[u] = Colors.BLACK
    }

    return {
        distances,
        pres
    }
} 

console.log('********* bfs with callback ***********')

const printVertex = (value) => console.log('Visited vertex: ' + value)

breadthFirstSearch(graph, myVertices[0])

console.log('********* sorthest path - BFS ***********')
const shortestPathA = BFS(graph, myVertices[0])
console.log(shortestPathA.distances)
console.log(shortestPathA.pres)

const formVertex = myVertices[0]
for (let i = 0; i < myVertices.length; i++) {
    const toVertex = myVertices[i]
    const stack = new Stack()
    for(let v = toVertex; v != formVertex; v = shortestPathA.pres[v]) {
        stack.push(v)
    }
    let s = formVertex
    while(!stack.isEmpty()) {
        s += '-' + stack.pop()
    }
    console.log(s)
}