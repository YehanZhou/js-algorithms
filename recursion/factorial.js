// 乘阶 5!= 5*4*3*2*1
function factorial(n) {
    if(n < 0) return
    if(n === 1 || n === 0) return 1
    return n * factorial(n - 1)
}

console.log(`5!=${factorial(5)}`)
console.log(`-1!=${factorial(-1)}`)