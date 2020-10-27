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
    this.table[this.hashCode(key)] = new ValuePair(key, value)
    return true
  }
  get(key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    return !valuePair ? undefined : valuePair
  }
  remove(key) {
    const hash = this.hashCode(key)
    if(this.table[hash] != null) {
      delete this.table[hash]
      return true
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
