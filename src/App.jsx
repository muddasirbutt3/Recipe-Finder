import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./pages/Recipe/Recipe";
import Favorite from "./pages/Favorite/Favorite";
import ServerError from "./components/ServerError/ServerError";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;
const searchTerm = "pasta";
const limit = 10;

function App() {
  let initialData = JSON.parse(localStorage.getItem("initialData"));
  // let initialData = JSON.parse(localStorage.getItem('rand'))
  console.log(initialData);

  const [favRecipe, setFavRecipe] = useState(() => {
    let favorite = localStorage.getItem("favRecipe");
    return favorite ? JSON.parse(favorite) : [];
  });
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  console.log(favRecipe);
  useEffect(() => {
    localStorage.setItem("favRecipe", JSON.stringify(favRecipe));
  }, [favRecipe]);

  useEffect(() => {
    // axios.get(`${BaseURL}complexSearch?number=${limit}&apiKey=${apiKey}&addRecipeInformation=true`)
    // axios.get(`https://api.spoonacular.com/recipes/random?apiKey=5d8c563377bb4ef2b19e876606f1f21a`)
    // .then((res) => {
    //   setLoading(false)
    //   setData(res.data.results)
    //   console.log(res.data.results)
    //   localStorage.setItem('initialData',JSON.stringify(res.data.results))
    // })
    // .catch(err => console.log(err))
    setTimeout(() => {
      setLoading(false);
      // setData(res.data.results);
      // setData(response.data);
    }, 2000);
  }, []);

  return (
      <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          // element={<Home setData={setData} data={data} />}
          element={<Home setData={setData} data={data} loading={loading} />}
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
              data={data}
              favRecipe={favRecipe}
              setFavRecipe={setFavRecipe}
            />
          }
        />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
