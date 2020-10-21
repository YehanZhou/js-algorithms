class Stack {
    constructor() {
        this.items = []
    }

    push(el) {
        this.items.push(el)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())
