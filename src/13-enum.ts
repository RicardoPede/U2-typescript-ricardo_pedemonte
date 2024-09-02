// Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función
// que tome un argumento de tipo Color y devuelva un mensaje con el color.

export enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

function getColor(color: Color): string {
    return `El color es ${color}`;
}

console.log(getColor(Color.Red));
// El color es Red
console.log(getColor(Color.Green));
// El color es Green
console.log(getColor(Color.Blue));
// El color es Blue

