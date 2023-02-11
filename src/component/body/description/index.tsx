import React, { useState } from "react";

const Description: React.FC = () => {
    const [description, setDescription] = useState([
        "Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.",
        "Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
        "Liam neque vestibulum eget vulputate ut ultrices vel."
    ]);

    const [isEdit, setIsEdit] = useState(false);
    
  return (
    <>
      <div className="category">
        <h1 className="title">
          Description
          <button className="edit-btn">
            <img src="./svg/edit-btn.svg" alt="" />
          </button>
        </h1>
        <ul className="desription">
        {description.map((item, index) => {
            return <li key={index}> <p>{item}</p> </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Description;
