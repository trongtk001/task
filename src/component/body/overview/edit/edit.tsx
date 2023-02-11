import React, { useState } from "react";
import "./edit.css";

interface Props {
  mainTitle: string;
  setMainTitle: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  summary: string;
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  wedsites: string[];
  setWedsites: React.Dispatch<React.SetStateAction<string[]>>;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditOverview: React.FC<Props> = ({
  mainTitle,
  setMainTitle,
  tags,
  setTags,
  summary,
  setSummary,
  wedsites,
  setWedsites,
  setIsPopup,
}) => {
  const [tag, setTag] = useState<string>("");
  const [tempMainTitle, setTempMainTitle] = useState(mainTitle);
  const [tempTags, setTempTags] = useState(tags);
  const [tempSummary, setTempSummary] = useState(summary);
  const [tempWedsites, setTempWedsites] = useState(wedsites);

  const handleTagsChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTempTags([...tags, tag]);
      setTag("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTempTags(tags.filter((t) => t !== tag));
  };

  const handleRemoveWedsite = (wedsite: string) => {
    setTempWedsites(wedsites.filter((w) => w !== wedsite));
  };

  const handleAddWedsite = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    wedsites[index] = e.target.value;
    setTempWedsites([...wedsites]);
  };

  const handleSave = () => {
    setMainTitle(tempMainTitle);
    setTags(tempTags);
    setSummary(tempSummary);
    setWedsites(tempWedsites);
    setIsPopup(false);
  }

  return (
    <>
      <div className="edit-container centered">
        <a className="close" href="#" onClick={(e) => setIsPopup(false)}>
          &times;
        </a>
        <p>Project</p>

        <p>
          Name<span>&#42;</span>
        </p>
        <input
          type="text"
          id="fname"
          name="fname"
          value={tempMainTitle}
          onChange={(e) => setTempMainTitle(e.target.value)}
        />
        <br />

        <p>Keyword</p>
        <input
          type="text"
          id="fname"
          name="fname"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={handleTagsChange}
        />
        <br />
        <div className="tag">
          {tempTags.map((tag, index) => (
            <span key={index} className="tag-g">
              #{tag}{" "}
              <a className="x" href="#" onClick={(e) => handleRemoveTag(tag)}>
                &times;
              </a>
            </span>
          ))}
        </div>

        <p>
          Summary<span>&#42;</span>
        </p>
        <textarea
          id="w3review"
          name="w3review"
          value={tempSummary}
          onChange={(e) => setTempSummary(e.target.value)}
        />
        <br />

        <p>Website</p>

        {tempWedsites.map((wedsite, index) => (
          <div key={index} className='wedsites'>
            <input
              type="text"
              id="fname"
              name="fname"
              value={wedsite}
              onChange={(e) => handleAddWedsite(e, index)}
            />

            <select name="cars" id="cars">
              <option value="volvo">Official Sites</option>
            </select>
            <span className="btn" onClick={(e) => handleRemoveWedsite(wedsite)}>Remove</span>
            <br />
          </div>
        ))}

        <span className="btn" onClick={(e) => setTempWedsites([...tempWedsites, ""])}>
          Add another website
        </span>
        <br />
        <div className="db-btn">
          <a onClick={e => setIsPopup(false)}>Cancel</a>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </>
  );
};

export default EditOverview;
