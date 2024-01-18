import "./NumCard.css";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaHandshake, FaPeopleGroup, FaRegNewspaper } from "react-icons/fa6";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NumCard = ({ contextName, contextCount }) => {
  const [isCounterActive, setCounterActive] = useState(true);

  const iconContextMap = {
    Alumni: <FaHandshake />,
    Publications: <FaRegNewspaper />,
    Members: <FaPeopleGroup />,
  };

  return (
    <div className="numcard-main">
      <div className="numcard-context">
        <IconContext.Provider value={{ className: "numcard-context-icon" }}>
          {iconContextMap[contextName]}
        </IconContext.Provider>
        <p className="numcard-context-name">{contextName}</p>
      </div>
      <div className="numcard-divider"></div>
      <div className="numcard-count">
        <CountUp
          end={contextCount}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      </div>
    </div>
  );
};

export default NumCard;
