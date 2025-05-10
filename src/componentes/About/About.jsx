import React from "react";
import "./About.scss";
import { ReactComponent as AboutImg } from "./../../Assets/undraw_online_resume_re_ru7s.svg";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className=" About container section" id="aboutSec">
      <h1 className="aboutTitle">
        about <span>me</span>
      </h1>
      <div className="content">
        <div className="leftDiv" data-aos="fade-right">
          <h2>Fatma Gamal</h2>
          <h1>
            {" "}
            <Typewriter
              words={["React Developer","Angular Developer","Responsive Web Builder"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </h1>
          <div className="info">
            <ul>
              <li>
                Front-end Developer with experience in creating responsive web
                applications using Angular, TypeScript, and React.js.
              </li>
              <li>
                Skilled in creating dynamic user-friendly interfaces for projects like
                e-commerce platforms and personal portfolios.
              </li>
              <li>
                Focused on clean code practices and optimizing performance for
                seamless user experiences
              </li>
              <li>
                Experienced in integrating RESTful APIs for features like user authentication and product management.
              </li>
              <li>
                passionate about
                continuous learning and mastering the latest web technologies.
              </li>
            </ul>
          </div>
        </div>
        <div className="rightDiv" data-aos="fade-left">
          <AboutImg />
        </div>
      </div>
    </section>
  );
}

export default About;
