import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const FooterQuickLinks = () => {
  return (
    /* this className is used in Footer.css for styling */
    <div className="footer-item footer-quicklinks">
      <h2 className="footer-item-title">Quick Links</h2>
      <div className="footer-quicklinks-detail">        
        <IconContext.Provider value={{ className: "footer-quicklinks-icon" }}>
          <IoIosArrowDroprightCircle />
        </IconContext.Provider>
        <Link to="/">About</Link>
      </div>
      <div className="footer-quicklinks-detail">
        <IconContext.Provider value={{ className: "footer-quicklinks-icon" }}>
          <IoIosArrowDroprightCircle />
        </IconContext.Provider>
        <Link to="/publications">Publications</Link>
      </div>
      <div className="footer-quicklinks-detail">
        <IconContext.Provider value={{ className: "footer-quicklinks-icon" }}>
          <IoIosArrowDroprightCircle />
        </IconContext.Provider>
        <Link to="/team">Team</Link>
      </div>
      <div className="footer-quicklinks-detail">
        <IconContext.Provider value={{ className: "footer-quicklinks-icon" }}>
          <IoIosArrowDroprightCircle />
        </IconContext.Provider>
        <Link to="/resources">Resources</Link>
      </div>
      <div className="footer-quicklinks-detail">
        <IconContext.Provider value={{ className: "footer-quicklinks-icon" }}>
          <IoIosArrowDroprightCircle />
        </IconContext.Provider>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default FooterQuickLinks;
