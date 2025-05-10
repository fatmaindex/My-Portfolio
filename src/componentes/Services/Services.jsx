import React, { useEffect } from "react";
import "./Services.scss";
import { FaReact } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAngular } from "react-icons/fa";
import { ReactComponent as Img2 } from "./../../Assets/icon-front (1).svg";

function Services() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="Services container section" id="servicesSec">
      <h1 className="secTitle">Services </h1>
      <div className="mainDiv">
        <div className="servicCard" data-aos="fade-up" data-aos-duratio="5000">
          <div className="iconDiv">
            <FaAngular className="icon"/>
          </div>
          <div className="servicName">
            <h3>Angular Development </h3>
          </div>
          <div className="servic">
            <p>
              I build scalable and efficient Angular applications, utilizing
              best practices for component-based architecture and state
              management.
            </p>
          </div>
        </div>
        <div className="servicCard" data-aos="fade-up" data-aos-duratio="3000">
          <div className="iconDiv">
            <FaReact className="icon" />
          </div>

          <div className="servicName">
            <h3>React Development</h3>
          </div>
          <div className="servic">
            <p>
              I create dynamic React interfaces using Tailwind CSS and Redux
              Toolkit, delivering responsive and engaging user experiences.
            </p>
          
          </div>
        </div>
        <div className="servicCard" data-aos="fade-up" data-aos-duratio="4000">
          <div className="iconDiv">
            <Img2 />
          </div>
          <div className="servicName">
            <h3>API Integration</h3>
          </div>
          <div className="servic">
            <p>

I integrate RESTful APIs to ensure smooth data flow, seamless system communication, and secure authentication.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
