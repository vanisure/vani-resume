import React from "react";
import List from "./List";

import "./styles/ContentSection.css";

const ContentSection = () => {
  return (
    <div className="content-section">
      <section>
        <h2 className="section-heading">Summary</h2>
        <p>
          A motivated student pursuing B.Tech in Computer Science Engineering
          at Presidency University.
        </p>
      <section>  
        <h2 className="section-heading">Education</h2>
        <div className="social-link">
          <a href="http://presidencyuniversity.in">Presidency University</a>
          </div>
      </section> 
      </section>
      <section>
        <h2 className="section-heading">Skills</h2>
        <div className="skill-lists">
          <List
            heading="Programming languages"
            elements={["Python", "Java"]}
          />
          <List
            heading="Markup/Styling languages"
            elements={["HTML"]}
          />
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
