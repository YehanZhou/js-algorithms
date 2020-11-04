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

// 顶点u的发现时间--d[u]
// 顶点u的完成时间--f[u]
// 顶点u的前溯顶点--p[u]
function DFSVisit(u, color, d, f, p, time, adjList) {
    color[u] = Colors.GREY
    if(callback) {
        callback(u)
    }
    const neighbors = adjList.get(u)
    // console.log(`Discovered ${u}`)
    d[u] = ++time.count
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        p[w] = u 
        if(color[w] === Colors.WHITE) {
            DFSVisit(w, color, d, f, p, time, adjList)
        }
    }
    // console.log(`explored ${u}`)
    f[u] = ++time.count
    color[u] = Colors.BLACK
}

function DFS(graph) {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initColors(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = { count: 0 }
    for (let i = 0; i < vertices.length; i++) {
        d[vertices[i]] = 0
        f[vertices[i]] = 0        
        p[vertices[i]] = null        
    }
    for (let i = 0; i < vertices.length; i++) {
        const u = vertices[i]
        if(color[u] === Colors.WHITE) {
            DFSVisit(u, color, d, f, p, time, adjList)
        }
    }
    return {
        discovery: d,
        finish: f,
        pres: p
    }
}