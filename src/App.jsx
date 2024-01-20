import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import SignIn from "./components/SignUp/SignUp";

function App() {
  const location = useLocation();
  console.log(location.pathname.includes("category"));

  return (
    <div className="main_app">
      <Navbar />
      {location.pathname === "/" ? <Header /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/signIn" element={<SignIn/>}/>
      </Routes>
      {location.pathname.includes("category") ? null : <Footer />}
    </div>
  );
}

export default App;
