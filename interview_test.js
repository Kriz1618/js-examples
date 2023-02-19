// Cree una función que invierta una cadena de texto sin/con iteraciones.

function reverseString(str) {
  let newStr = '';
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

const reverseString1 = (str) => {
  return str.split('').reverse().join('');
}

// console.log(reverseString('onomatopeya'));
// console.log(reverseString1('onomatopeya'));



// Convertir número entero a su representación en binario
const decimalToBinary1 = (num) => {
  console.log(`Decimal: ${num}, Binary: ${(num).toString(2)}`);
};

const decimalToBinary = (num) => {
  let number = num;
  let binary = (number % 2).toString();

  while (number > 1) {
    number = parseInt(number / 2);
    binary = (number % 2) + binary;
  }

  console.log(`Decimal: ${num}, Binary: ${binary}`);
};

// decimalToBinary1(8);
// decimalToBinary(8);


// Cree una función que identifique si una cadena de texto es un palíndromo

const isPalindrome = (word) => {
  let reversed = word.toLowerCase().split('').reverse().join('');
  return reversed === word.toLowerCase();
};

const isPalindrome1 = (str) => {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  const iterations = Math.ceil(newStr.length/2);

  for (let i = 0; i < iterations; i++) {
    if (newStr[i] !== newStr[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome('Oso'));
// console.log(isPalindrome1('arroz a la zorra'));



// Identifique que imprime el siguiente código.
function arraysTest() {
  const arr1 = [7, 5, 4, 6, 2];
  const arr2 = arr1;
  const arr3 = [...arr2];
  arr3.unshift(1);
  arr2.push(-2);
  arr1.shift();
  arr1.pop();

  const val1 = arr3.some(x => x < 2);
  const val2 = arr1.every(x => x > 3);

  console.log(val1, val2);
};

// arraysTest();



// Identifique que imprime el siguiente código.
const helloObj = {
  setName(name) {
    this.name = name
  },

  sayHello() {
    console.log(`Hello ${this.name}`);
  },

  sayGoodBye: () => {
    console.log(`Bye ${this.name}`);
  }  
};


helloObj.setName('Jhon Doe');
helloObj.sayHello();
helloObj.sayGoodBye('Jhon');
helloObj.sayGoodBye();