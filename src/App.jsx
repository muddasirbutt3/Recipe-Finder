import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./pages/Recipe/Recipe";
import Favorite from "./pages/Favorite/Favorite";
import ServerError from "./components/ServerError/ServerError";
import { DataContext } from "./context/DataContext";
import { ErrorContext } from "./context/ErrorContext";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;
const limit = 12;

function App() {
  const [favRecipe, setFavRecipe] = useState(() => {
    let favorite = localStorage.getItem("favRecipe");
    return favorite ? JSON.parse(favorite) : [];
  });
  const {setData} = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const {error, setError} = useContext(ErrorContext)
  useEffect(() => {
    localStorage.setItem("favRecipe", JSON.stringify(favRecipe));
  }, [favRecipe]);

  useEffect(() => {
    axios.get(`${BaseURL}random?number=${limit}&apiKey=${apiKey}&addRecipeInformation=true`)
    .then((res) => {
        setData(res.data.recipes)
        setLoading(false)
    })
    .catch(err => {
      setError(true)
    })
  }, []);
  if(error) return <ServerError/>
  return (
      <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home  loading={loading} />}
        />
        <Route
          path="/recipe/:id"
          element={<Recipe favRecipe={favRecipe} setFavRecipe={setFavRecipe} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/favorites"
          element={
            <Favorite
              favRecipe={favRecipe}
            />
          }
        />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
