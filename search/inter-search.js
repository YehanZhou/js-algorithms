function interSearch(array, val, compareFn = defaultCompare) {
    const array = quickSort(array)
    let left = 0 
    let right = array.length - 1
    while(left <= right && val >= array[left] && val <= array[right]) {
        const delta =  Math.floor((val - array[left])/(array[right] - val))
        const position = left + Math.floor((right - left) * delta)
        const elem = array[position]
        if(compareFn(val, elem) === BIGGER_THAN) {
            left = position + 1
        } else if(compareFn(val, elem) === LESS_THAN) {
            right = position - 1
        } else {
            return position
        }
    }
    return -1
}