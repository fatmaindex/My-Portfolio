import React, { useEffect } from 'react';
import "./Home.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { FaCodeFork, FaStar } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import FatmaResume from  "./../../Assets/Fatma-Gamal.cv.pdf";
import FATMA from "./../../Assets/mainImg.avif";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 }); 
    }, []);
    
    return (
        <section className='Home container section' id='homeSec'>
            <div className="homeContent" data-aos="fade-right">
                <h3>Hello there</h3>
                <h2 className='myName'>I'm <span>Fatma</span> Gamal</h2>
                <h1>
                    <Typewriter
                        words={['Front-end developer','Angular-developer', 'React.js developer','Crafting interactive UIs','Responsive Web Builder',]}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <div className="btnsDiv">
                    <button className='cvBtn'>
                        <a href={FatmaResume} download>Download CV</a>
                    </button>
                    <button className='starBtn'>
                        <FaCodeFork />
                        <FaStar />
                    </button>
                </div>
                <div className="iconsDiv">
                    <div className="iconDiv">
                        <a href="https://www.linkedin.com/in/fatma-gamal-98b297235" aria-label="LinkedIn">
                            <GrLinkedinOption className='icon' />
                        </a>
                    </div>
                    <div className="iconDiv">
                        <a href="https://github.com/fatmaindex" aria-label="GitHub">
                            <ImGithub className='icon' />
                        </a>
                    </div>
                    <div className="iconDiv">
                        <a href="mailto:youremail@example.com" aria-label="Email">
                            <MdOutlineMailOutline className='icon' />
                        </a>
                    </div>
                    <div className="iconDiv">
                        <a href="http://t.me/Fatmagamal26" aria-label="Telegram">
                            <FaTelegramPlane className='icon' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="svgDiv" data-aos="fade-left">
                <img className="fatma" src={FATMA} alt="Fatma Gamal" />
                <div className="shape"></div>
            </div>
        </section>
    );
}

export default Home;
