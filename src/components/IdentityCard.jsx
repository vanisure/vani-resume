import React from "react";

import profilePicture from "../images/profile-pic.jpeg";
import linkedinIcon from "../images/icons/linkedin.svg";
import githubIcon from "../images/icons/github-square.svg";

import "./styles/IdentityCard.css";

const IdentityCard = () => {
  return (
    <div className="identity-card">
      <img className="profile-pic" src={profilePicture} alt="Sure Vani"/>
      <span className="name">Sure Vani</span>
      <section className="course-details">
        <span className="student-year">3rd year B.Tech</span>
        <span className="course-name">Computer Science Engineering</span>
      </section>
      <section className="social-links">
        <div className="social-link">
          <a href="https://github.com/vanisure">
            github.com/vanisure
          </a>
          <img src={githubIcon} alt="LinkedIn" />
        </div>
      </section>
    </div>
  );
};

export default IdentityCard;
