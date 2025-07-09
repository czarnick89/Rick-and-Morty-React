import axios from "axios";
import { useState, useEffect } from "react";
import CustomCard from "../components/CustomCard";
import { Container, Row, Col } from "react-bootstrap";

export default function CharactersPage() {
  const [data, setData] = useState([]);

  const randomSet = () => {
    const idSet = new Set();
    while (idSet.size < 9) {
      idSet.add(Math.floor(Math.random() * 826) + 1);
    }
    return idSet;
  };

  const idArrayStr = [...randomSet()].toString();

  //console.log(idArrayStr)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${idArrayStr}`
        );
        //console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <>
      <div>
        
      </div>
      <Container style={{ paddingTop: '2rem' }}>
        <Row>
          {data.map((character) => (
            <Col key={character.id} md={4} className="d-flex">
              <CustomCard
                title={character.name}
                text={`${character.name} is a ${character.gender.toLowerCase()} ${character.species.toLowerCase()} ${character.type.toLowerCase()} of ${character.origin.name.toLowerCase()} origin. Status: ${character.status.toLowerCase()}.`}
                imageUrl={character.image}
                buttonText = 'Visit'
                onButtonClick={() => window.open(character.url, '_blank')}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
