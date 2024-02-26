import "./HeaderMenuMobile.css";
import { Link } from "react-router-dom";

function HeaderMenuMobile({ isMenuOpen, setMenuOpen }) {
  return (
    <div
      className={
        isMenuOpen
          ? "header-menu menu-drop-animation"
          : "header-menu reverse-menu-drop-animation"
      }
    >
      <Link to="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link to="/members" onClick={() => setMenuOpen(false)}>
        Members
      </Link>
      <Link to="/research" onClick={() => setMenuOpen(false)}>
        Research
      </Link>
      <Link to="/publications" onClick={() => setMenuOpen(false)}>
        Publications
      </Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)}>
        Projects
      </Link>
      <Link to="/blogs" onClick={() => setMenuOpen(false)}>
        Blogs
      </Link>
      <Link to="/internal-resources" onClick={() => setMenuOpen(false)}>
        Internal Resources
      </Link>
      <Link to="/external-resources" onClick={() => setMenuOpen(false)}>
        External Resources
      </Link>
      <Link to="/collaborate" onClick={() => setMenuOpen(false)}>
        Collaborate
      </Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>
    </div>
  );
}

export default HeaderMenuMobile;
