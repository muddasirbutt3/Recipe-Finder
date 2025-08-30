import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import ServerError from "../../components/ServerError/ServerError";
import { ErrorContext } from "../../context/ErrorContext";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;
function Recipe({ setFavRecipe, favRecipe }) {
  const { id } = useParams();
  let [data, setData] = useState("");
  let [loading, setLoading] = useState(true);
  const { error, setError } = useContext(ErrorContext);
  useEffect(() => {
    axios
      .get(`${BaseURL}${id}/information?apiKey=${apiKey}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err.response.data);
      });
  }, []);
  function addFavorite() {
    const isInclude = favRecipe.includes(id);
    if (isInclude) {
      setFavRecipe((prev) => prev.filter((ele) => ele != id));
    } else {
      setFavRecipe((prev) => [...prev, id]);
    }
  }

  if (loading) return <Loader />;
  if (error) return <ServerError />;

  return (
    <div className={styles.recipePage}>
      <div className={styles.topSection}>
        <div className={styles.imgBox}>
          <img src={data.image} alt={data.title} className={styles.img} />
        </div>

        <div className={styles.infoBox}>
          <h2 className={styles.title}>{data.title}</h2>
          <div className={styles.diets}>
            {data.diets?.map((diet, ind) => (
              <div key={ind}>{diet}</div>
            ))}
          </div>
          <p>
            <strong>Servings:</strong> {data.servings}
          </p>
          <p>
            <strong>Ready in:</strong> {data.readyInMinutes} mins
          </p>
          {data.dishTypes?.length > 0 && (
            <p>
              <strong>Dish Types:</strong> {data.dishTypes.join(", ")}
            </p>
          )}
          <button
            className={styles.favBtn}
            style={{
              backgroundColor: favRecipe.includes(id) ? "#ccc" : "#ff4d4d",
            }}
            onClick={addFavorite}
          >
            {favRecipe.includes(id)
              ? "💔 Remove from Favorites"
              : "❤️ Add to Favorites"}
          </button>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />
        <h3>Ingredients</h3>
        <ul className={styles.ingredients}>
          {data.extendedIngredients?.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <div
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: data.instructions }}
        />
      </div>
    </div>
  );
}

export default Recipe;
