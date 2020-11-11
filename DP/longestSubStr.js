function longestSubStr(strX, strY) {
    const n = strX.length
    const m = strY.length
    const dp = []
    // let val = 0
    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j <= m; j++) {
            dp[i][j] = 0
        }
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i===0 || j===0) {
                dp[i][j] = 0
            } else if (strX[i-1] === strY[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                const a = dp[i-1][j]
                const b = dp[i][j-1]
                dp[i][j] = a > b ? a : b 
            }
        }
    }
    return dp[n][m]
}

