import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { IoMdStar } from "react-icons/io";

function Card({ strMeal, idMeal }) {
  return (
    <section className={style.card_main}>
      <div className={style.score_food}><span><IoMdStar /></span>5.0</div>
      <div className={style.name_food}>
        <Link to={`/detail/${idMeal}`}>
          <h3>{strMeal}</h3>
        </Link>
      </div>
    </section>
  );
}

export default Card;
