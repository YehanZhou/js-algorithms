function insertSort(array) {
    const { length } = array
    let tmp
    for (let i = 0; i < length; i++) {
        tmp = array[i]
        let j = i
        while (j > 0 && compareFn(array[j-1], tmp) === Compare.BIGGER_THAN) {
            array[j] = array[j-1]
            j--
        }
        array[j] = tmp
    }
    return array
}