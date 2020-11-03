// const Colors = {
//     WHITE: 0,
//     GREY: 1,
//     BLACK: 2
// }

// function initColors(vertices) {
//     const color = {}
//     for (let i = 0; i < vertices.length; i++) {
//         color[vertices[i]] = Colors.WHITE
//     }
//     return color
// }

function depthFirstSearchVisit(u, color, adjList, callback) {
    color[u] = Colors.GREY
    if(callback) {
        callback(u)
    }
    const neighbors = adjList.get(u)
    console.log(`Discovered ${u}`)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if(color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w, color, adjList, callback)
        }
    }
    console.log(`explored ${u}`)
    color[u] = Colors.BLACK
}

function depthFirstSearch(graph, callback) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColors(vertices)

    for (let i = 0; i < vertices.length; i++) {
        const u = vertices[i]
        if(color[u] === Colors.WHITE) {
            depthFirstSearchVisit(u, color, adjList, callback)
        }
    }
}

depthFirstSearch(graph)