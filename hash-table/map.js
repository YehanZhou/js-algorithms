const map = new Map()
map.set('aaa', 'aaa@aaa.com')
map.set('bbb', 'bbb@bbb.com')
map.set('ccc', 'ccc@ccc.com')
console.log(map.get('bbb'))
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.delete('bbb'))
console.log(map.size)
console.log(map.has('ccc'))

const weakMap = new WeakMap()
const obj1 = {a: 'a'}
const obj2 = {b: 'b'}
const obj3 = {c: 'c'}
weakMap.set(obj1, 'aaa@aaa.com')
weakMap.set(obj2, 'bbb@bbb.com')
weakMap.set(obj3, 'ccc@ccc.com')
console.log('weak map----------')
console.log(weakMap.has(obj1))
console.log(weakMap.get(obj2))
console.log(weakMap.size) // undefined
console.log(weakMap.delete(obj2))
console.log(weakMap.get(obj2)) // undefined
