function longestSubStr(strX, strY, n = strX.length, m = strY.length) {
    if(n === 0 || m === 0) return 0
    if(strX[n-1] === strY[m-1]) {
        return 1 + longestSubStr(strX, strY, n - 1, m - 1)
    }
    const a = longestSubStr(strX, strY, n - 1, m)
    const b = longestSubStr(strX, strY, n, m - 1)
    return a > b ? a : b
}