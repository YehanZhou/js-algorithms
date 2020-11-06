// todo
function minCoinChange(coins, amount) {
    const cache = []; // 记忆化,缓存计算过的值
  
    const makeChange = (value) => { // 利用闭包，保留住cache的值
      if (!value) {
        return [];
      }
      if (cache[value]) {
        return cache[value];
      }
      let min = [];
      let newMin;
      let newAmount;
      for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        newAmount = value - coin;
        if (newAmount >= 0) {
          newMin = makeChange(newAmount);
        }
        if (
          newAmount >= 0 &&
          (newMin.length < min.length - 1 || !min.length) && // newMin.length < min.length - 1(coin[i])
          (newMin.length || !newAmount)
        ) { // 判断newAmount是否有效，minValue（最少硬币数）是否是最优解，与此同时minValue和newAmount是否是合理的值（行{10}）
          min = [coin].concat(newMin);
          // console.log('new Min ' + min + ' for ' + amount);
        }
      }
      return (cache[value] = min);
    };
    return makeChange(amount);
  }

 console.log(minCoinChange([1,5,10,25], 36))
