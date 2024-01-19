import { IconContext } from "react-icons";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-main">
      <NavLink
        style={{
          textDecoration: "none",
        }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/admin/login"
      >
        <h1 className="app-title">
          HCI<strong style={{ color: "#5c7c89" }}>@</strong>NITT
        </h1>
      </NavLink>
      <div className="headings">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/members"
        >
          Members
        </NavLink>
        <div className="heading-dropdown-main">
          <p className="heading-dropdown-trigger">Our Work</p>
          <IconContext.Provider value={{ className: "heading-dropdown-icon" }}>
            <IoIosArrowDropdown />
          </IconContext.Provider>
          <ul className="heading-dropdown-content">
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
          </ul>
        </div>
        <div className="heading-dropdown-main">
          <p className="heading-dropdown-trigger">Let's Connect</p>
          <IconContext.Provider value={{ className: "heading-dropdown-icon" }}>
            <IoIosArrowDropdown />
          </IconContext.Provider>
          <ul className="heading-dropdown-content">
            <li>
              <Link to="/collaborate">Collaborate</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
