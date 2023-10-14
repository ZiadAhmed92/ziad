import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [them, setThem] = useState(localStorage.getItem("localThem") ?? "dark");
  function changeColor() {
    if (them === "light") {
      setThem("dark");
    } else {
      setThem("light");
    }
  }
  useEffect(() => {
    if (them === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("localThem", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("localThem", "light");
    }
  }, [them]);
  return (
    <header id="header" className="flex mt-4">
      <button
        className="btn-header menu btn  border  text-white"
        onClick={() => setShowModel(!showModel)}
      >
        <i className="fa-solid fa-bars fa-beat"></i>
      </button>
      {showModel ? (
        <div className="menu-header ">
          <div>
            <ul className="position-relative">
              <li>
                <a onClick={() => setShowModel(!showModel)} href="#header1">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => setShowModel(!showModel)} href="">
                  Articles
                </a>
              </li>
              <li>
                <a onClick={() => setShowModel(!showModel)} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={() => setShowModel(!showModel)} href="">
                  Speaking
                </a>
              </li>
              <div onClick={() => setShowModel(!showModel)}>
                <i className="icon fa-solid fa-xmark fa-beat"></i>
              </div>
              <li>
                <a onClick={() => setShowModel(!showModel)} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      <div />
      <nav>
        <ul>
          <li>
            <a href="#header1">Home</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          changeColor();
        }}
        className="btn-header rounded-circle btn  border  text-white"
      >
        {them === "dark" ? (
          <i className="fa-regular fa-moon fa-beat"></i>
        ) : (
          <i className="sun fa-solid fa-sun fa-beat"></i>
          
        )}
      </button>
    </header>
  );
};

export default Header;
