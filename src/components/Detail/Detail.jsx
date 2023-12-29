import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedfood, getDetailFood } from "../../redux/actions";
import Card from "../Card/Card";
import Steps from "./Steps/Steps";
import Table from "./Table/Table";
import Loader from "../Loader/Loader";

function Detail() {
  const dispatch = useDispatch();
  const detailFood = useSelector((state) => state.detailFood);
  const { id } = useParams();
  useEffect(()=>{
    window.scrollTo(0, 0)
    dispatch(getDetailFood(id));
    return () => {
      dispatch(clearSelectedfood());
    }
  },[id, dispatch])



  return (
    <section className={style.detail_main}>
      {!detailFood.quantities ? <Loader/> :  <>
      <section className={style.header_detail}>
        <div className={style.container_card}>
          <Card
            strMeal={detailFood.strMeal}
            idMeal={detailFood.idMeal}
            strMealThumb={detailFood.strMealThumb}
          />
        </div>

        <div className={style.containerDescription}>
          <div className={style.container_tablet_detail}>
            <Table
              ingredients={detailFood.ingredients}
              quantity={detailFood.quantities}
            />
          </div>
        </div>
      </section>
      <Steps />
      <section className={style.links_detail}>

      </section>
      </>}
     
    </section>
  );
}
export default Detail;
