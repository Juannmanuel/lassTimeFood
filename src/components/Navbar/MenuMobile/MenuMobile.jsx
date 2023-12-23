import { useSelector } from "react-redux";
import style from "./MenuMobile.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdRestaurantMenu } from "react-icons/md";

function MenuMobile() {
  const categories = useSelector((state) => state.categories);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={style.menu_mobile_main}>
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <MdRestaurantMenu
            className={style.icon_menu}
            style={{
              fontSize: "20px",
              border: "none",
              backgroundColor: "transparent",
              borderRadius: ".5rem"
            }}
          />
        ) : (
          <RxHamburgerMenu
            className={style.icon_menu}
            style={{ fontSize: "20px", backgroundColor: "back" }}
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
                <a
                  key={index}
                  href={`/#${item}`}
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className={style.mobile_container_links}>
            <button>
              <a href="/">
                <strong>Home</strong>
              </a>
            </button>
            <button>
              <a href="#">
                <strong>About</strong>
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
