import style from "./Loader.module.css";

function Loader() {
  return (
<div className={style.loader}>
  <div className={style.box_load1}></div>
  <div className={style.box_load2}></div>
  <div className={style.box_load3}></div>
</div>
  );
}

export default Loader;
