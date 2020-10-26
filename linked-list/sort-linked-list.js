
class SortLinkedList extends LinkedList { // 双向链表，不用循环
    constructor(equalsFn, compareFn = defaultCompare) {
        super(equalsFn, compareFn)
        this.compareFn = compareFn
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element)
        } else {
            const index = this.getIndexNextSortedElement(element)
            super.insert(element, index)
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        } else {
            const index = this.getIndexNextSortedElement(element)
            return super.insert(element, index)
        }
    }
    getIndexNextSortedElement(element) {
       let current = this.head
       let i = 0
       for (; i < this.count; i++) {
           if (this.compareFn(element, current.element) === Compare.LESS_THAN) {
               return i
           }
           current = current.next
       }
       return i
    }
}

console.log('sort-linked-list-----------')
const slist = new SortLinkedList()
slist.push(4)
slist.push(2)
slist.push(1)
console.log(slist.toString())
slist.insert(3,1)
console.log(slist.toString())
slist.removeAt(2)
console.log(slist.toString())
