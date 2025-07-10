import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import NotFound from "./pages/NotFound";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'aboutpage',
        element: <AboutPage />,
      },
      {
        path: 'characterspage',
        element: <CharactersPage />
      },
      {
        path: 'character/:id',
        element: <CharacterDetailsPage />
      },
      {
        path: 'favoritecharacters',
        element: <FavoriteCharactersPage />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;