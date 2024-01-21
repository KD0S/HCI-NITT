import "./AdminHeader.css";
import { NavLink } from "react-router-dom";

export const AdminHeader = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-headings">
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/dashboard">Dashboard</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/admins">Admins</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/members">Members</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/latestNews">Latest News</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/publications">Publications</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/admin/projects">Projects</NavLink>
      </div>
    </div>
  );
};
