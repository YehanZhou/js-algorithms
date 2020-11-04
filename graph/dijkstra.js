// todo:看不懂
// dijkstra贪心算法计算原顶点到其它顶点的最短路径
const INF = Number.MAX_SAFE_INTEGER
function dijkstra(graph, src) { // 贪心算法计算原顶点到其它顶点的最短路径
    const dist = {}
    const visited = {}
    const { length } = graph

    for (let i = 0; i < length; i++) {
        // const u = minDistance(graph[v])
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i < length - 1; i++) {
        const u = minDistance(dist, visited)
        visited[u] = true
    }




}

function minDistance(dist, visited) {
    let min = INF
    let minIndex = -1
    for (let v = 0; v < dist.length; v++) {
        if(!visited[v] && dist[v] <= min) {
            min = dist[v]
            minIndex = v
        }
    }
    return minIndex
}