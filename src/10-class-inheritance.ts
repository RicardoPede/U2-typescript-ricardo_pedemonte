// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
// batteryLife (vida de la batería) de tipo número. Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando.

import { Car } from './7-class-basic';

class ElectricCar extends Car {
    batteryLife?: number;

    charge(): void {
        console.log('Charging the car');
    }
}

let electricCar = new ElectricCar();
electricCar.make = 'Tesla';
electricCar.charge();
// Charging the car