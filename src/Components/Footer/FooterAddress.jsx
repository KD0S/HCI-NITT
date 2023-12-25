import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const FooterAddress = () => {
  return (
    /* this className is used in Footer.css for styling */
    <div className="footer-item">
      <h2 className="footer-item-title">Address</h2>
      <div className="footer-address-detail">
        <IconContext.Provider value={{ className: "footer-address-icon" }}>
          <FaMapLocationDot />
        </IconContext.Provider>
        <Link to="https://maps.app.goo.gl/P1dgSqN3H2Kh3A1N7">
          EEG Lab, NIT Hospital, NITT, Tanjore Main Road, <br />
          NH67, near BHEL, Tiruchirappalli, Tamil Nadu, India
        </Link>
      </div>
      <div className="footer-address-detail">
        <IconContext.Provider value={{ className: "footer-address-icon" }}>
          <IoCall />
        </IconContext.Provider>
        <span className="footer-address-span">0431-2503242, 0431-2503215</span>
      </div>
      <div className="footer-address-detail">
        <IconContext.Provider value={{ className: "footer-address-icon" }}>
          <SiGmail />
        </IconContext.Provider>
        <span className="footer-address-span">
          hci.nitt620015@gmail.com, shameedha@nitt.edu
        </span>
      </div>
    </div>
  );
};

export default FooterAddress;
