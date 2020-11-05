/*计数排序
    分布式排序
    只能用于整数排序
    占用更多空间
*/
function countingSort(array) {
    if(array.length < 2) return array
    const maxValue = findMaxVal(array)
    const counts = new Array(maxValue + 1)
    array.forEach(a => {
        if(!counts[a]) {
            counts[a] = 0
        }
        counts[a]++
    })
    let sortIndex = 0
    counts.forEach((count, i) => {
        while(count > 0) {
            array[sortIndex++] = i
            count--
        }
    })
    return array
}

function findMaxVal(array) {
    let max = array[0] // 这里不是0
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }
    }
    return max
}