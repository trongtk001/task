import React, { useState } from "react";

import "./edit.css";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Props {
  features: Feature[];
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditFeatures: React.FC<Props> = ({ features, setFeatures, setIsPopup }) => {


  // JSON.parse(JSON.stringify(features)

  const [tempFeatures, setTempFeatures] = useState<Feature[]>(features.map((feature) => ({ ...feature })));

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    tempFeatures[index].title = e.target.value;
    setTempFeatures([...tempFeatures]);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    tempFeatures[index].description = e.target.value;
    setTempFeatures([...tempFeatures]);
  };

  const handleSave = () => {
    setFeatures([...tempFeatures]);
    setIsPopup(false);
  };

  return (
    <div className="features-edit centered">
      <a className="close" href="#" onClick={(e) => setIsPopup(false)}>
        &times;
      </a>
      <p>Features</p>

      <div className="feature-list">
        {tempFeatures.map((feature, index) => (
          <div key={index}>
            <img src={feature.image} alt="" />
            <div className="content-w">
              <p>
                Title<span>&#42;</span>
              </p>
              <input
                type="text"
                id="fname"
                name="fname"
                value={feature.title}
                onChange={(e) => handleTitleChange(e, index)}
              />
              <br />
              <p>
                Description<span>&#42;</span>
              </p>
              <textarea
                id="w3review"
                name="w3review"
                value={feature.description}
                onChange={(e) => handleDescriptionChange(e, index)}
              />
            </div>
          </div>
        ))}
      </div>

      <span>Add another website</span>
      <br />
      <div className="db-btn">
        <a onClick={(e) => setIsPopup(false)}>Cancel</a>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditFeatures;
