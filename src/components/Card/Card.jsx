import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { IoMdStar } from "react-icons/io";
import Favorite from "./Favorite/Favorite";

function Card({ strMeal, idMeal, strMealThumb }) {
  return (
    <section className={style.card_main} style={{backgroundImage: `url(${strMealThumb})`}}>
      <div className={style.score_food}><span><IoMdStar />5.0</span>
      </div>
      <div className={style.container_favorite}>
        <Favorite/>
      </div>
      <div className={style.name_food}>
        <Link to={`/detail/${idMeal}`}>
          <h3>{strMeal}</h3>
        </Link>
      </div>
    </section>
  );
}

export default Card;
