// 斐波那契数列 0，1，1，2，3，5，8，11
function fibonacci(n) {
    if(n < 0) return
    if(n===0 || n===1) return n
    return fibonacci(n-1) + fibonacci(n-2)
}
function fibonacciMemo(n) {
    if(n < 0) return
    const memo = [0, 1]
    f = (i) => {
        if(memo[i] != null) return memo[i]
        return memo[i] = f(i - 1) + f(i - 2)
    }
    return f(n)
}

function fibonacciStr(n) {
    if(n < 0) return
    let memo = [0, 1]
    f = (i) => {
        if(i < 2) return memo
        memo = f(i-1)
        memo[i] = memo[i - 1] + memo[i - 2]
        return memo
    }
    return f(n)
}

console.log('fibonacci(0)', fibonacci(0))
console.log('fibonacci(1)', fibonacci(1))
console.log('fibonacci(2)', fibonacci(2))
console.log('fibonacci(3)', fibonacci(3))
console.log('fibonacci(4)', fibonacci(4))
console.log('fibonacci(5)', fibonacci(5))

console.log('fibonacciStr(5)', fibonacciStr(9))
