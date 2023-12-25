import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-main">
      <h1 className="app-title">HCI@NITT</h1>
      <div className="headings">
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/research">Research</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/collaborate">Collaborate</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};
