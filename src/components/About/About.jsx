import style from "./About.module.css";

function About() {
  return (
    <div className={style.about_main}>
      <div className={style.container_image}>
        <img
          src="https://juan-manuel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FimageProfile.edcf572f.jpeg&w=256&q=95"
          alt=""
        />
      </div>
      <section className={style.container_slogan}>
        <span>
          Hi, my name is Juan Manuel. I am a full-stack developer. My job is to{" "}
          <span className={style.underline}>
            turn ideas into user experiences
          </span>
          .
        </span>
      </section>
      <footer className={style.container_redes}>redes</footer>
    </div>
  );
}

export default About;
