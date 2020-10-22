// 回文检查
function palindromicChecker(str) {
    const deque = new Deque()
    strArr = str.split("")
    strArr.forEach(s => {
        deque.addBack(s)
    })
    while(!deque.isEmpty()) {
        if (deque.peekFront() !== deque.peekBack()) {
            return false
        } else {
            deque.rmFront()
            deque.rmBack()
        }
    }
    return true
}

console.log(palindromicChecker('dfafd'))