import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Ford',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Volskwagen',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mitsubushi',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
];
