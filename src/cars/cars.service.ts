import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Mazda',
      model: '6',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Accord',
    },
    {
      id: 3,
      brand: 'Toyota',
      model: 'Camry',
    },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}
