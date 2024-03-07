import "./ContactDetails.css";

import { FaMapLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const ContactDetails = () => {
  return (
    <div className="contact-opening">
      <h1 className="contact-opening-title">GET IN TOUCH WITH US</h1>
      <div className="contact-details-container">
        <div className="contact-detail-item">
          <IconContext.Provider value={{ className: "contact-detail-icon" }}>
            <IoCall />
          </IconContext.Provider>
          <p className="contact-detail-text">
            Staff room: 0431-2503215
            <br />
            Office: 0431-2503200
          </p>
        </div>
        <div className="contact-detail-item">
          <IconContext.Provider value={{ className: "contact-detail-icon" }}>
            <FaMapLocationDot />
          </IconContext.Provider>
          <p className="contact-detail-text">
            EEG Lab, NIT Hospital, NITT, Tanjore Main Road, <br />
            NH67, near BHEL, Tiruchirappalli, Tamil Nadu, India
          </p>
        </div>
        <div className="contact-detail-item">
          <IconContext.Provider value={{ className: "contact-detail-icon" }}>
            <SiGmail />
          </IconContext.Provider>
          <p className="contact-detail-text">
            hci.nitt620015@gmail.com
            <br /> shameedha@nitt.edu
          </p>
        </div>
      </div>
      <p className="contact-opening-body">
        Please have a look at our previous and ongoing projects to know more
        about research. We constantly strive for creating value of our research
        by establishing a link between academia and industry and hence, industry
        connects are highly welcomed. Please use below form to send your query
        and we will be happy to answer you in due time.
      </p>
    </div>
  );
};

export default ContactDetails;
