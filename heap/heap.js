class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }

    getLeftIndex(index) {
        return (2 * index) + 1
    }

    getRightIndex(index) {
        return (2 * index) + 2
    }

    getParentIndex(index) {
        if (index === 0) return undefined
        return Math.floor((index - 1) / 2)
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() <= 0
    }

    clear() {
        this.heap = []
    }

    findMin() {
        return this.isEmpty() ? undefined : this.heap[0]
    }
   
    insert(value) {
        if(value != null) {
            this.heap.push(value)
            this.siftUp(this.size())
            return true
        }
        return false
    }

    siftUp(index) {
        let parent = this.getParentIndex(index)
        while(
            index > 0 &&
            this.compareFn(this.heap[index], this.heap[parent]) === Compare.BIGGER_THAN
        ) {
            swap(this.heap, index, parent)
            index = parent
            parent = this.getParentIndex(index)
        }
    }

    extract() { // 摘取堆顶元素
        if(this.isEmpty()) return undefined
        if(this.size() === 1) return this.heap.pop()]
        const removedValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown(0)
        return removedValue
    }

    siftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if(element < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
            element = left
        }
        if(element < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
            element = right
        }
        if(index !== element) {
            swap(this.heap, element, index)
            this.siftDown(element)
        }
    }

    heapify(array) { // 数组堆化
        if(array) {
            this.heap = array
        }
        const maxIndex = Math.floor(this.size()/2) - 1
        for (let i = 0; i < maxIndex; i++) {
            this.siftDown(i)            
        }
    }

    getAsArray() {
        return this.heap
    }
}

class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }
}
