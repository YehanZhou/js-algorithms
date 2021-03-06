function selectionSort(array, compareFn = defaultCompare) {
    const { length } = array
    let minIndex
    for(let i = 0; i < array.length - 1; i++) {
        minIndex = i
        for(let j = i; j < array.length; j++) {
            if(compareFn(array[j], array[minIndex]) === Compare.LESS_THAN)
            minIndex = j
        }
        if(minIndex !== i) {
            swap(array, i, minIndex)
        }
    }
    return array
}

/*
最好情况： O(n^2) 因为每次都要找最小值
一般情况： O(n^2)
最坏情况： O(n^2)
*/