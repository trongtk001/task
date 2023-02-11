import React, { useEffect, useState } from "react";
import "./index.css";

interface Props {
  isPopup: boolean;
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Popup: React.FC<Props> = ({ isPopup, setIsPopup, children }) => {

  const [previousScrollPosition, setPreviousScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (isPopup) {
      setPreviousScrollPosition(window.pageYOffset);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => {
        window.scrollTo(0, previousScrollPosition);
      }, 0);
    }
  }, [isPopup, previousScrollPosition]);

  return <div>{isPopup && <div className="popup-wraper">{children}</div>}</div>;
};

export default Popup;
