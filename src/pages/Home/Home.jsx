import React from "react";
import SearchField from "../../components/SearchField/SearchField";
import Card from "../../components/Card/Card";
import style from "./Home.module.css";

function Home({ data, loading,setData }) {
  console.log(data);
  if (loading) return <h1>Loading......</h1>;
  return (
    <div>
      <SearchField setData={setData}/>
      <div className={style.cards}>
        {data.map((recipe) =>
          <Card info={recipe} key={recipe.id}  />
        )}
      </div>
    </div>
  );
}

export default Home;
