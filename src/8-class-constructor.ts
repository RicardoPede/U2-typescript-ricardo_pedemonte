// Añade un constructor a la clase Car que inicialice la propiedad make. Crea una
// instancia de Car con una marca y llama al método drive().

export class Car1 {
    make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Driving a ${this.make}`);
    }
}

let car1 = new Car1('Ford');
car1.drive();
// Driving a Ford