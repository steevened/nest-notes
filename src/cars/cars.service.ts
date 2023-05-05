import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Mazda',
    //   model: '6',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Accord',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Camry',
    // },
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`car with id ${id} not found`);

    return car;
  }

  public create(createCarDto: CreateCartDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let cardDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException();
    }

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        cardDB = {
          ...cardDB,
          ...updateCarDto,
          id,
        };
        return cardDB;
      }
      return car;
    });

    return cardDB;
  }

  delete(id: string) {
    this.findOneById(id);

    this.cars = this.cars.filter((car) => {
      return car.id !== id;
    });
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
