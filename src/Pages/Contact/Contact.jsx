import "./Contact.css";
import ContactDetails from "../../Components/Contact/ContactDetails/ContactDetails";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import Map from "../../Components/Contact/Map/Map";

const Contact = () => {
  return (
    <div>
      <div className="contact-main-body">
        <ContactDetails />
        <div className="form-map-container">
          <ContactForm />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
