
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
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
    rotatoLR(node) {
        node.left = this.rotatoRR(node.left)
        return this.rotatoLL(node)
    }
    rotatoRL(node) {
        node.right = this.rotatoLL(node.right)
        return this.rotatoRR(node)
    }
    getHeight(node) {
        if(node == null) return -1
        return Math.max(this.getHeight(node.left),this.getHeight(node.right)) + 1
    }
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right)
        // 2 left unbalance
        // 1 left lightly unblance
        // 0 balance
        // -1 right lightly unbalance
        // -2 right unbalance
    }
    insert(key) {
        this.root = this.insertNode(this.root, key) // 更新为平衡树
    }
    insertNode(node, key) {
        if (node == null) return new Node(key)
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node
        }
        // todo
    }
    removeNode(node, key) {
        node = super.removeNode(node, key)
        if(node == null) return node
        return this.balanceTree(node)
    }
    balanceTree(node) {
        switch(this.getBalanceFactor(node)) {
            case 2:
                if (this.getBalanceFactor(node.left) < 0) {
                    return this.rotatoLR(node)
                } else {
                    return this.rotatoLL(node)
                }
                break
            case 1:
                return this.rotatoLL(node)
                break
            case -1:
                return this.rotatoRR(node)
                break
            case -2:
                if (this.getBalanceFactor(node.right) > 0) {
                    return this.rotatoRL(node)
                } else {
                    return this.rotatoRR(node)
                }
                break
            default:
                return node
                break
        }
    }
}

const avl = new AVLTree()
avl.insert(3)
avl.insert(1)
avl.insert(2)
avl.insert(4)
avl.insert(5)
console.log(JSON.stringify(avl.getRoot()))
avl.remove(4)
console.log(JSON.stringify(avl.getRoot()))
