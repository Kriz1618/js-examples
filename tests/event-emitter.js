class SimpleEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    for (const listener of [...this.events[event]]) {
      listener(...args);
    }
  }

  once(event, listener) {
    const wrapper = (...args) => {
      this.off(event, wrapper);
      listener(...args);
    };
    this.on(event, wrapper);
  }
}

function run() {
  console.log('=== Simple Event Emitter ===');

  const emitter = new SimpleEventEmitter();

  const unsub = emitter.on('data', msg => console.log('Data event:', msg));
  emitter.on('data', msg => console.log('Data handler 2:', msg));
  emitter.once('once', () => console.log('This runs only once'));

  emitter.emit('data', 'hello');
  emitter.emit('once', 'first');
  emitter.emit('once', 'second');

  unsub();
  emitter.emit('data', 'after unsubscribe');
}

module.exports = { run };