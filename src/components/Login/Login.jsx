import React, { useState } from "react";
import style from "./Login.module.css";
import video from "../../assets/vidioHeader/videoHeader.mp4";
import logo from "../../assets/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes agregar lógica aquí para manejar la autenticación, como enviar datos a un servidor
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={style.login_main}>
      <section className={style.container_grid}>
        <div className={style.container_video}>
          <video muted autoPlay loop src={video} />
        </div>
        <form onSubmit={handleSubmit} className={style.container_form}>
          <div className={style.container_input}>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <br />
          <div className={style.container_input}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
