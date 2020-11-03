function heapify(array, index, heapSize, compareFn) { // 相当于siftDown多了些参数
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    if(element < heapSize && this.compareFn(this.heap[left], this.heap[element]) > 0) {
        element = left
    }
    if(element < heapSize && this.compareFn(this.heap[right], this.heap[element]) > 0) {
        element = right
    }
    if(index !== element) {
        swap(array, element, index)
        heapify(array, element, heapSize, compareFn)
    }
}

function buildMaxHeap(array, compareFn) {
    for (let i = 0; i <= Math.floor(array.length/2); i++) {
        heapify(array, i, array.length, compareFn)
    }
    return array
}

function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length
    buildMaxHeap(array, compareFn) // 创建最大堆
    while(heapSize > 1) {
        swap(array, 0, --heapSize) // 将最大值与末尾交换
        heapify(array, 0, heapSize, compareFn) // 再堆化
    }
    return array
}