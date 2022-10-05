import { MemPool  } from './MemPool.js'; 

class ValidationEngine {
  constructor() {
    this.MemPool = new MemPool();
    this.Blocks = new Map();
  }
}