import React from "react";
import "./Styles/About.css";

const About = () => {
  return (
    <div className="aboutcontainer">
      <h1 className="h1tag">About Me</h1>
      <div id="about" className="about">
        <ul className="aboutul">
          <li>I am Passionate Web Developer</li>
          <li>Proficient in React, Redux, HTML, CSS, and Javascript,</li>
          <li>
            I am passionate about contributing my skills to the highly
            collaborative work environment.
          </li>

          <li>I am always ready to learn new skills and new things</li>
          <li>
            Looking to deliver excellent web development skills in the MERN
            stack.
          </li>
        </ul>
      </div>

      <h1 className="h1tag">My Skills</h1>

      <div className="skildiv">
        <div className="indiviskill">
          <img src="html.png" alt="html" />
          <h2 className="skillhtag">HTML</h2>
        </div>
        <div className="indiviskill">
          <img src="css.png" alt="css" />
          <h2 className="skillhtag">CSS</h2>
        </div>
        <div className="indiviskill">
          <img src="javascript.jpg" alt="" />
          <h2 className="skillhtag">JAVASCRIPT</h2>
        </div>
        <div className="indiviskill">
          <img src="nodejs.png" alt="" />
          <h2 className="skillhtag">NODEJS</h2>
        </div>
        <div className="indiviskill">
          <img src="react.png" alt="" />
          <h2 className="skillhtag">REACT</h2>
        </div>
        <div className="indiviskill">
          <img src="redux.png" alt="" />
          <h2 className="skillhtag">REDUX</h2>
        </div>
        <div className="indiviskill">
          <img src="chkraui.jpg" alt="" />
          <h2 className="skillhtag">CHAKRA UI</h2>
        </div>
        <div className="indiviskill">
          <img src="npm.png" alt="" />
          <h2 className="skillhtag">NPM</h2>
        </div>
        <div className="indiviskill">
          <img src="typesscript.png" alt="" />
          <h2 className="skillhtag">TYPESSCRIPT</h2>
        </div>
        <div className="indiviskill">
          <img src="bootstarp.jpg" alt="bootstrap" />
          <h2 className="skillhtag">BOOTSTARP</h2>
        </div>
        <div className="indiviskill">
          <img src="git.png" alt="" />
          <h2 className="skillhtag">GIT</h2>
        </div>
        {/* skills add from here  */}
        <div className="indiviskill">
          <img src="netlify.jpg" alt="" />
          <h2 className="skillhtag">NETLIFY</h2>
        </div>

        {/* skills end here  */}
        <div className="indiviskill">
          <img src="mangodb.jpg" alt="" />
          <h2 className="skillhtag">MongooDb</h2>
        </div>
        <div className="indiviskill">
          <img src="express.png" alt="" />
          <h2 className="skillhtag">Express</h2>
        </div>
        <div className="indiviskill">
          <img src="mongoose.png" alt="" />
          <h2 className="skillhtag">Mongoose</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
