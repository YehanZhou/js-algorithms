// todo：九章算法版，不利用闭包
const INF = Number.MAX_SAFE_INTEGER

function minCoinChange(coins, amount) {
  const f = new Array(amount+1)
  for (let i = 0; i < f.length; i++) {
    if(i === 0 || i ===1) f[i] === [i]
    let min = INF
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j] // 1
      if(amount-coin>=0) {
        newMin = f[amount-coin].concat(f[coin])
      }
      if(newMin.length < min) {
        min = newMin.length
        return newMin
      }
    }
  }    
}

 console.log(minCoinChange([1,5,10,25], 36))
