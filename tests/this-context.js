function run() {
  console.log('=== This Context ===');

  const helloObj = {
    name: '',

    setName(name) {
      this.name = name;
    },

    sayHello() {
      console.log(`Hello ${this.name}`);
    },

    sayGoodBye: () => {
      console.log(`Bye ${this.name}`);
    }
  };

  helloObj.setName('John Doe');
  helloObj.sayHello();
  helloObj.sayGoodBye();
}

module.exports = { run };