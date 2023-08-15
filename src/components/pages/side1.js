import React from "react";
import { Link } from "react-router-dom";
import "./side1.css";
import img2 from "../asserts/phone.svg";
import img3 from "../asserts/email.svg";
import img4 from "../asserts/location.svg";

const Side1 = () => {
  return (
    <div className="s1">
      <div className="s2">
        <div className="s3">Pujari Balaji</div>
        <div className="s4">FullStack Developer</div>
      </div>
      <div className="s5">
        <Link
          to="https://www.facebook.com/lovely.akash.3958/"
          className="s6"
        ></Link>
        <Link
          to="https://www.linkedin.com/in/pujari-balaji-52b005251/"
          className="s7"
        ></Link>
        <Link to="" className="s8"></Link>
        <Link to="https://github.com/pujaribalaji" className="s9"></Link>
      </div>
      <div className="s10">
        <div className="s11">
          <div className="s12">
            <img className="im1" src={img2} alt="Img2"></img>
            <hr></hr>
            <img className="im1" src={img3} alt="Img2"></img>
            <hr></hr>
            <img className="im1" src={img4} alt="Img2"></img>
            <hr></hr>
            <div className="s13">
              <div className="s14">Phone</div>
              <div className="s15">+91 9381268931</div>
            </div>
            <div className="s13">
              <div className="s16">Email</div>
              <div className="s17">pujaribalaji152@gmail.com</div>
            </div>
            <div className="s13">
                <div className="s18">
                    Location
                </div>
                <div className="s19">
                    Anantapur,AndhraPradesh
                </div>
            </div>
          </div>
        </div>
        <div className="s20">
            Download Resume
        </div>
      </div>
    </div>
  );
};

export default Side1;
