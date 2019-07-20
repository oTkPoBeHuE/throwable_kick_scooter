import React, { useState } from 'react';
import { ScootersMap } from '../components';
import { Scooter } from '../data/scooters.data';
import { ScooterPreview } from '../components/preview/scooterPreview';
import { Container, Col, Row } from 'react-bootstrap';
import { config } from '../config';

export const MainPage: React.FC = () => {
  const [selectedScooter, setSelectedScooter] = useState<Scooter | null>(null);

  return (
    <Container>
      <Row>
        <Col>
          <ScootersMap
            scooters={config.scooters}
            height={500}
            width={500}
            zoom={config.map.zoom}
            center={config.map.center}
            onClickPlacemark={scooter => setSelectedScooter(scooter)}
          />
        </Col>
        <Col>
          {selectedScooter !== null && (
            <ScooterPreview
              scooter={selectedScooter}
              onClose={() => setSelectedScooter(null)}
              onClickRent={() => alert('Rent')}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
