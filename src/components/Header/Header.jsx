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
          <img src={logo} alt="lassTimeFood" />
        </div>
        <div className={style.description_header}>
          <div className={style.description_header_title}>
            <FaCheck style={{ color: "green" }} />
            <span>Explora una Colección de 500+ Recetas</span>
          </div>
          <div className={style.description_header_title}>
            <FaCheck style={{ color: "green" }} />
            <span>Descubre Más de 600 Ingredientes Únicos</span>
          </div>{" "}
          <div className={style.description_header_title}>
            <FaUtensils />
            <span>Déjate Seducir por una Selección de 400+ Platos</span>
          </div>{" "}
          <div className={style.description_header_title}>
            <FiUsers />
            <span>Únete a la Comunidad Culinary World</span>
          </div>
          <div className={style.description_header_title}>
            <FiBook style={{ width: "30px" }} />
            <span>
              Comparte Tu Experiencia y Conéctate con Otros Aficionados
            </span>
          </div>
        </div>
        <div className={style.login_header}>
          <section>
            <p>
              Inicia sesión o regístrate para disfrutar de todas las funciones
              de nuestra comunidad culinaria. Comparte tus creaciones, conecta
              con otros entusiastas de la cocina, deja reseñas sobre los platos
              de los demás y marca tus recetas favoritas. Únete a nosotros y
              lleva tu experiencia culinaria al siguiente nivel.
            </p>
          </section>
          <div className={style.btn_login}>
            <button>Login</button>
            <button>Signin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
