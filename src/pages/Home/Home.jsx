import React, { useContext } from "react";
import SearchField from "../../components/SearchField/SearchField";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Loader from "../../components/Loader/Loader";
import { DataContext } from "../../context/DataContext";
import { ErrorContext } from "../../context/ErrorContext";

function Home({ loading }) {
  const { data, setData } = useContext(DataContext);
  const {error, setError} = useContext(ErrorContext)
  if(error) return <ServerError/>
  return (
    <div className={style.home}>
      <SearchField setData={setData} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <h3 className={style.title}>Latest Recipes</h3>
          <div className={style.cards}>
            {data.map((recipe) => (
              <Card info={recipe} key={recipe.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
