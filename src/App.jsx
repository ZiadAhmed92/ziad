import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(scrollY);
    
  };
  return (
    <>
      <div id="header1" className="container-fluid perant ">
        <Header />
        <div className="line1"></div>
        <Hero />
        <div className="line"></div>
        <Projects/>
        <div className="line"></div>
        <Contact />
        <div className="line"></div>
        <Footer />
        <a href="#header1">
        {" "}
        <div
          className={` arrowUp position-fixed ${
            scroll >= 200 ? " d-flex" : "d-none"
          }`}
        >
          <i className=" fa-solid fa-arrow-up"></i>
        </div>
      </a>
      </div>
    </>
  );
}

export default App;
