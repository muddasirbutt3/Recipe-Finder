import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import Loader from "../../components/Loader/Loader";

function Home({ data, loading,setData }) {
  console.log(data);
  if (loading) return <Loader/>;
  return (
    <div className={style.home}>
      <SearchField setData={setData}/>
      <h3 className={style.title}>Latest Recipes</h3>
      <div className={style.cards}>
        {data.map((recipe) =>
          <Card info={recipe} key={recipe.id}  />
        )}
      </div>
    </div>
  );
}

export default Home;
