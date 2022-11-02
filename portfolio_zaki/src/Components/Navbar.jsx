import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              onClick={closeMenu}
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={closeMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={closeMenu}
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={closeMenu}
              to="git"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Github Info
            </Link>
          </li>

          <li className="nav-item">
            <Link
              onClick={closeMenu}
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <a
              href="Mohammad_zaki_Resume.pdf"
              className="anchortag"
              download="Mohammad_zaki_Resume.pdf"
              style={{ textDecoration: "none" }}
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="socialmediaicon">
          <div className="socialgit">
            {" "}
            <a href="https://github.com/Mohammadzaki0027" target="blank">
              <AiFillGithub className="symbolgit" />
            </a>
          </div>
          <div className="iconindiv">
            <div className="socialgitl" >
              {" "}
              <a
                href="https://www.linkedin.com/in/mohammad-zaki-b48821158/"
                target="blank"
              >
                <AiFillLinkedin className="symbolgit" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
