import axios from "axios";
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import CustomCard from "../components/CustomCard";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        //console.log(response.data);
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  console.log(character);

  function renderObject(obj, prefix = "") {
    return Object.entries(obj).map(([key, value]) => {
      const formattedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "object" && value !== null) {
        return renderObject(value, formattedKey);
      }

      return (
        <div key={formattedKey}>
          {formattedKey}: {value.toString()}
        </div>
      );
    });
  }

  if (character) {
    const allDetails = renderObject(character)
  }

  return (
    <>
      {character ? (
        <>
          <h1>Character Details Page</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <CustomCard
              title={character.name}
              text={`${
                character.name
              } is a ${character.gender.toLowerCase()} ${character.species.toLowerCase()} ${character.type.toLowerCase()} of ${character.origin.name.toLowerCase()} origin. Status: ${character.status.toLowerCase()}.`}
              imageUrl={character.image}
              buttonText="Visit"
              onButtonClick={() => window.open(character.url, "_blank")}
            />
          </div>
          <div>{renderObject(character)}</div>
        </>
      ) : (
        <div>loading...</div>
      )}
      
    </>
  );
}
