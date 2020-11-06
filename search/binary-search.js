function binarySearch(array, val, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    let left = 0 
    let right = sortedArray.length - 1
    while(left <= right) {
        const mid = sortedArray[Math.floor((left+right)/2)]
        const midElem = sortedArray[mid]
        if(compareFn(val, midElem) === BIGGER_THAN) {
            left = mid + 1
        } else if(compareFn(val, midElem) === LESS_THAN) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return -1
}