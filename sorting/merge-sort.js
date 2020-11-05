function mergeSort(array, compareFn = defaultCompare){
    const { length } = array
    if (length < 1) return
    let middle = Math.floor(length / 2)
    const left = this.mergeSort(array.slice(0,middle), compareFn)
    const right = this.mergeSort(array.slice(middle), compareFn)
    return merge(left, right, compareFn)
}

function merge(left, right, compareFn) {
    let i = 0
    let j = 0
    let result = []
    while(i < left.length && j < right.length) {
        if(compareFn(left[i], right[j]) === compareFn.LESS_THAN) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}