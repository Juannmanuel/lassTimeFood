import style from "./Header.module.css";
import video from "../../../src/assets/vidioHeader/videoHeader.mp4";
import { FaBowlFood } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import { FaCheck } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FiBookOpen, FiBook, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header_main}>
      <div className={style.container_video}>
        <video muted autoPlay loop src={video} />
      </div>

      <div className={style.welcome_header}>
        <div className={style.title_header}>
          <img src={logo} alt="LastTimeFood" />
        </div>
        <div className={style.description_header}>
          <div className={style.description_header_title}>
            <FaCheck style={{ color: "green" }} />
            <span>Explore a Collection of 500+ Recipes</span>
          </div>
          <div className={style.description_header_title}>
            <FaCheck style={{ color: "green" }} />
            <span>Discover More than 600 Unique Ingredients</span>
          </div>{" "}
          <div className={style.description_header_title}>
            <FaUtensils />
            <span>Indulge in a Selection of 400+ Dishes</span>
          </div>{" "}
          <div className={style.description_header_title}>
            <FiUsers />
            <span>Join the Culinary World Community</span>
          </div>
          <div className={style.description_header_title}>
            <FiBook style={{ width: "30px" }} />
            <span>
              Share Your Experience and Connect with Other Enthusiasts
            </span>
          </div>
        </div>
        <div className={style.login_header}>
          <section>
            <p>
              Sign up to unlock our culinary community. Share creations, connect
              with enthusiasts, review dishes, and bookmark favorites. Elevate
              your culinary experience with us.{" "}
            </p>
          </section>
          <div className={style.btn_login}>
           <button> <Link to={"/login"} style={{textDecoration: "none", color: "white"}}>Login</Link></button>
            <button><Link to={"/login/signIn"} style={{textDecoration: "none", color: "white"}}>Sign up</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
