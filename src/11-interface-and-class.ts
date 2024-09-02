// Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle 
// que implemente esta interfaz y calcule el área de un círculo.

interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.area());
// 78.53981633974483