import "./HeaderDropdown.css";

import { IconContext } from "react-icons";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const HeaderDropdown = ({ dropdownTitle, dropdownContent }) => {
  return (
    <div className="heading-dropdown-main">
      <p className="heading-dropdown-trigger">{dropdownTitle}</p>
      <IconContext.Provider value={{ className: "heading-dropdown-icon" }}>
        <IoIosArrowDropdown />
      </IconContext.Provider>
      <ul className="heading-dropdown-content">
        {dropdownContent.map((content, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={content.route}
            >
              {content.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
