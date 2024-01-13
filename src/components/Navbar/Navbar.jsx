import { useSelector } from "react-redux";
import style from "./Navbar.module.css";
import MenuMobile from "./MenuMobile/MenuMobile";
import SearchBar from "./SearchBar/SearchBar";
import logoNav from "../../assets/images/logoNav.jpeg"
import { Link } from "react-router-dom";
function Navbar() {
    const categories = useSelector((state) => state.categories)
  return (
    <nav className={style.nav_main}>
      <div className={style.container_logo}><img src={logoNav} alt="logo" /></div>
      <div className={style.container_links}>
        <div className={style.dropdown}>
          <button id="title_nav" className={style.dropbtn}>Categories</button>
          <div className={style.dropdown_content}>
          {categories.map((item, index) => <Link key={index} href={`/category/${item}`}>{item}</Link>)}
          </div>
        </div>
        <button id="title_nav"><Link href="/">Home</Link></button>
        <button id="title_nav"><Link href="/about">About</Link></button>
      </div>
      <div className={style.container_search}><SearchBar/></div>
      <div className={style.menu_mobile}><MenuMobile/></div>
    </nav>
  );
}

export default Navbar;
