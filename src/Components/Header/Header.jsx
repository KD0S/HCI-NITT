import "./Header.css";

import { HeaderDropdown } from "./HeaderDropdown/HeaderDropdown";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};
