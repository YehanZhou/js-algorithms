// 击鼓传花
function hotPotato(elems, num) {
    const queue = new Queue()
    let failList = []
    for (let i = 0; i < elems.length; i++) {
        queue.enqueue(elems[i])
    }
    while(queue.size() > 1) {
        for (let j = 0; j < num; j++) {
            queue.enqueue(queue.dequeue())
        }
        failList.push(queue.dequeue())
    }
    return {
        failList,
        winner: queue.dequeue()
    }
}

const names = ['a', 'b', 'c', 'd']
const result = hotPotato(names, 2)
console.log(result)