# JS Exercises

Colección de ejercicios de JavaScript enfocados en lógica, algoritmos y conceptos fundamentales del lenguaje.

## Requisitos

- [Node.js](https://nodejs.org/) (v12 o superior)
- No requiere dependencias externas ni `npm install`

## Cómo ejecutar los ejercicios

Todos los ejercicios se ejecutan a través de un runner centralizado (`index.js`):

```bash
# Listar todos los ejercicios disponibles
node index.js list

# Ejecutar un ejercicio específico
node index.js <nombre-del-ejercicio>

# Ejecutar todos los ejercicios en secuencia
node index.js all
```

Los nombres de los ejercicios no distinguen entre mayúsculas/minúsculas ni guiones/guiones bajos/espacios.

### Ejemplos

```bash
node index.js palindrome
node index.js two-sum
node index.js fizzbuzz
```

### Ejecución directa (sin runner)

Cada archivo en `tests/` también se puede ejecutar directamente con Node.js, pero la salida podría no ser la esperada ya que algunos ejercicios exportan funciones sin invocarlas. Se recomienda usar siempre el runner.

## Listado de ejercicios

| # | Ejercicio | Categoría | Comando |
|---|-----------|-----------|---------|
| 1 | **Anagram** | String / Hash Map | `node index.js anagram` |
| 2 | **Array Methods** | Array / Referencia | `node index.js array-methods` |
| 3 | **Balanced Parentheses** | Stack / String | `node index.js balanced-parentheses` |
| 4 | **Debounce** | Async / Timer | `node index.js debounce` |
| 5 | **Decimal to Binary** | Número / Matemáticas | `node index.js decimal-to-binary` |
| 6 | **Deep Clone** | Recursión / Objeto | `node index.js deep-clone` |
| 7 | **Event Emitter** | OOP / Pub-Sub | `node index.js event-emitter` |
| 8 | **Fibonacci** | Recursión / DP | `node index.js fibonacci` |
| 9 | **FizzBuzz** | Loop / Condicional | `node index.js fizzbuzz` |
| 10 | **Flatten Array** | Recursión / Array | `node index.js flatten-array` |
| 11 | **Is Palindrome** | String / Two-Pointer | `node index.js is-palindrome` |
| 12 | **LRU Cache** | Estructura de Datos | `node index.js lru-cache` |
| 13 | **Merge Sorted Arrays** | Two-Pointer | `node index.js merge-sorted-arrays` |
| 14 | **Palindrome** | String | `node index.js palindrome` |
| 15 | **Promise.all** | Async / Promesa | `node index.js promise-all` |
| 16 | **Prototype Inheritance** | OOP / Prototype | `node index.js prototype-inheritance` |
| 17 | **Remove Duplicates** | Array / Set | `node index.js remove-duplicates` |
| 18 | **Reorder Numbers** | Número / Sort | `node index.js reorder-numbers` |
| 19 | **Reverse String** | String | `node index.js reverse-string` |
| 20 | **Singleton** | Patrón de Diseño | `node index.js singleton` |
| 21 | **Smallest Missing Positive** | Array / Set | `node index.js smallest-missing-positive` |
| 22 | **This Context** | Scope / `this` | `node index.js this-context` |
| 23 | **Two Sum** | Hash Map / Array | `node index.js two-sum` |

## Estructura del proyecto

```
js-examples/
├── index.js          # Runner principal
├── interview_test.js # Archivo independiente (no parte del runner)
├── tests/            # Directorio con todos los ejercicios
│   ├── anagram.js
│   ├── array-methods.js
│   ├── balanced-parentheses.js
│   ├── debounce.js
│   ├── decimal-to-binary.js
│   ├── deep-clone.js
│   ├── event-emitter.js
│   ├── fibonacci.js
│   ├── fizzbuzz.js
│   ├── flatten-array.js
│   ├── is-palindrome.js
│   ├── lru-cache.js
│   ├── merge-sorted-arrays.js
│   ├── palindrome.js
│   ├── promise-all.js
│   ├── prototype-inheritance.js
│   ├── remove-duplicates.js
│   ├── reorder-numbers.js
│   ├── reverse-string.js
│   ├── singleton.js
│   ├── smallest-missing-positive.js
│   ├── this-context.js
│   └── two-sum.js
└── README.md
```

## Notas

- Cada ejercicio exporta una función `run()` que el runner invoca para mostrar los resultados.
- El archivo `interview_test.js` es un scratch independiente y se ejecuta con `node interview_test.js`.
