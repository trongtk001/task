import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <div className="category ">
        <h1 className="title">Want to know more, contact me!</h1>
        <div className="contact">
          <div className="contact-info">
            <div className="info">
              <img src="./svg/info1.svg" alt="" />
              <span>pattietrusdale@gmail.com</span>
            </div>
            <div className="info">
              <img src="./svg/info2.svg" alt="" />
              <span>+8421 223 2234</span>
            </div>
            <div className="info">
              <img src="./svg/info3.svg" alt="" />
              <span>34 Milwaukee Avenue</span>
            </div>
          </div>
          <div className="social">
            <div className="link">
              <img src="./svg/link1" alt="" />
              <span>github.com/pattietrusdale</span>
            </div>
            <div className="link">
            <img src="./svg/link2" alt="" />

              <span>linkedin.com/in/pattie-trusdale-34...</span>
            </div>
            <div className="link">
            <img src="./svg/link3" alt="" />
              <span>facebook.com/pattie.trusdale</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
