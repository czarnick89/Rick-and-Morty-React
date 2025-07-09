import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CustomCard = ({ title, text, imageUrl, buttonText, onButtonClick }) => {
  return (
    <Card style={{ width: '18rem' }} className="h-100 d-flex flex-column">
      {imageUrl && <Card.Img variant="top" src={imageUrl} />}
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </div>
        {buttonText && (
          <Button
            variant="primary"
            onClick={onButtonClick}
            className="mt-3 align-self-center"
          >
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
