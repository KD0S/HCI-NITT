import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const link = `mailto:hci.nit620015@gmail.com?
                &subject=HCIcontactForm-${name}@${mail}
                &body=${message}`;
    window.location.href = link;
  };

  return (
    <div className="form-wrapper contact-form-wrapper">
      <div className="form-container">
        <div className="form-text">Contact Us</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                placeholder=""
                onChange={(e) => setName(e.target.value)}
              />
              <div className="underline"></div>
              <label>Name</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                required
                placeholder=""
                onChange={(e) => setMail(e.target.value)}
              />
              <div className="underline"></div>
              <label>Email</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="8"
                cols="80"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <div className="underline"></div>
              <label>Write your message</label>
            </div>
          </div>

          <div className="submit-row">
            <button className="login-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
