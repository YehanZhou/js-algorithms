class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }
    djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }
    hashCode(key) {
        // return this.loseloseHashCode(key);
        return this.djb2HashCode(key);
    }
    put(key, value) {
        if(!key || !value) return false
        const position = this.hashCode(key)
        if (this.table[position] == null) {
            this.table[position] = new ValuePair(key, value)
        } else {
            let index = position + 1
            while(this.table[index]) {
                index++
            }
            this.table[index] = new ValuePair(key, value)
        }
        return true
    }
    get(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                return this.table[position].value
            } else {
                let index = position + 1
                while(this.table[index] != null && this.table[index].key !== key) {
                    index++
                }
                if(this.table[index] != null && this.table[index].key === key) {
                    return this.table[index].value
                }
            }
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position].value
                this.verifyRemoveSideEffect(key, position)
                return true
            } else {
                let index = position + 1
                while(this.table[index] != null && this.table[index].key !== key) {
                    index++
                }
                if(this.table[index] != null && this.table[index].key === key) {
                    delete this.table[index].value
                    this.verifyRemoveSideEffect(key, index)
                    return true
                }
            }
        }
        return false
    }
    verifyRemoveSideEffect(key, position) {
        const hash = this.hashCode(key)
        let index = position + 1
        while(this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key)
            if (posHash <= hash || posHash <= position) { // !important
                this.table[position] = this.table[index]
                delete this.table[index]
                position = index
            }
            index++
        }
    }
    getTable() {
      return this.table;
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return Object.keys(this.table).length;
    }
    clear() {
      this.table = {};
    }
    toString() {
      if (this.isEmpty()) return ''
      return Object.keys(this.table).map(key => `${key}=>${this.table[key].toString()}`).join(',')
    }
  }
  
  const hashTable = new HashTable()
  hashTable.put('aaa', 'aaa@aaa.com')
  hashTable.put('bbb', 'bbb@bbb.com')
  console.log(hashTable.toString())
  hashTable.remove('bbb')
  console.log(hashTable.toString())
  