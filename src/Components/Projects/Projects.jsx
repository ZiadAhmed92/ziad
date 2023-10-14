import React, { useState } from "react";
import "./Projects.css";
import Project from "./project";
import img1 from "../../image/crud.png";
import img2 from "../../image/movies.png";
import img3 from "../../image/games.png";
import img4 from "../../image/fadl.png";

const Projects = () => {
  const [active, setActive] = useState("All Project");
  let projectMe = [
    {
      category: "react",
      name: "MOVIES",
      img: `${img2}`,
      title:
        "A site that shows you the movies that topped the trend, find out everydetail you want to know about the movie, know the directors, and many details, and I have used React",
      deploy: "http://movie-ziad.vercel.app/",
      github: "https://github.com/ZiadAhmed92/movie",
    },
    {
      category: "react",
      name: "Games",
      img: `${img3}`,
      title:
        "A games website that gives you a speed of use that you cannot find on any other site, as it enables you to download the latest games and try them with the lowest service.",
      deploy: "https://ziadahmed92.github.io/Games/",
      github: "https://github.com/ZiadAhmed92/Games",
    },
    {
      category: "js",
      name: "CRUD",
      img: `${img1}`,
      title:
        "The project is a system that allows the user to add, remove, and modify any products that I have used javascript and Html And css",
      deploy: "https://ziadahmed92.github.io/Crud/crud.html",
      github: "https://github.com/ZiadAhmed92/Crud",
    },
    {
      category: "react",
      name: "Material",
      img: `${img4}`,
      title:
        "A site that helps you find summaries and the practical part in all academic subjects , It is assigned to the Korean College of Technology, Department of Mechatronicst",
      deploy: "http://app2-v7ma.vercel.app/",
      github: "https://github.com/ZiadAhmed92/app2",
    },
  ];
  const [arr, setArr] = useState(projectMe);
  function filterProject(prop, active) {
    setActive(active);
    let newArr = projectMe.filter((item) => {
      return item.category === prop;
    });
    setArr(newArr);
  }
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="btn-main1 pb-4">
              <button
                onClick={() => {
                  setActive("All Projects");
                  setArr(projectMe);
                }}
                className={`btn-main ${
                  active === "All Projects" ? " active" : ""
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => {
                  filterProject("css", "HTML & CSS");
                }}
                className={`btn-main ${
                  active === "HTML & CSS" ? " active" : ""
                }`}
              >
                {" "}
                HTML & CSS
              </button>
              <button
                onClick={() => {
                  filterProject("js", "JavaScript");
                }}
                className={`btn-main ${
                  active === "JavaScript" ? " active" : ""
                }`}
              >
                JavaScript{" "}
              </button>
              <button
                onClick={() => {
                  filterProject("react", "React");
                }}
                className={`btn-main ${active === "React" ? " active" : ""}`}
              >
                {" "}
                React
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container">
              <div className="row justify-content-center">
                <Project arr={arr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
