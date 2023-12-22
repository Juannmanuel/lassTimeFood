import style from "./Home.module.css";
import Categories from "../Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFoodByCategorie, getAllCategiries } from "../../redux/actions";
function Home() {
  const categories = useSelector((state) => state.categories);
  const food = useSelector((state) => state.foodByCategory);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFoodByCategorie(categories));
    dispatch(getAllCategiries());
  },[])

  return (
    <section className={style.home_main}>
      {food[food.length - 1]?.length === 0 ? (
        <h1>Cargando</h1>
      ) : (
        categories.map((item, index) => (
          <Categories key={index} category={item} />
        ))
      )}
    </section>
  );
}

export default Home