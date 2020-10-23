
class CircleLinkedList extends LinkedList {
    push(element) {
        const node = new Node(element)
        let current
        if(!this.head) {
            this.head = node
        } else {
            current = this.getElementAt(this.count - 1)
            current.next = node
        }
        node.next = this.head
        this.count++
    }

    insert(element, index) { // 向链表的特定位置插入一个新元素。
        const node = new Node(element)
        let current = this.head // 当前指针指向头部
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                if (this.head) {
                    node.next = current // 要插入的元素指向头部元素（当前指针指向头部）
                    this.head = node // 更新头部指针指向新插入元素
                    current = this.getElementAt(this.count) // 将当前指针移动至最后一个元素
                    current.next = this.head
                } else {
                    this.head = node
                    node.next = this.head
                }
            } else {
                const prev = this.getElementAt(index - 1)
                node.next = prev.next
                prev.next = node
            }
            this.count++
            return true
        }
        return false
    }

    removeAt(index) {
        let current = this.head
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                if (this.head) {
                    const removed = this.head
                    current = this.getElementAt(this.count - 1) // 将当前指针移动至最后一个元素
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                } else {
                    this.head = null
                }
            } else {
                const prev = this.getElementAt(index - 1)
                current = prev.next
                prev.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
}
