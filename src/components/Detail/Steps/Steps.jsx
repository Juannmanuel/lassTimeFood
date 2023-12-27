import style from "./Steps.module.css";
import { useSelector } from "react-redux";
function Steps() {
  const detailFood = useSelector((state) => state.detailFood);
  console.log(detailFood, "detailFood");

  return (
    <section className={style.steps_main}>
      {detailFood?.steps?.map((item, index) => (
        <div key={index} className={style.item_step}>
          <div className={style.number_stap}>
            <span>{`${index + 1}`}</span>
          </div>
          <div className={style.description_stape}>
            <p>{item}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Steps;
