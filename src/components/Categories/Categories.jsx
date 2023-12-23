import { useSelector } from "react-redux";
import style from "./Categories.module.css";
import Description from "./Description/Description";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function Categories({ category }) {
  const allfood = useSelector((state) => state.foodByCategory);
  let categorieDetail = useSelector((state) =>
    state.categories_datail.filter((item) => item.strCategory == category)
  );
  console.log(categorieDetail, "category");
  console.log(categorieDetail);
  const foodForThisCategory = allfood[category]?.slice(0, 4);
  // Objeto de los platos
  // idMeal:id del plato,
  // strMeal:"nombre del plato",
  // strMealThumb: imagen
  // Objeto de las categorias
  // idCategory:id de la categoria
  // strCategory:nombre de la categoria
  // strCategoryDescription:descripciond e la categoria
  // strCategoryThumb:imgen de la categoria
  console.log(foodForThisCategory);
  return (
    <section id={`${category}`} className={style.categories_main}>
      <section className={style.item_up}>
        <div
          className={style.item}
        >
          <Card
            strMeal={foodForThisCategory[0]?.strMeal}
            idMeal={foodForThisCategory[0]?.idMeal}
            strMealThumb={foodForThisCategory[0]?.strMealThumb}
          />
        </div>
        <div className={style.item_description}>
          <Description
            strCategoryDescription={categorieDetail[0]?.strCategoryDescription}
            category={category}
          />
        </div>
      </section>
      <section className={style.item_down}>
        <Link to={`/detail/${foodForThisCategory[1]?.idMeal}`}>
          <div
            className={style.item}
            style={{
              backgroundImage: `url(${foodForThisCategory[1]?.strMealThumb})`,
            }}
          ></div>
        </Link>
        <Link to={`/detail/${foodForThisCategory[2]?.idMeal}`}>
          <div
            className={style.item}
            style={{
              backgroundImage: `url(${foodForThisCategory[2]?.strMealThumb})`,
            }}
          ></div>
        </Link>

        <Link to={`/detail/${foodForThisCategory[3]?.idMeal}`}>
          <div
            className={style.item}
            style={{
              backgroundImage: `url(${foodForThisCategory[3]?.strMealThumb})`,
            }}
          ></div>
        </Link>
      </section>
    </section>
  );
}

export default Categories;
