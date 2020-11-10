function coinChange(coins, amount) {
    const caches = []
    const makeChange = (value) => { // 5
        if(!value) return []
        if(caches[value]) return caches[value]
        let min = [] // [1,1,1,1,1]
        let newMin = []
        let newAmount = 0
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i] // 10
            newAmount = value - coins[i] // 5-10 = -5
            if(newAmount < 0) break
            if(newAmount >= 0) {
                newMin = makeChange(newAmount) // []
            }
            if(newAmount >= 0 && newMin.length >= 0 && (newMin.length < min.length -1 || !min.length)) {
                min = [coin].concat(newMin)
            }
        }
        return (caches[amount] = min)
    }
    return makeChange(amount)
}

console.log(coinChange([1,5,10,25], 36))

// caches[0] = []
// caches[1] = [1]
// caches[2] = [1,1]
// caches[3] = [1,1,1]
// caches[4] = [1,1,1,1]
