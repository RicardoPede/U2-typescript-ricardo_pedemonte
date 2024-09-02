// Escribe una función genérica identity que tome un argumento de tipo T y devuelva
// el mismo valor. Usa esta función con diferentes tipos de datos.

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity('Hola'));
// Hola

console.log(identity(54));
// 54

console.log(identity(true));
// true

console.log(identity([1, 2, 3]));
// [ 1, 2, 3 ]

console.log(identity({ name: 'Homero', age: 54 }));
// { name: 'Homero', age: 54 }