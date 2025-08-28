import React from 'react'
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'


function Card({info}) {
  const navigate = useNavigate()
  function recipePage(id) {
    navigate(`/recipe/${id}`)
  }
  return (
    <div className={style.card} key={info.id} onClick={() => recipePage(info.id)}>
        <div className={style.imgBox}>
        <img className={style.img} src={info.image} alt="" />
        </div>
        <p className={style.title} >{info.title}</p>
    </div>
  )
}

export default Card