// Crea una interfaz Person con las propiedades firstName (string) y lastName (string). 
// Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.

export interface Person {
    firstName: string;
    lastName?: string;
}

let person: Person = {
    firstName: 'Homero',
    lastName: 'Simpson'
};

console.log(person); 
// { firstName: 'Homero', lastName: 'Simpson' }