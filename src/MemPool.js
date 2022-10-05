export class MemPool {
  constructor() {
    this.txs = new Map();
  }

  add(key, value) {
   return this.txs.set(key, value);
  }

  remove(key) {
    return this.txs.delete(key);
  }

  has(key) {
    return this.txs.has(key);
  }
}