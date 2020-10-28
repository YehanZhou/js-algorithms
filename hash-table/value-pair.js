class ValuePair {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
    toString() {
      return `[#${this.key}: ${this.value}]`;
    }
}

class ValuePairLazy extends ValuePair {
  constructor(key, value, isDelete = false) {
    super(key, value)
    this.isDelete = isDelete
  }
  // toString() {
  //   return `[#${this.key}: ${this.value}] isDelete: ${this.isDelete.toString()}`;
  // }
}