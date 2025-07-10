import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {
  const [favorites, setFavorites] = useState([]); // initilize a favorite array and setter

  const isFavorite = (characterData) => // checks if the current char is already in favorites
    favorites.find((f) => f.id === characterData.id); 

  const addToFavorites = (characterData) => { // uses isFavorite to check if char is already in favorites, if not add it using setFavorite
    if (favorites.length>3) {
      console.log('too many favorites')
      return
    }
    
    if (isFavorite(characterData)) {
      console.log("favorite already in list");
    }

    setFavorites([...favorites, characterData]);
  };

  const removeFromFavorites = (characterData) => { // delete char from favorites by not filtering by its ID

    setFavorites(favorites.filter((f) => f.id !== characterData.id));
  };

  const contextObj = { // create an object to pass to the outlet via context so all data and methods are useable by outlets children
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  return (
    <>
      <div>
        <NavBar />
      </div>

      <Outlet context={contextObj}/>
    </>
  );
}
