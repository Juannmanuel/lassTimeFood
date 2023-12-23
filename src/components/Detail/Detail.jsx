import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFood } from "../../redux/actions";

function Detail() {
  const dispatch = useDispatch();
  const detailFood = useSelector((state) => state.detailFood);
  console.log(detailFood);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailFood(id));
  }, []);

  return (
    <section className={style.detail_main}>
      <h2>
        Acá se va a mostrar la receta para {id}, pero cuando lo termine! cuck!
      </h2>
    </section>
  );
}
export default Detail;
