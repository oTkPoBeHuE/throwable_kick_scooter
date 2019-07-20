import React, { MouseEventHandler } from 'react';
import { Scooter } from '../../data/scooters.data';
// @ts-ignore
import { Toast, Row, Container, Button } from 'react-bootstrap';

interface ScooterPrviewProps {
  scooter: Scooter;
  onClose: MouseEventHandler;
  onClickRent: MouseEventHandler;
}

export const ScooterPreview: React.FC<ScooterPrviewProps> = ({
  scooter,
  onClose,
  onClickRent
}: ScooterPrviewProps) => {
  return (
    <Toast style={{ width: '500px', height: '500px' }} onClose={onClose}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{scooter.model}</strong>
        <small>{scooter.coordinates.join(', ')}</small>
      </Toast.Header>
      <Toast.Body>
        <Container>
          <Row className="justify-content-md-center">
            <img
              width={'auto'}
              height={200}
              className="mr-3"
              src={scooter.image}
              alt="Scooter"
            />
          </Row>
          <Row>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Row>

          <Row>
            <Button variant="success" onClick={onClickRent}>
              Rent $2.99
            </Button>
          </Row>
        </Container>
      </Toast.Body>
    </Toast>
  );
};
