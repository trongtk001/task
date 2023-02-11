import React, { useState } from "react";
import EditOverview from "./edit/edit";
import Popup from "../../popup";

const Overview: React.FC = () => {
  const [mainTitle, setMainTitle] = useState<string>("Gembucket");
  const [tags, setTags] = useState<string[]>([
    "solar_breeze",
    "tough_joy_fax",
    "red_hold",
    "lotstring",
    "card_guard",
    "cardify",
  ]);
  const [summary, setSummary] = useState<string>(
    "Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus"
  );
  const [wedsites, setWedsites] = useState<string[]>(["https://gembucket.com"]);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <>
      <Popup isPopup={isEdit} setIsPopup={setIsEdit}>
        <EditOverview
          mainTitle={mainTitle}
          setMainTitle={setMainTitle}
          tags={tags}
          setTags={setTags}
          summary={summary}
          setSummary={setSummary}
          wedsites={wedsites}
          setWedsites={setWedsites}
          setIsPopup={setIsEdit}
        />
      </Popup>
      <div className="category" id="first-category">
        <h1 className="title main">
          {mainTitle}
          <button className="edit-btn" onClick={e => setIsEdit(true)}>
            <img src="./svg/edit-btn.svg" alt="" />
          </button>
        </h1>
        {tags.map((tag, index) => {
          return (
            <i key={index} className="tag">
              #{tag}
            </i>
          );
        })}
        <p>{summary}</p>
        <p>
          Official site: &nbsp;
          {wedsites.map((wedsite, index) => (
            <>
              <a href={wedsite} key={index} target='_blank'>
                {wedsite}
              </a>
              <span>;&nbsp;</span>
            </>
          ))}
        </p>
        <div className="image">
          <img src="./svg/full-screen.svg" alt="" />
          <img src="./img/Rectangle.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Overview;
