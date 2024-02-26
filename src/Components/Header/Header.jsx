import "./Header.css";

import { useState } from "react";
import { HeaderDropdown } from "./HeaderDropdown/HeaderDropdown";
import { NavLink } from "react-router-dom";
import HeaderMenuMobile from "./HeaderMenuMobile/HeaderMenuMobile";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
        <HeaderDropdown
          dropdownTitle="Our work"
          dropdownContent={[
            {
              name: "Research",
              route: "/research",
            },
            {
              name: "Projects",
              route: "/projects",
            },
            {
              name: "Publications",
              route: "/publications",
            },
          ]}
        />
        <HeaderDropdown
          dropdownTitle="Resources"
          dropdownContent={[
            {
              name: "Blogs",
              route: "/blogs",
            },
            {
              name: "Internal Resources",
              route: "/internal-resources",
            },
            {
              name: "External Resources",
              route: "/external-resources",
            },
          ]}
        />
        <HeaderDropdown
          dropdownTitle="Let's connect"
          dropdownContent={[
            {
              name: "Collaborate",
              route: "/collaborate",
            },
            {
              name: "Contact Us",
              route: "/contact",
            },
          ]}
        />
      </div>
      <div className="header-menu-btn" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div
          className={!isMenuOpen ? "top-line" : "top-line top-line-menu-open"}
        ></div>
        <div
          className={
            !isMenuOpen ? "middle-line" : "middle-line middle-line-menu-open"
          }
        ></div>
        <div
          className={
            !isMenuOpen ? "bottom-line" : "bottom-line bottom-line-menu-open"
          }
        ></div>
      </div>
      <HeaderMenuMobile isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
