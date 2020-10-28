class HashTableLinearProbingLazy {
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
        return this.loseloseHashCode(key);
        // return this.djb2HashCode(key);
    }
    put(key, value) {
        if(!key || !value) return false
        const position = this.hashCode(key)
        if (this.table[position] == null || 
            (this.table[position] != null && this.table[position].isDelete)) {
            this.table[position] = new ValuePairLazy(key, value)
        } else {
            let index = position + 1
            while(this.table[index] != null && !this.table[position].isDelete) {
                index++
            }
            this.table[index] = new ValuePairLazy(key, value)
        }
        return true
    }
    get(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDelete) {
                return this.table[position].value
            }
            let index = position + 1
            while(this.table[index] != null && 
                (this.table[index].key !== key || this.table[index].isDelete)
            ) {
                if (this.table[index].key === key && this.table[index].isDelete) {
                    return undefined
                }
                index++
            }
            if(this.table[index] != null &&
                this.table[index].key === key &&
                !this.table[index].isDelete
            ) {
                return this.table[index].value
            }
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDelete) {
                this.table[position].isDelete = true
                return true
            }
            let index = position + 1
            while(this.table[index] != null && 
                (this.table[index].key !== key || this.table[index].isDelete)
            ) {
                index++
            }
            if(this.table[index] != null &&
                this.table[index].key === key &&
                !this.table[index].isDelete
            ) {
                this.table[index].isDelete = true
                return true
            }
        }
        return false
    }
    getTable() {
        return this.table;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        let count = 0
        Object.values(this.table).forEach(v => {
            if (!v.isDelete) count++
        })
        return count
    }
    clear() {
        this.table = {};
    }
    toString() {
        if (this.isEmpty()) return ''
        return Object.keys(this.table).filter(key => !this.table[key].isDelete).map(key => `${key}=>${this.table[key].toString()}`).join(',')
    }
  }
  
  const hashTableLazy = new HashTableLinearProbingLazy()
  hashTableLazy.put('aaa', 'aaa@aaa.com')
  hashTableLazy.put('bbb', 'bbb@bbb.com')
  hashTableLazy.put('ccc', 'ccc@ccc.com')
  console.log(hashTableLazy.size())
  console.log(hashTableLazy.toString())
  hashTableLazy.remove('bbb')
  console.log(hashTableLazy.size())
  console.log(hashTableLazy.toString())
  