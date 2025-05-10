import React from 'react'
import "./Footr.scss"
import { FaTelegramPlane } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className='Footer'>
<div className="leftDiv">
    <p>Developed by Fatma Gamal © Copyright 2024
</p>
</div>
<div className="rightDiv">
<div className="iconsDiv">
                
                <a href="http://t.me/Fatmagamal26"><FaTelegramPlane className='icon' /></a>
                <a href="https://github.com/fatmaindex/university.git"><ImGithub className='icon' /></a>
                    
                        <a href="https://www.linkedin.com/in/fatma-gamal-98b297235"> <GrLinkedinOption className='icon' /></a>
                        <a href="https://www.instagram.com/fatma.gamal.733?igsh=MW9kY2Q4a2dubjg4Yg=="> <FaInstagram className='icon' />
</a>
                    </div>
</div>
    </footer>
  )
}

export default Footer
