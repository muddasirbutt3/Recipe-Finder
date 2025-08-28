import React, { useState } from "react";
import styles from "./SearchFeild.module.css";
import axios from "axios";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

function SearchField({ setData }) {
  const [search, setSearch] = useState("");
  function searchByName() {
    // axios.get(`${BaseURL}query=${search}&number=6&addRecipeInformation=true&apiKey=${apiKey}`)
    axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=5d8c563377bb4ef2b19e876606f1f21a')
    .then((res) => {
      // setLoading(false)
      // setData(res.data.results)
      console.log(res)
    })
    setSearch('')
  }
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Recipe"
      />
      <button className={styles.btn} onClick={searchByName}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default SearchField;
