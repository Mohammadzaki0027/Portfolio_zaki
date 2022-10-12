import React from "react";

import "./Styles/Home.css";
import Typewriter from "typewriter-effect";
import { AiOutlineDownload } from "react-icons/ai";
const Home = () => {
  return (
    <div id="home" className="home">
      <div className="profile-div">
        <div className="words">
          <h3 id="hello">
            Hello, MySelf <span id="spanname_class">Mohammad Zaki</span>
          </h3>

          <h2 id="iam">
            I am a
            <span
              style={{ color: "teal", fontWeight: "bold", marginLeft: "10px" }}
            >
              <Typewriter
                options={{
                  strings: ["Full Stack Developer!", "Mern Developer!"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                }}
              />
            </span>
          </h2>
       
          <div className="divanchor">
            <a
              href="Mohammad_zaki_Resume.pdf"
              className="anchortag"
              download="Mohammad_zaki_Resume.pdf"
            >
              <button className="resumebutton">
                Resume
                <h2 style={{ color: "black" }} className="arrowdown">
                  <AiOutlineDownload />
                </h2>
              </button>
            </a>
          </div>
        </div>

        <div className="profilephoto">
          <img src="square.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
