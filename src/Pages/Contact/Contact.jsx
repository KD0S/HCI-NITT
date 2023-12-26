import "./Contact.css";
import { Header } from "../../Components/Header/Header";
import ContactDetails from "../../Components/Contact/ContactDetails/ContactDetails";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import Map from "../../Components/Contact/Map/Map";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-main">
      <Header></Header>
      <ContactDetails />
      <div className="form-map-container">
        <ContactForm />
        <Map />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
