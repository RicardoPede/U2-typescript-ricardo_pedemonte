// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo
// para tratarla como un string. Usa la propiedad “.length” en esta variable.

let value: any = 54;

let valueString = value as string;

console.log(valueString.length);
// 2