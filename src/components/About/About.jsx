import style from "./About.module.css";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
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
      <footer className={style.container_redes}>
        <Link  target="_blank" to="https://github.com/Juannmanuel" title="GitHub"><FaGithub className={style.icon_redes}/></Link>
        <Link  target="_blank" to="https://www.linkedin.com/in/juan-manuel-/" title="Linkedin"><FaLinkedin className={style.icon_redes}/></Link>
        <Link target="_blank" to="https://juan-manuel.vercel.app/" title="Personal Portfolio"><CgWebsite className={style.icon_redes}/></Link>
      </footer>
    </div>
  );
}

export default About;
