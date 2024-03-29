import { useSelector } from "react-redux";
import style from "./MenuMobile.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function MenuMobile() {
  const categories = useSelector((state) => state.categories);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={style.menu_mobile_main}>
      <button onClick={() => setShowMenu(!showMenu)} className={style.icon_menu}>
        {showMenu ? (
          <MdRestaurantMenu
            className={style.icon_menu}
          />
        ) : (
          <RxHamburgerMenu
            className={style.icon_menu}

          />
        )}
      </button>
      {showMenu && (
        <div className={style.content_mobile}>
          <div className={style.mobile_container_search}>
            <div className={style.container_searchBar}>
              <SearchBar />
            </div>
          </div>
          <div className={style.mobile_container_links_categories}>
            <span>
              <strong>Categories</strong>
            </span>
            <div className={style.mobile_container_categories}>
              {categories?.map((item, index) => (
                <Link
                  key={index}
                  to={`/category/${item}`}
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className={style.mobile_container_links}>
            <button>
              <Link to="/">
                <strong>Home</strong>
              </Link>
            </button>
            <button>
              <Link to="/about">
                <strong>About</strong>
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
