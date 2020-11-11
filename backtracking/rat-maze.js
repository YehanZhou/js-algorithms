function ratInMaze(maze) {
    const solution = []
    for (let i = 0; i < maze.length; i++) {
        solution[i] = []
        for (let j = 0; j < maze[i].length; j++) {
            solution[i][j] = 0
        }
    }
    if (findPath(maze, 0, 0, solution) === true) {
        return solution
    }
    return 'not_found'
}

function findPath(maze, x, y, solution) {
    const n = maze.length
    const m = maze[0].length
    if (x === n - 1 && y === m - 1) { // 终点永远为1
        solution[x][y] = 1
        return true
    }
    if(isSafePath(maze, x, y)) {
        solution[x][y] = 1
        if(findPath(maze, x+1, y, solution)) return true
        if(findPath(maze, x, y+1, solution)) return true
        solution[x][y] = 0
        return false
    }
    return false
}

function isSafePath(maze, x, y) {
    const n = maze.length
    const m = maze[0].length
    if(x>=0 && y>=0 && x<n && y<m && maze[x][y] !== 0) {
        return true
    }
    return false
}