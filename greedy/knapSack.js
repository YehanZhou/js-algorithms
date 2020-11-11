function knapSack(weights, values, capital) {
    const n = values.length
    let load = 0
    let val = 0
    for (let i = 0; i < n && load < capital; i++) {
        if(load + weights[i] <= capital) {
            load += weights[i]
            val += values[i]
        } else {
            const r = (capital - load) / weights[i]
            load += r * weights[i]
            val += r * values[i] 
        }
    }
    return val
}

const values = [3,4,5];
const weights = [2,3,4];
const capacity = 6;

console.log(knapSack(weights, values, capacity));