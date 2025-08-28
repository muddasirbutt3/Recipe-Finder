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
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;
const searchTerm = "pasta";
const limit = 10;

function App() {
  let initialData = [
    {
      id: 715415,
      title: "Red Lentil Soup with Chicken and Turnips",
      image: "https://img.spoonacular.com/recipes/715415-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 716406,
      title: "Asparagus and Pea Soup: Real Convenience Food",
      image: "https://img.spoonacular.com/recipes/716406-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 644387,
      title: "Garlicky Kale",
      image: "https://img.spoonacular.com/recipes/644387-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 715446,
      title: "Slow Cooker Beef Stew",
      image: "https://img.spoonacular.com/recipes/715446-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 782601,
      title: "Red Kidney Bean Jambalaya",
      image: "https://img.spoonacular.com/recipes/782601-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 716426,
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      image: "https://img.spoonacular.com/recipes/716426-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 716004,
      title:
        "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
      image: "https://img.spoonacular.com/recipes/716004-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 716627,
      title: "Easy Homemade Rice and Beans",
      image: "https://img.spoonacular.com/recipes/716627-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 664147,
      title: "Tuscan White Bean Soup with Olive Oil and Rosemary",
      image: "https://img.spoonacular.com/recipes/664147-312x231.jpg",
      imageType: "jpg",
    },

    {
      id: 640941,
      title: "Crunchy Brussels Sprouts Side Dish",
      image: "https://img.spoonacular.com/recipes/640941-312x231.jpg",
      imageType: "jpg",
    },
  ];
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
    // axios.get(`complexSearch?${BaseURL}number=${limit}&apiKey=${apiKey}`)
    // .then((res) => {
    //   setLoading(false)
    //   setData(res.data.results)
    //   console.log(res.data.results)
    // })
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
          element={<Home setData={setData} data={data} loading={loading} />}
        />
        <Route
          path="/recipe/:id"
          element={<Recipe favRecipe={favRecipe} setFavRecipe={setFavRecipe} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite data={data} favRecipe={favRecipe} setFavRecipe={setFavRecipe} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
