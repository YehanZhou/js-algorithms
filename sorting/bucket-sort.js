function bucketSort(array) {
    if(array.length < 2) return array
    const buckets = createBuckets(array)
    return sortBuckets(buckets)
}

function createBuckets(array, bucketsSize = 5) { // bucketsSize每个桶的大小
    let min = array[0] // 这里不是0
    let max = array[0] // 这里不是0
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        } else {
            min = array[i]
        }
    }
    const buckets = []
    const bucketsCount = Math.floor((max - min) / 2) + 1 // 计算出所需桶数
    for (let i = 0; i < bucketsCount; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < array.length; i++) {
        buckets[Math.floor((array[i] - min) / 2)].push(array[i])
    }
    return buckets
}

function sortBuckets(buckets) {
    const sorted = []
    for (let i = 0; i < buckets.length; i++) {
        insertSort(buckets[i])
        sorted.push(...buckets[i])
    }
    return sorted
}