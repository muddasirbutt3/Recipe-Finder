import React, { useContext, useEffect, useState } from "react";
import styles from "./Favorite.module.css";
import Card from "../../components/Card/Card";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ServerError from "../../components/ServerError/ServerError";
import { ErrorContext } from "../../context/ErrorContext";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

function Favorite({ favRecipe }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { error, setError } = useContext(ErrorContext);
  useEffect(() => {
    let ids = favRecipe.join(",");
    axios
      .get(`${BaseURL}informationBulk?ids=${ids}&apiKey=${apiKey}`)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
    .catch(err => {
      setError(true)
    })
  }, []);
  if (loading) return <Loader />;
  if (error) return <ServerError />;
  if (favRecipe.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No Favorites Yet ❤️</h2>
        <p>Save your favorite recipes and they’ll appear here!</p>
      </div>
    );
  }
  return (
    <div className={styles.fav}>
      <div className={styles.cards}>
        {data.map((recipe) => (
          <Card info={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
