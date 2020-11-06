function shuffle(array) {
    let current = array.length
    while(current != 0) {
        const randomIndex = Math.floor(current*Math.random()) // 0至current之间的随机整数，包含0，不包含current
        swap(array, --current, randomIndex)
    }
    return array
}

// Math.random() 0和1直接的随机数，包含0，不包含1