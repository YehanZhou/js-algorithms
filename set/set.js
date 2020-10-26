class Set {
    constructor() {
        this.items = {}
    }

    add(item) {
        if(!this.has(item)) {
            this.items[item] = item
            return true
        }
        return false
    }

    has(item) {
        return Object.prototype.hasOwnProperty.call(this.items, item)
    }

    delete(item) {
        if(this.has(item)) {
            delete this.items[item]
            return true
        }
        return false
    }

    values() {
        return Object.values(this.items)
    }

    union(otherSet) { // 并集
        const unionSet = new Set()
        this.values().forEach(element => { unionSet.add(element) })
        otherSet.values().forEach(element => { unionSet.add(element) })
        return unionSet
    }

    inter(otherSet) { // 交集
        const interSet = new Set()
        const myValues = this.values()
        const otherValues = otherSet.values()
        let big = myValues
        let small = otherValues
        if(myValues.length < otherValues.length) {
            big = otherValues
            small = myValues
        }
        small.forEach(item => {
            if(big.includes(item)) {
                interSet.add(item)
            }
        })
        return interSet
    }

    diff(otherSet) { // 差集
        const diffSet = new Set()
        this.values().forEach(v => {
            if(!otherSet.has(v)) {
                diffSet.add(v)
            }
        })
        return diffSet
    }

    isSon(otherSet) {
        if(otherSet.size() < this.size()) return false
        return this.values().every(v => otherSet.has(v))
    }

    size() {
        // return this.values().length
        return Object.keys(this.items).length
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.items = {}
    }

    toString() {
        if(this.isEmpty()) return ''
        return this.values().join(',')
    }
}

const set = new Set();

set.add(1);
console.log(set.values()); // outputs [1]
console.log(set.has(1)); // outputs true
console.log(set.size()); // outputs 1

set.add(2);
console.log(set.values()); // outputs [1, 2]
console.log(set.toString()); // outputs 1, 2
console.log(set.has(2)); // true
console.log(set.size()); // 2

// set.delete(1);
// console.log(set.values()); // outputs [2]

// set.delete(2);
// console.log(set.values()); // outputs []

// --------- Union ----------

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values()); // [1, 2, 3, 4, 5, 6]

// --------- Intersection ----------

setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const intersectionAB = setA.inter(setB);
console.log(intersectionAB.values()); // [2, 3]

// --------- Difference ----------

setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const differenceAB = setA.diff(setB);
console.log(differenceAB.values()); // [1]

// --------- Subset ----------

setA = new Set();
setA.add(1);
setA.add(2);

setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSon(setB)); // true
console.log(setA.isSon(setC)); // false