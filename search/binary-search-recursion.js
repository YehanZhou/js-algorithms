function binarySearchRecursion(array, val, left, right, compareFn) {
    const sortedArray = quickSort(array)
    const mid = sortedArray[Math.floor((left+right)/2)]
    const midElem = sortedArray[mid]
    if(left <= right) {
        if(compareFn(val, midElem) === BIGGER_THAN) {
            return binarySearchRecursion(array, val, mid + 1, right, compareFn)
        } else if(compareFn(val, midElem) === LESS_THAN) {
            return binarySearchRecursion(array, val, left, mid - 1, compareFn)
        } else {
            return mid
        }
    }
    return -1
}

function binarySearchR(array, val, compareFn = defaultCompare) {
    return binarySearchRecursion(array, val, 0, array.length - 1, compareFn)
}