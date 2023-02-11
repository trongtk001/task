import React, { useState } from "react";
import Popup from "../../popup";
import EditFeatures from "./edit/edit";

const Features: React.FC = () => {
  interface feature {
    title: string;
    description: string;
    image: string;
  }

  const [features, setFeatures] = useState<feature[]>([
    {
      title: "User research",
      description:
        "Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.",
      image: "./img/Rectangle2.png",
    },
    {
      title: "Getting stakeholder",
      description: "Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.",
      image: "./img/Rectangle21.png",
    },
    {
      title: "User interaction",
      description: "Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.",
      image: "./img/Rectangle22.png",
    }
  ]);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <Popup isPopup={isEdit} setIsPopup={setIsEdit}>
        <EditFeatures
          features={features}
          setFeatures={setFeatures}
          setIsPopup={setIsEdit}
        />
      </Popup>
      <div className="category">
        <h1 className="title">
          Features
          <button className="edit-btn" onClick={(e) => setIsEdit(true)}>
            <img src="./svg/edit-btn.svg" alt="" />
          </button>
        </h1>
        {features.map((feature, index) => (
            <div key={index} className={'features-content ' + ((index % 2 === 0) ? 'left' : 'right')}>
              <div>
                <span className="left">
                  <h4>{feature.title}</h4>
                </span>
                <p className="left">
                  {feature.description}
                </p>
                <img src={feature.image} alt="" />
                <div className="line"></div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Features;
