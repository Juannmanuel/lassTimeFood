import style from "./Footer.module.css"
import { Link } from "react-router-dom"

function Footer (){

    return (
        <footer className={style.footer}>
        <small className={`${style.smallText} block text-xs`}>
         <Link to={"https://juan-manuel.vercel.app"} target="_blank" style={{textDecoration: "none", color:"#e2e2e3"}}>&copy; 2023 Juan Manuel.</Link>
        </small>
        <p className={`text-xs ${style.infoText}`}>
          <span className={style.boldText}>Acerca de este sitio web:</span> construido con
          React Vite (App Router y Server Actions), JavaScript, CSS module, alojado en Vercel.
        </p>
      </footer>
    )
}

export default Footer