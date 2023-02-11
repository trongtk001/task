import React from "react";
import Contact from "./contact";
import Description from "./description";
import Features from "./features";
import Overview from "./overview";
import TeamMember from "./team-member";

const Body: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <Overview />
        <Description/>
        <Features />
        <TeamMember/>
        <Contact/>
      </div>
    </div>
  );
};

export default Body;
