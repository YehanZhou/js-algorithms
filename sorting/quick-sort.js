function quick(array, left, right, compareFn) {
    const index = part(array, left, right, compareFn)
    if(left < index - 1) {
        quick(array, left, index - 1, compareFn)
    }
    if(right > index) {
        quick(array, index, right, compareFn)
    }
    return array
}

function part(array, left, right, compareFn) {
    const pivot = Math.floor((left + right) / 2) // 注意是left+right,不是array.length
    let i = left
    let j = right
    while(i<=j) {
        while(compareFn(a[i], a[pivot]) === compareFn.LESS_THAN) {
            i++
        }
        while(compareFn(a[j], a[pivot]) === compareFn.BIGGER_THAN) {
            j--
        }
        if(i<=j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}

function quickSort(array, compareFn = defaultCompare) {
    quick(array, 0, array.length - 1, compareFn)
}

/* 主要思想：
    选出一个轴心（这里代码中是选数组中心位，有助于优化算法）
    根据轴心将数组分为两份
    其中part计算的是区分数组的位置
    一份比轴心小，一份比轴心大
    分别递归计算两部分
*/
/*
最好情况： O(nlog(n))
一般情况： O(nlog(n))
最坏情况： O(n^2)
*/