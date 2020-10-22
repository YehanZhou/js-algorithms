class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

class LinkList {
    constructor() {
        this.count = 0
        this.head = undefined
    }

    push(element) { // 向链表尾部添加一个新元素。
        const node = new Node(element)
        let current
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    // head->[elem|next-]->
    //       current

    getElementAt(index) { // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    insert(element, index) { // 向链表的特定位置插入一个新元素。
        // debugger
        const node = new Node(element)
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const prevNode = this.getElementAt(index - 1)
                node.next = prevNode.next
                prevNode.next = node
            }
            this.count++
            return true
        }
        return false
    }
    indexOf(element) { // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            if(element === current.element) return i
            current = current.next
        }
        return -1
    }
    remove(element) { // 从链表中移除一个元素。
        const idx = this.indexOf(element)
        this.removeAt(idx)
    }
    
    removeAt(index) { // 从链表的特定位置移除一个元素。
        let current
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                current = this.head
                this.head = current.next
            } else {
                const prevNode = this.getElementAt(index-1)
                current = prevNode.next
                prevNode.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }

    isEmpty() { // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
        return this.count === 0
    }

    size() { // 返回链表包含的元素个数，与数组的length属性类似。
        return this.count
    }

    toString() { // 返回表示整个链表的字符串。由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
        if(!this.head) return ''
        let str = this.head.element.toString()
        let current = this.head.next
        while (current) {
            str += `,${current.element.toString()}`
            current = current.next
        }
        return str
    }
}

const linkList = new LinkList()
linkList.push(1)
linkList.push(2)
linkList.push(3)
console.log(linkList.toString())
console.log(linkList.getElementAt(1))
console.log(linkList.insert(5,1))
console.log(linkList.toString())
console.log('removeAt(2)',linkList.removeAt(2))
console.log(linkList.toString())
linkList.remove(5)
console.log(linkList.toString())