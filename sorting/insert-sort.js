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
/**
 * 54321
 * 
 * 43215
 * 
 * 31254
 * 12354
 */

/*
插入排序每次排一个数组项，以此方式构建最后的排序数组。
最好情况： O(n)
一般情况： O(n^2)
最坏情况： O(n^2)
*/
