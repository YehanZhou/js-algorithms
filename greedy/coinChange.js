function coinChange(coins, amount) {
    coins = quickSort(coins)
    const changes = []
    let total = 0
    for (let i = coins.length; i >=0; i--) { // coin面值从大到小计算
        const coin = coins[i]
        while(total + coin <= amount) {
            changes.push(coin)
            total += coin
        }
    }
    return changes
}

console.log(coinChange([1,5,10,25], 36))
