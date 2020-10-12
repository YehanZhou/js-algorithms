class Stack {
    constructor() {
        this.items = {}
        this.count = 0
    }

    push(el) {
        this.items[this.count++] = el
    }

    pop() {
        if(this.isEmpty()) return undefined
        const result = this.items[--this.count]
        delete this.items[this.count]
        return result
    }

    peek() {
        if(this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count === 0
    }

    clear() {
        this.items = {}
        this.count = 0

        // other way
        // while(!this.isEmpty()){
        //     this.pop()
        // }
    }

    size() {
        return this.count
    }

    toString() {
        if(this.isEmpty()) return undefined
        let objStr = this.items[0] // for ,
        for(let i=0;i<this.count;i++) {
            objStr = `${objStr},${this.items[i]}`
        }
        
    }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())

function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let binaryStr = ''
    let rem

    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!remStack.isEmpty()) {
        binaryStr += remStack.pop().toString()
    }

    return binaryStr
}

console.log(decimalToBinary(10))

function baseConverter(decNumber, base = 2) {
    const remStack = new Stack()
    let number = decNumber
    let binaryStr = ''
    let rem
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        binaryStr += digits[remStack.pop().toString()]
    }

    return binaryStr
}

console.log(baseConverter(10))

