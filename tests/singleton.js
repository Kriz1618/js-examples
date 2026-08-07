let instance = null;

class Singleton {
  constructor() {
    if (instance) return instance;
    this.createdAt = new Date().toISOString();
    instance = this;
  }

  getInstanceInfo() {
    return `Singleton created at: ${this.createdAt}`;
  }
}

function run() {
  console.log('=== Singleton Pattern ===');

  const s1 = new Singleton();
  const s2 = new Singleton();

  console.log('s1 === s2:', s1 === s2);
  console.log('s1 info:', s1.getInstanceInfo());
  console.log('s2 info:', s2.getInstanceInfo());
}

module.exports = { run };