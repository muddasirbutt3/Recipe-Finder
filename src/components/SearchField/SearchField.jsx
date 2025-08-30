import React, { useContext, useState } from "react";
import styles from "./SearchFeild.module.css";
import axios from "axios";
import { DataContext} from "../../context/DataContext";
const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
const BaseURL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

function SearchField({ }) {
  const {setData} = useContext(DataContext)
  const [search,setSearch] = useState('')
  function searchByName() {
    axios.get(`${BaseURL}complexSearch?query=${search}&number=8&addRecipeInformation=true&apiKey=${apiKey}`)
    .then((res) => {
        setData(res.data.results)
        setLoading(false)
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
