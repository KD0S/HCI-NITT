import { IconContext } from "react-icons";
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
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
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/research">Research</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/publications">Publications</NavLink>
            </li>
          </ul>
        </div>
        <div className="heading-dropdown-main">
          <p className="heading-dropdown-trigger">Resources</p>
          <IconContext.Provider value={{ className: "heading-dropdown-icon" }}>
            <IoIosArrowDropdown />
          </IconContext.Provider>
          <ul className="heading-dropdown-content">
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/internal-resources">Internal Resources</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/external-resources">External Resources</NavLink>
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
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/collaborate">Collaborate</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive) ? "active" : ""} to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
