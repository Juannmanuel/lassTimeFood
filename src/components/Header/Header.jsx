import style from "./Header.module.css";
import video from "../../../src/assets/vidioHeader/videoHeader.mp4";
import { FaBowlFood } from "react-icons/fa6";
function Header() {
  return (
    <div className={style.header_main}>
      <video muted autoPlay loop src={video} />
    </div>
  );
}

export default Header;
