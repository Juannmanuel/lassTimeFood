import { useParams } from "react-router-dom"
import style from "./Detail.module.css"

function Detail(){
    const { id } = useParams()

    return (
        <section className={style.detail_main}>
            <h2>Acá se va a mostrar la receta para {id}, pero cuando lo termine! cuck!</h2>
        </section>
    )
}
export default Detail