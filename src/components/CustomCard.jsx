import React from "react";
import { useOutletContext } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CustomCard = ({
  title,
  text,
  imageUrl,
  buttonText,
  onButtonClick,
  data,
}) => {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useOutletContext();

  const favorited = isFavorite(data); // ✅ check once

  const handleFavoriteClick = () => {
    if (favorited) {
      removeFromFavorites(data);
    } else {
      addToFavorites(data);
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="h-100 d-flex flex-column">
      {imageUrl && <Card.Img variant="top" src={imageUrl} />}
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </div>

        <div className="d-flex gap-2 justify-content-center mt-3">
          {buttonText && (
            <Button variant="primary" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
          <Button
            variant={favorited ? "danger" : "outline-danger"}
            onClick={handleFavoriteClick}
          >
            {favorited ? "Unfavorite" : "Favorite"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
