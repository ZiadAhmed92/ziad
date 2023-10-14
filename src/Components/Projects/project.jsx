import React, { useState } from "react";
import "../Projects/Projects.css"
const project = ({arr}) => {

  return (
    <>
      {arr.map((item ,i)=>
       
        <div className="  col-md-6 mb-3" key={i} >
          <div className="project project-me border-project">
            <img src={`${item.img}`} className="img-project w-100" />
            <h6 className="title-project" style={{ color: "var(--title)" }}>{item.name}</h6>
            <p className="text-project  ">{item.title}</p>
            <div className="d-flex justify-content-between px-3">
              <a target="_blank" href={`${item.github}`}>
                <i className="icon-project fa-brands fa-github"></i>
              </a>

              <a
                className="show"
                target="_blank"
                href={`${item.deploy}`}
              >
                Show
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default project;
