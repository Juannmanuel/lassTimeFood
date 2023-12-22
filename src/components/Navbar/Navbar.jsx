import { useSelector } from "react-redux";
import style from "./Navbar.module.css";
import MenuMobile from "./MenuMobile/MenuMobile";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {
    const categories = useSelector((state) => state.categories)
  return (
    <nav className={style.nav_main}>
      <div className={style.container_logo}>logo</div>
      <div className={style.container_links}>
        <div className={style.dropdown}>
          <button className={style.dropbtn}>Categories</button>
          <div className={style.dropdown_content}>
          {categories.map((item, index) => <a key={index} href={`/category/${item}`}>{item}</a>)}
          </div>
        </div>
        <button><a href="/">Home</a></button>
        <button><a href="#">About</a></button>
      </div>
      <div className={style.container_search}><SearchBar/></div>
      <div className={style.menu_mobile}><MenuMobile/></div>
    </nav>
  );
}

export default Navbar;
