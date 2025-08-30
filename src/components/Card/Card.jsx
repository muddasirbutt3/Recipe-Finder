import React from "react";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ info }) {
  const navigate = useNavigate();
  function recipePage(id) {
    navigate(`/recipe/${id}`);
  }
  return (
    <div
      className={style.card}
      key={info.id}
      onClick={() => recipePage(info.id)}
    >
      <div className={style.imgBox}>
        <img className={style.img} src={info.image} alt="" />
      </div>
      <div className={style.title}>
        <p>{info.title}</p>
        <div className={style.details}>
          <p>{info.readyInMinutes} min</p>-
          <p>{info.servings} plates</p>
        </div>
        </div>
    </div>
  );
}

export default Card;
