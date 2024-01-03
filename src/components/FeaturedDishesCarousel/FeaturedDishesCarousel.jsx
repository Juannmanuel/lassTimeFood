import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "./FeaturedDishesCarousel.module.css";
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const FeaturedDishesCarousel = ({ foodRamdon }) => {
  console.log(foodRamdon, "foodRamdon");

  return (
    <section className={style.featured_dishes_main}>
      <div className={style.title_dishes}>
        <h2>Get Inspired by Our Featured Dishes</h2>
        <h3>
          Discover the creativity and excellence in each dish from our kitchen.
        </h3>
      </div>
      {foodRamdon?.length === 10 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={style.mySwiper}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {foodRamdon?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                strMeal={item.strMeal}
                idMeal={item.idMeal}
                strMealThumb={item.strMealThumb}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default FeaturedDishesCarousel;
