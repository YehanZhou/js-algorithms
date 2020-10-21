// 双端队列，栈与队列的结合
class Deque {
    constructor () {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    addFront(item) {
        if(this.isEmpty()) {
            this.addBack(item)
        } else {
            if (this.lowestCount > 0) {
                this.items[--this.lowestCount] = item
            } else {
                for (let i = this.count; i > 0; i--) {
                    this.items[i] = this.items[i - 1]
                }
                this.count++
                this.lowestCount = 0
                this.items[0] = item
            }
        }

    }

    addBack(item) {
        this.items[this.count++] = item
    }

    rmFront(item) {
        if(this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    rmBack(item) {
        if(this.isEmpty()) return undefined
        const result = this.items[--this.count]
        delete this.items[this.count]
        return result
    }

    peekFront() {
        if(this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    peekBack() {
        if(this.isEmpty()) return undefined
        return this.items[this.count - 1]
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

const deque = new Deque()
deque.addBack(1)
deque.addFront(2)
deque.addBack(3)
console.log(deque.toString())
console.log(deque.size())
console.log(deque.peekFront())
console.log(deque.peekBack())
console.log(deque.rmFront())
console.log(deque.size())