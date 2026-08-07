class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }

  get state() {
    return Array.from(this.cache.entries());
  }
}

function run() {
  console.log('=== LRU Cache ===');
  const cache = new LRUCache(3);

  cache.put('a', 1);
  cache.put('b', 2);
  cache.put('c', 3);
  console.log('After a,b,c:', JSON.stringify(cache.state));

  cache.get('a');
  console.log('After get(a):', JSON.stringify(cache.state));

  cache.put('d', 4);
  console.log('After put(d) (b evicted):', JSON.stringify(cache.state));

  console.log('get(b):', cache.get('b'));
}

module.exports = { run };