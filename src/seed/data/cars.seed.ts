import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'X',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: '6',
  },
  {
    id: uuid(),
    brand: 'Volskwagen',
    model: 'Golf',
  },
];
