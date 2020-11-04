function bubbleSort(array, compareFn = defaultCompare){
    const { length } = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j+1]) === Compare.BIGGER_THAN) {
                swap(array, j, j+1)
            }
        }
        // console.log(array)
    }
    return array
}

// console.log(bubbleSort([5,4,3,2,1]))
console.log(bubbleSort([4,5,3,2,1]))

// [4,3,2,1,5]
// [3,2,1,4,5]
// [2,1,3,4,5]
// [1,2,3,4,5]
