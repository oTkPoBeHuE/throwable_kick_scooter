import { scootersPictures } from '../resources';

export interface Scooter {
  coordinates: [number, number];
  image: any;
  model: string;
}

export const scooters: Scooter[] = [
  {
    coordinates: [59.976, 30.3151],
    image: scootersPictures.scooter1,
    model: 'Fast 2117'
  },
  {
    coordinates: [59.973, 30.3152],
    image: scootersPictures.scooter2,
    model: 'Neon TX Merida'
  },
  {
    coordinates: [59.9769, 30.31519],
    image: scootersPictures.scooter3,
    model: 'George in Bush ZERO'
  },
  {
    coordinates: [59.97601, 30.3131],
    image: scootersPictures.scooter4,
    model: 'Siemens GT'
  },
  {
    coordinates: [59.976, 30.3121],
    image: scootersPictures.scooter5,
    model: 'Xiaomi 911'
  }
];
