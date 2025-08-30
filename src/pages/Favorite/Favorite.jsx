import React, { useEffect } from "react";
import styles from "./Favorite.module.css";
import Card from "../../components/Card/Card";
import axios from "axios";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

function Favorite({ favRecipe, data }) {
  useEffect(() => {
    let ids = favRecipe.join(",");
    // axios
    //   .get(`${BaseURL}informationBulk?ids=${ids}&apiKey=${apiKey}`)
    //   .then((res) => {
    //     // setLoading(false);
    //     // setData(res.data.results);
    //     console.log(res);
    //     localStorage.setItem('favitems',JSON.stringify(res.data))
    //   });
    console.log(ids);

    // setTimeout(() => {
    // setLoading(false);
    // setData(res.data.results);
    // setData(response.data);
    // }, 2000);
  }, []);
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
        {data.map((recipe) =>
          <Card info={recipe} key={recipe.id}  />
        )}
      </div>
    </div>
  );
}

export default Favorite;
