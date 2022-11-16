import React from "react";
import "./Styles/Project.css";
import { GoGlobe } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const Project = () => {
  return (
    <div className="projectcontainer" id="project"
    >
      <h1 id="projecth1" >Projects</h1>
      <div className="projectdiv">
        {/* FIRST PROJECT START FROM HERE  */}
        <div className="indivi">
          <div className="imagediv">
            <img src="carpage.PNG" alt="" />
          </div>
          <h1 className="titleofproject">Clone of WaytoGlobe.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                This Is E-Booking Website
              </h5>

              <h5>
                I Work on a Car Page,Payment page and also Work in Backend Parts.I
                used Mongodb atlas to  Store data.I have done the filter sorting functionatily 
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
            <div className="techul">
            <h3>React</h3>
              <h3>||</h3>
              <h3>Mongoose</h3>
              <h3>||</h3>
              <h3>Express</h3>
            </div>
          </div>
          <div className="symbol">
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub Code</span>}>
              <a
                href="https://github.com/Mohammadzaki0027/hurried-hospital-4011"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a
                href="https://waytoglobe.vercel.app"
                target="_blank"
              >
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>
      




















        <div className="indivi">
          <div className="imagediv">
            <img src="Planpagenetdairy.PNG" alt="" />
          </div>
          <h1 className="titleofproject">Clone of Mynetdairy.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                This is an Website guide us about the diet and protein required
                for Good Health.
              </h5>

              <h5 className="unorderlist">
                I work On Planpage and Exercise Page, In plan page calories can
                calculated on the basis of user input.
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
            <div className="techul">
              <h3>React</h3>
              <h3>||</h3>

              <h3>Express</h3>
              <h3>||</h3>
              <h3>Mongoose</h3>
            </div>
          </div>
          <div className="symbol" >
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub code</span>}>
              <a
                href="https://github.com/ahmad-DS/sloppy-impulse-7268"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a href="https://mynetdiary-alpha.vercel.app" target="_blank">
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>
        {/* END FIRST */}
        <div className="indivi">
          <div className="imagediv">
            <img src="timecamp.png" alt="" />
          </div>
          <h1 className="titleofproject">Clone of TimeCamp.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                Timeclamp is Website where organisation can track the Work of
                Employees.
              </h5>
              <h5>
                I work On Homepage and Login Page with full responsive.For
                Autentication I used redux Store to store data.
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
            <div className="techul">
              <h3>React</h3>
              <h3>||</h3>
              <h3>Redux</h3>
              <h3>||</h3>
              <h3>Chakra</h3>
            </div>
          </div>
          <div className="symbol" >
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub Code</span>}>
              <a
                href="https://github.com/Mohammadzaki0027/clone-unsplashhttps://github.com/Mohammadzaki0027/sensitive-thunder-3176"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a href="https://timecampcloneweb.netlify.app" target="_blank">
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>

        <div className="indivi">
          <div className="imagediv">
            <img src="cricket.PNG" alt="" />
          </div>
          <h1 className="titleofproject">Clone of Cricket.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                This is the project of clone of cricket.com Website.This is
                Individual project.
              </h5>
              <h5>
                My Responsibility is to create a Whole Website.I made
                Homepage,Schedule page and News Page.I use Api for getting data.I I Sort and Filter data by using Api.
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
     
            <div className="techul">
              <h3>React</h3>
              <h3>||</h3>
              <h3>Redux</h3>
              <h3>||</h3>
              <h3>Chakra</h3>
              </div>
          </div>
          <div className="symbol">
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub Code</span>}>
              <a
                href="https://github.com/Mohammadzaki0027/-barbarous-use-2331/tree/master/barbarous-use-2331app"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a
                href="https://barbarous-use-2331app.vercel.app/"
                target="_blank"
              >
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>

        <div className="indivi">
          <div className="imagediv">
            <img src="productpageitem.PNG" alt="" />
          </div>
          <h1 className="titleofproject">Clone of Nykaa.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                This is an E commerce Website.where user can purchase products
                online.
              </h5>
              <h5>
                My Responsibility is to create an Hair and Product page of
                Website.I also work on a Filter and Sorting Part functionality.I used Local storage to save data of Products.
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
            <div className="techul">
              <h3>HTML</h3>
              <h3>||</h3>
              <h3>CSS</h3>
              <h3>||</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="symbol">
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub Code</span>}>
              <a
                href="https://github.com/Mohammadzaki0027/nykaaproject"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a
                href="https://rococo-jalebi-9c168f.netlify.app"
                target="_blank"
              >
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>

        {/* project one start from here  */}
        <div className="indivi">
          <div className="imagediv">
            <img src="unsplash.PNG" alt="" />
          </div>
          <h1 className="titleofproject">Clone of UnSplash.com</h1>
          <div className="descriptiondiv">
            <h1 className="descriptionh1">Description</h1>
            <div className="uldiv_style">
              <h5 className="unorderlist">
                This is Website where user can see the HD Photos And download
                it.
              </h5>
              <h5>
                We have done only frontend part My Responsibility is to create a
                Homepage of Website And collaborate the others page homepage.
              </h5>
            </div>
          </div>
          <div>
            <h1 className="descriptionh1">Tech Used</h1>
            <div className="techul">
               <h3>React</h3>
              <h3>||</h3>
              <h3>Redux</h3>
              <h3>||</h3>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="symbol" id="symbol1">
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Git Hub Code</span>}>
              <a
                href="https://github.com/Mohammadzaki0027/clone-unsplash"
                target="blank"
              >
                <AiFillGithub className="symbolgit" />
              </a>
              </Tippy>
            </div>
            <div className="hover">
            <Tippy  className="hello_world"   content={<span style={{   
  fontfamily: "Rubik Distressed"}}>Live Link</span>}>
              <a
                href="https://precious-sorbet-178450.netlify.app"
                target="_blank"
              >
                <GoGlobe className="symbolgit" />
              </a>
              </Tippy>
            </div>
          </div>
        </div>

        {/* project second start from here  */}

       </div>
    </div>
  );
};

export default Project;
