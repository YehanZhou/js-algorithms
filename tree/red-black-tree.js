class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }
    rotatoLL(node) {
        let tmp = node.left
        node.left = tmp.right
        tmp.right = node
        return tmp
    }
    rotatoRR(node) {
        let tmp = node.right
        node.right = tmp.left
        tmp.left = node
        return tmp
    }
    insertNode(node, key) {}
}
