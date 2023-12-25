import { useEffect, useState } from "react";
import "./NumCard.css";
import { IconContext } from "react-icons";
import { FaHandshake, FaPeopleGroup, FaRegNewspaper } from "react-icons/fa6";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const NumCard = ({ contextName, contextCount, isVisible }) => {
  const [isCounterActive, setCounterActive] = useState(true);

  // const [counterValue, setCounterValue] = useState(0);

  // useEffect(() => {
  //   function updateCounterValue(currentValue) {
  //     if (currentValue < contextCount) return currentValue + 1;
  //     else clearInterval(currentInterval);

  //     return currentValue;
  //   }

  //   const currentInterval = setInterval(
  //     () => setCounterValue(updateCounterValue(counterValue)),
  //     100
  //   );

  //   return () => {
  //     clearInterval(currentInterval);
  //   };
  // }, [counterValue, contextCount, isVisible]);

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
        <CountUp end={contextCount} onEnd={() => setCounterActive(false)} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor
              active={isCounterActive}
              onChange={start}
              delayedCall
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default NumCard;
