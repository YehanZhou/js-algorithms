
class DoublyLinkedList extends LinkedList { // 双向链表，不用循环
    constructor() {
        super()
        this.tail = undefined
    }
    push(element) {
        const node = new DoublyNode(element)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node // 最后一个元素的next指向node
            node.prev = this.tail // node的prev设置为现在的tail指向的节点
            this.tail = node // 更新尾部节点为node
        }
        this.count++
    }
    insert(element, index) {
        if (index >=0 && index <= this.count) {
            const node = new DoublyNode()
            if (index===0) {
                if (!this.head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = this.head
                    this.head.prev = node
                    this.head = node
                }
            } else if (index === this.count) {
                this.tail.next = node
                node.prev = this.tail
                // node.next = undefined
                this.tail = node 
            } else {
                const previous = this.getElementAt(index - 1)
                const next = previous.next
                node.next = next
                next.prev = node
                previous.next = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
    removeAt(index) {
        if (index >=0 && index < this.count && this.head) {
            let removed
            if(index === 0) {
                removed = this.head
                this.head = this.head.next
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if(index === this.count - 1) {
                removed = this.tail
                this.tail = this.tail.prev
                this.tail.next = undefined
            } else {
                removed = this.getElementAt(index)
                removed.prev.next = removed.next
                removed.next.prev = removed.prev
            }
            this.count--
            return removed
        }
        return undefined
    }
    indexOf(element) {
        for (let index = 0; index < this.count; index++) {
            if(this.getElementAt(index).element === element) return index
        }
        return -1
    }
    getHead() {
        return this.head
    }
    getTail() {
        return this.tail
    }
    clear() {
        super.clear()
        this.tail = undefined
    }
}
