import { useOutletContext } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";

export default function FavoriteCharactersPage() {
  const { favorites } = useOutletContext();

  console.log(favorites)

  return (
    <>
      <h1>Favorite Characters</h1>
      <Container style={{ paddingTop: "2rem" }}>
        <Row>
          {favorites.map((character) => (
            <Col key={character.id} md={4} className="d-flex">
              <CustomCard
                title={character.name}
                text={`${
                  character.name
                } is a ${character.gender.toLowerCase()} ${character.species.toLowerCase()} ${character.type.toLowerCase()} of ${character.origin.name.toLowerCase()} origin. Status: ${character.status.toLowerCase()}.`}
                imageUrl={character.image}
                buttonText="Visit"
                onButtonClick={() => navigate(`/character/${character.id}`)}
                data={character}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
