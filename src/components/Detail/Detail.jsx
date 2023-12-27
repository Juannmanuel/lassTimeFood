import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFood } from "../../redux/actions";
import Card from "../Card/Card";
import Steps from "./Steps/Steps";

function Detail() {
  const dispatch = useDispatch();
  const detailFood = useSelector((state) => state.detailFood);
  console.log(detailFood, "detailFood");
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailFood(id));
  }, []);

  return (
    <section className={style.detail_main}>
      <section className={style.header_detail}>
        <div className={style.containerImage}>
          <Card strMeal={detailFood.strMeal} idMeal={detailFood.idMeal} strMealThumb={detailFood.strMealThumb}/>
        </div>
        <div className={style.containerDescription}>
          <div className={style.container_card_detail}></div>
          <div className={style.container_tablet_detail}></div>
        </div>
      </section>
      <Steps/>
      <section className={style.links_detail}></section>
    </section>
  );
}
export default Detail;
