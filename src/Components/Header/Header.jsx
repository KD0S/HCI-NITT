import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-main">
      <h1 className="app-title">HCI@NITT</h1>
      <div className="headings">
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link>Research</Link>
        <Link>Projects</Link>
        <Link>Publications</Link>
        <Link>Collaborate</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
    </div>
  );
};
