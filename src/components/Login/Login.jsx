import React, { useState } from "react";
import style from "./Login.module.css";
import video from "../../assets/vidioHeader/videoHeader.mp4";
import logo from "../../assets/images/logo.png"

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
    // You can add logic here to handle authentication, such as sending data to a server
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={style.login_main}>
      <section className={style.container_video}>
      <video muted autoPlay loop src={video} />
      <form onSubmit={handleSubmit} className={style.container_form}>
        <div className={style.container_input}>

        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        </div>
        <br />
        <div className={style.container_input}>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
      </section>
    
    </div>
  );
};

export default Login;
