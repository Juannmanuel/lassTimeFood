import style from "./Home.module.css";
import Categories from "../Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFoodByCategorie, getAllCategiries, getRandomDishes } from "../../redux/actions";
import FeaturedDishesCarousel from "../FeaturedDishesCarousel/FeaturedDishesCarousel";
import About from "../About/About";
function Home() {
  const categories = useSelector((state) => state.categories);
  const randomFood = useSelector((state) => state.randomFood)
  console.log(randomFood, "home");

  const food = useSelector((state) => state.foodByCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodByCategorie(categories));
    dispatch(getAllCategiries());
    dispatch(getRandomDishes());
  }, []);

  return (
    <section className={style.home_main}>
      {categories.slice(0, 2).map((item, index) => (
        <Categories key={index} category={item} />
      ))}
      <FeaturedDishesCarousel foodRamdon={randomFood.slice(0,10)} title={"Gourmet Discovery"} subTitle={"Explore exceptional dishes crafted to delight your senses."} />
      {categories.slice(3, 5).map((item, index) => (
        <Categories key={index} category={item} />
      ))}
      {categories.slice(6, 8).map((item, index) => (
        <Categories key={index} category={item} />
      ))}
      <FeaturedDishesCarousel foodRamdon={randomFood.slice(10,20)} title={"Global Flavors"} subTitle={"Journey through diverse cuisines with our inspired dishes."} />
      {categories.slice(9, 12).map((item, index) => (
        <Categories key={index} category={item} />
      ))}
    </section>
  );
}

export default Home;
