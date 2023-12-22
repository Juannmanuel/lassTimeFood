import { Link } from "react-router-dom";
import style from "./Description.module.css";
import { FaStar } from "react-icons/fa";

function Description({ category, strCategoryDescription }) {
  return (
    <section className={style.description_main}>
      <div className={style.title_description}>
        <h2>{category}</h2>
      </div>
      <div className={style.description_text}>
        {strCategoryDescription}
      </div>
      <div className={style.button_category}>
        <span>{`Explore a wide selection of dishes in ${category}`}</span>
        <button><Link to={`/category/${category}`}>{`More options from ${category}`}</Link></button>
      </div>
    </section>
  );
}

export default Description;
