class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
}
  
class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    set(key, value) {
        if(!key || !value) return false
        this.table[this.toStrFn(key)] = new ValuePair(key, value)
        return true
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return !valuePair ? undefined : valuePair.value
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }

    remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }

    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }

    keyValues() {
        return Object.values(this.table)
    }

    forEach(callback) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callback(valuePairs[i].key, valuePairs[i].value)
            if (result === false) {
                break
            }
        }
    }

    size() {
        return this.keyValues().length
    }

    isEmpty() {
        this.size() === 0
    }

    clear() {
        this.table = {}
    }

    toString() {
        if(this.isEmpty()) return ''
        return this.keyValues().map(v => v.toString()).join(',')
    }
}

const dic = new Dictionary()
dic.set('a', 'b')
dic.set('d', 'c')
console.log(dic.toString())
console.log(dic.keys())
console.log(dic.values())
console.log(dic.keyValues())