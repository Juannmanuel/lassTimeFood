import style from "./Titles.module.css"

function Titles({icon, text, cuantity = null, duration = null}) {

    return (
        <div>
            <span>{text}</span>
        </div>
    )
}