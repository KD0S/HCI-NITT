import "./Footer.css";


import FooterAddress from "./FooterAddress";
import FooterQuickLinks from "./FooterQuickLinks";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-items">
        <FooterAddress />
        <FooterQuickLinks />
        <div className="footer-item">
          <h2 className="footer-item-title">Logo</h2>
        </div>
      </div>
      <div className="footer-tag">
        © HCI@NITT, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
