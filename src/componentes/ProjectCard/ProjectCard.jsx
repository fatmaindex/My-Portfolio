import React, { useEffect } from "react";
import "./ProjectCard.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ proImg, proName, proDetail, proSite, proCode }) {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="ProjectCard" data-aos="fade-up">
      <div className="imgDiv">
        <img src={proImg} alt="proImg" />
        <div className="layover"></div>
      </div>
      <div className="discription">
        <h1 className="proName">{proName}</h1>
        <p className="tools">
          {proDetail.map((item, Key) => {
            return <span>{item}</span>;
          })}
        </p>
        <div className="links">
          <a href={proCode}>Code</a>
          <a href={proSite}>Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
