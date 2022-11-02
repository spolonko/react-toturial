import React from "react";
import slack from "../images/slack.png";
import icon from "../images/icon.png";
import { AiFillGithub } from "react-icons/ai";
const Footer = () =>{
    return (
       <>
          <div className="icons-div">
              <a href="twitter.com/eccentricishaku" className="slack-icon">
                 <img src={slack} alt="" className="slack-image" />
              </a>
              <a href="github.com/spolonko">
                 <AiFillGithub className="git" />
              </a>
          </div>
          <footer className="footer">
             <div className="allow">
               <h2 style={{ fontSize: 30 }} id="zurin">
                  Zuri<span>.</span>Internship
               </h2>
             </div>
             <div className="same">
               <p className="ligth">HNG Internship 9 Frontend Task</p>
             </div>
             <div className="same">
               <img src={icon} alt="loading" className="img" />
             </div>
           </footer>
   </>

    )
}
export default Footer;