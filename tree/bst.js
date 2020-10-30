// 二叉搜索树
class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if(node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    getRoot() {
        return this.root
    }
    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {
        if (node == null) return false
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            this.searchNode(node.right, key)
        }
        return true
    }
    inOrderTraverse (callback) { // 中序遍历
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode (node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    preOrderTraverse (callback) { // 先序遍历
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode (node, callback) {
        if (node != null) {
            callback(node)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverse (callback) { // 后序遍历
        this.postOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseNode (node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node)
        }
    }
    min() {
        this.minNode(this.root)
    }
    minNode(node) {
        let current = node
        while(current != null && current.left != null) {
            current = current.left
        }
        return current

    }
    max() {
        this.maxNode(node)
    }
    maxNode(node) {
        let current = node
        while(current != null && current.right != null) {
            current = current.right
        }
        return current
    }
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if(node == null) return node
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key)
            return node
        }
        // 等于的情况分三种
        // 1. 无子节点
        if(node.left == null && node.right == null) {
            node = undefined
            return node
        }
        // 2.有一个子节点
        if (node.left == null) {
            node = node.right
            return node
        } else if (node.right == null) {
            node = node.left
            return node
        }
        // 3.有两个子节点
        node.key = this.minNode(node.right).key // 获取右节点最小值
        node.right = this.removeNode(node.right, node.key)
        return node
    }
}

const bst = new BinarySearchTree()
bst.insert(3)
bst.insert(1)
bst.insert(2)
bst.insert(4)
bst.insert(5)
console.log(JSON.stringify(bst.getRoot()))
bst.remove(4)
console.log(JSON.stringify(bst.getRoot()))
