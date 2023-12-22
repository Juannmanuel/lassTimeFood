import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {

  const location = useLocation()


  return (
    <div className="main_app">
      <Navbar />
      {location.pathname === "/" ? <Header /> : null }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
