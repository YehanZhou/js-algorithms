class HashTableLinked {
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
        if(this.table[position] == null) {
            this.table[position] = new LinkedList()
        }
        const valuePair = new ValuePair(key, value)
        this.table[position].push(valuePair)
        return true
    }
    get(key) {
        const position = this.hashCode(key)
        const linkList = this.table[position]
        if(linkList != null && !linkList.isEmpty()) {
            let current = linkList.getHead()
            while(current) {
                if(current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key)
        const linkList = this.table[position]
        if(linkList != null && !linkList.isEmpty()) {
            let current = linkList.getHead()
            while(current) {
                if(current.element.key === key) {
                    linkList.remove(current.element)
                    if(linkList.isEmpty()) {
                        delete this.table[position]
                    }
                    return true // 贴近删除操作代码，避免多余循环
                }
                current = current.next
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
        Object.values(this.table).forEach(linkList => {
            count += linkList.size()
        })
        return count
    }
    clear() {
      this.table = {};
    }
    toString() {
      if (this.isEmpty()) return ''
      return Object.keys(this.table).map(key => `${key}=>${this.table[key].toString()}`).join(',')
    }
}

const hashTable = new HashTableLinked()
hashTable.put('Ygritte', 'ygritte@email.com');
hashTable.put('Jonathan', 'jonathan@email.com');
hashTable.put('Jamie', 'jamie@email.com');
hashTable.put('Jack', 'jack@email.com');
hashTable.put('Jasmine', 'jasmine@email.com');
hashTable.put('Jake', 'jake@email.com');
hashTable.put('Nathan', 'nathan@email.com');
hashTable.put('Athelstan', 'athelstan@email.com');
hashTable.put('Sue', 'sue@email.com');
hashTable.put('Aethelwulf', 'aethelwulf@email.com');
hashTable.put('Sargeras', 'sargeras@email.com');

console.log('**** Printing Hash **** ');

console.log(hashTable.toString());
// {4 => [#Ygritte: ygritte@email.com]},{5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log('**** Get **** ');

console.log(hashTable.get('Jamie')); // jamie@email.com
console.log(hashTable.get('Sue')); // sue@email.com
console.log(hashTable.get('Jonathan')); // jonathan@email.com
console.log(hashTable.get('Loiane')); // undefined

console.log('**** Remove **** ');

console.log(hashTable.remove('Ygritte')); // true
console.log(hashTable.get('Ygritte')); // undefined
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Sue')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Jamie')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com],[#Aethelwulf: aethelwulf@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

console.log(hashTable.remove('Aethelwulf')); // true
console.log(hashTable.toString());
// {5 => [#Jonathan: jonathan@email.com]},{7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},{8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},{10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}

  