// Modifica la clase Car para que la propiedad make sea privada. Añade un método
// getMake() que devuelva el valor de make.

class Car2 {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

let car2 = new Car2('Ford');
console.log(car2.getMake());


