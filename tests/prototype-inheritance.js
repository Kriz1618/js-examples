function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  speak() {
    return `${this.name} says meow.`;
  }
}

function run() {
  console.log('=== Prototype Inheritance ===');

  const dog = new Dog('Rex', 'German Shepherd');
  console.log(dog.speak());
  console.log(dog.bark());
  console.log('Is Dog?', dog instanceof Dog);
  console.log('Is Animal?', dog instanceof Animal);

  const cat = new Cat('Luna', 'black');
  console.log(cat.speak());
  console.log('Is Cat?', cat instanceof Cat);
  console.log('Is Animal?', cat instanceof Animal);
}

module.exports = { run };