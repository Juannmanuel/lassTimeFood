import style from "./Header.module.css";
import video from "../../../src/assets/vidioHeader/videoHeader.mp4";
import { FaBowlFood } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import { FaCheck } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FiBookOpen, FiBook, FiUsers } from "react-icons/fi";

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
              Log in or sign up to enjoy all the features of our culinary community. Share your creations, connect with other kitchen enthusiasts, leave reviews on others' dishes, and bookmark your favorite recipes. Join us and take your culinary experience to the next level.
            </p>
          </section>
          <div className={style.btn_login}>
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
