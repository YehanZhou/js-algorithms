class Queue {
    constructor () {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(item) { // 添加队尾
        this.items[this.count++] = item
    }

    dequeue() { // 删除对头
        if(this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() { // 返回对头
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
            str += `${str},${this.items[i]}`
        }
        return str
    }
}