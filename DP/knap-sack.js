function knapSack(values, weights, capital) {
    const n = values.length
    let ks = []
    for (let i = 0; i < n; i++) {
        ks[i] = []
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= capital; j++) {
            if(i === 0 || j === 0) {
                ks[i][j] = 0
            } else if (weights[i-1] <= j) {
                const a = values[i-1] + ks[i-1][j-weights[i-1]]
                const b = ks[i-1][j]
                ks[i][j] = a > b ? a : b
            } else {
                ks[i][j] = ks[i-1][j]
            }
        }
    }
}

function knapSackRecursive(values, weights, capital, n) {
    if(n === 0 || capital === 0) {
        return 0
    } 
    if (weights[n-1] > capital) {
        return knapSackRecursive(values, weights, capital, n - 1)

    } 
    const a = values[n-1] + knapSackRecursive(values, weights, capital - weights[n-1], n - 1)
    const b = knapSackRecursive(values, weights, capital, n - 1)
    return a > b ? a : b
}