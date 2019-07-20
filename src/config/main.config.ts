import { scooters } from '../data/scooters.data';
import { userPosition } from './user.config';

export const config = {
  map: {
    center: userPosition.center,
    zoom: userPosition.zoom
  },
  scooters: scooters as []
};
