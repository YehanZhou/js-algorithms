const NOT_EXIT = -1
function sequeSearch(array, val, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if(equalsFn(array[i], val)) {
            return i
        }
    }
    return NOT_EXIT
}