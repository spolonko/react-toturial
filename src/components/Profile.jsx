import React from "react";
import icon1 from "../images/icon1.png";
import profileimage from "../images/my-image.jpg"
const Profile = () =>{
    return (
    <>
       <div className="master-div">
         <div className="container">
            <div className="profile">
               <img src={profileimage} alt="" id="profile_img" />
               <div className="imagehover">
                  
               </div>
            </div>
            <div className="arrows">
               <img src={icon1} alt="" className="arrow" />
            </div>
            <div className="twitter-container">
               <h2 id="twitter">Fortune Ishaku</h2>
            </div>
            {/* <div>
               <h2 id="slack">Yusuf</h2>
            </div> */}
         </div>
    </div>
    </>
    )
};
export default Profile;
