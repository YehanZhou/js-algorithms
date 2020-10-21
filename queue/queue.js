class Queue {
    constructor () {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(item) { // 添加队尾
        this.items[this.count++] = item
    }

    dequeue() { // 删除队头
        if(this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() { // 返回队头
        if(this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    toString() {
        if(this.isEmpty()) return ''
        let str = this.items[this.lowestCount]
        for(let i=this.lowestCount+1; i< this.count; i++) {
            str += `,${this.items[i]}`
        }
        return str
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.toString())
console.log(queue.size())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.size())