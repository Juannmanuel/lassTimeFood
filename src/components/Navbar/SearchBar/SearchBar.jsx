import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { SearchFood } from "../../../redux/actions";
import { Link } from "react-router-dom";

function SearchBar() {
  const resultSearch = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
    dispatch(SearchFood(event.target.value));
    setIsSearching(!!event.target.value);

  };
  const handleSelectPlate = () => {
    setIsSearching(false);
    setInput("")
    dispatch(SearchFood(""))
  };

  return (
    <div className={style.searchBar_main}>
      <div className={style.input_searchBar}>
        <input
          type="text"
          placeholder="Search for your favorite food."
          onChange={handleChange}
          value={input}
        />
      </div>
      {isSearching && resultSearch && resultSearch.length > 0 ? (
        <div className={style.content_result_search}>
          {resultSearch.map((item, index) => (
            <div key={index} className={style.result_search}>
              <div className={style.container_image_search} onClick={handleSelectPlate}>
                {" "}
                <Link to={`/detail/${item.idMeal}`}>
                  <img src={item.strMealThumb} alt={item.strMeal} />{" "}
                </Link>
              </div>
              <div className={style.container_title_search}>{item.strMeal}</div>
            </div>
          ))}
        </div>
      ) : isSearching ? (
        <div className={style.content_result_search}>
          Recipe not found.
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
