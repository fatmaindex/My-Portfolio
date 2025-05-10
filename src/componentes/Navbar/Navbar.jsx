import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from 'react-icons/io5';
import { VscThreeBars } from 'react-icons/vsc';
import { ReactComponent as Logo } from './../../Assets/fatmalogo.svg';
import "./Navbar.scss";
function Navbar() {
    const [nav, setNav] = useState("nav");

    const showNav = () => {
        setNav("nav active");
    };
    const hideNav = () => {
        setNav("nav ");
    };
    return (
        <header className='Navbar container'>
            <div className="logoDiv">
                <Logo />
            </div>
            <div className={nav}>
                <IoCloseSharp className='closeicon' onClick={hideNav} />
                <li>
                    <Link
                        to="homeSec"
                        smooth={true}
                        duration={500}
                        activeClass="active"
                        spy={true}
                        offset={-70}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="aboutSec"
                        smooth={true}
                        offset={-30}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="projectsSec"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="skillsSec"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="servicesSec"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="contactSec"
                        smooth={true}
                        offset={-50}
                        duration={500}
                        activeClass="active"
                        spy={true}
                    >
                        Contact
                    </Link>
                </li>
            </div>
            <VscThreeBars className='barsIcon' onClick={showNav} />
        </header>
    );
}

export default Navbar;
