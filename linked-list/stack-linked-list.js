class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList()
    }

    push(elem) {
        this.items.push(elem)
    }

    pop() {
        if(this.isEmpty()) return undefined
        return this.items.removeAt(this.count - 1)
    }

    peek() {
        if(this.isEmpty()) return undefined
        return this.items.getElementAt(this.count - 1)
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    size() {
        return this.items.size();
    }

    clear() {
        this.items.clear()
    }

    toString() {
        this.items.toString()
    }
}