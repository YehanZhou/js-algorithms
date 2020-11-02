const Colors = {
    RED: 0,
    BLACK: 1
}
class RedBlackNode extends Node {
    constructor(key) {
        super(key)
        this.color = Colors.RED
        this.parent = undefined
    }

    isRed() {
        return this.color === Colors.RED
    }

    flipColor() {
        if (this.color === Colors.RED) {
            this.color = Colors.BLACK
        } else {
            this.color = Colors.RED
        }
    }
}