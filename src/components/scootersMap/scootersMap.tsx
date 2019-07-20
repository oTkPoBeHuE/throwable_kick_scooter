import React from 'react';
import { YMaps, Map as YMap, Placemark, Clusterer } from 'react-yandex-maps';
import { Scooter } from '../../data/scooters.data';

interface ScootersMapProps {
  onClickPlacemark: (data: any) => void;
  scooters: Scooter[];
  width;
  height;
  center;
  zoom;
}

export const ScootersMap: React.FC<ScootersMapProps> = ({
  onClickPlacemark,
  scooters,
  width,
  height,
  center,
  zoom
}: ScootersMapProps) => {
  return (
    <YMaps>
      <YMap defaultState={{ center, zoom }} width={width} height={height}>
        <Clusterer
          options={{
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false
          }}
        >
          {scooters.map((scooter, index) => (
            <Placemark
              key={index}
              geometry={scooter.coordinates}
              onClick={() => onClickPlacemark(scooter)}
            />
          ))}
        </Clusterer>
      </YMap>
    </YMaps>
  );
};
