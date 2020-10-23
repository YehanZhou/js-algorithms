class Node {
    constructor(element, next) {
        this.element = element
        this.next = next
    }
}

class DoublyNode extends Node {
    constructor(element, prev, next) {
        super(element, next)
        this.prev = prev
    }
}