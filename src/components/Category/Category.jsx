import { useParams } from "react-router-dom";
import style from "./Category.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { getFoodByCategorie } from "../../redux/actions";

function Category() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const food = useSelector((state) => state.foodByCategory[id]);

  useEffect(()=>{
    window.scrollTo(0, 0)
    dispatch(getFoodByCategorie([id]))
  },[])

  return (
    <div className={style.category_main}>
      <div className={style.title_category}>
        <h3>{id}</h3>
      </div>
      <div className={style.container_cards}>
        {food?.length < 3 ? (
          <Loader />
        ) : (
          food?.map((item) => (
            <div
              className={style.item_category}
              style={{ backgroundImage: `url(${item.strMealThumb})` }}
            >
              <Card strMeal={item.strMeal} idMeal={item.idMeal} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Category;
