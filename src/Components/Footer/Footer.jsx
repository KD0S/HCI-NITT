import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import FooterAddress from "./FooterAddress";
import logo from '../../Assets/images/HCI-logo-resizedpng.png'
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <Fade triggerOnce>
      <div className="footer-main">
        <div className="footer-items">
          <FooterAddress />
          <FooterQuickLinks />
          <div className="footer-item">
            <img src={logo} className="logo" alt="logo" width={200} />
          </div>
        </div>
        <div className="footer-tag">© HCI@NITT, All Rights Reserved.</div>
      </div>
    </Fade>
  );
};

export default Footer;
