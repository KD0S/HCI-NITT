import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-main">
      <NavLink style={
        {
          textDecoration: 'none'
        }
      } className={({ isActive }) =>
        isActive ? "active" : ""
      } to="/admin/login">
        <h1 className="app-title">HCI@NITT</h1>
      </NavLink>
      <div className="headings">
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/">Home</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/members">Members</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/research">Research</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/projects">Projects</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/publications">Publications</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/collaborate">Collaborate</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "active" : ""
        } to="/contact">Contact Us</NavLink>
      </div>
    </div>
  );
};
