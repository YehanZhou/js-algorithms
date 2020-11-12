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

/**
 * 54321
 * 43215
 * 
 * 45321
 * 43215
 */

/*
冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
最好情况： O(n)
一般情况： O(n^2)
最坏情况： O(n^2)
*/
