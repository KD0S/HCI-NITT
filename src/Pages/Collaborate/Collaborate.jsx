import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import "./Collaborate.css";

const Collaborate = () => {
  return (
    <div>
      <Header></Header>
      <div className="collab-opening">
        <h1 className="collab-opening-title">INTERESTED? <strong style={{ fontWeight: 900, color: '#5c7c89' }}>JOIN US</strong></h1>
        <p className="collab-opening-body">
          The HCI@NITT lab is always looking for researchers at UG, PG, RA, and
          Ph.D. levels. Please see below to check the list of currently open
          positions and follow us on social media to know about the latest
          openings. If you do not see any suitable openings and have an exciting
          idea related to our research interests, please send an SOP (2-3 pages)
          and latest CV with subject as
          <strong>
            {" "}
            “Application for Intern/RA/Ph.D. in [mention your research
            interest]”{" "}
          </strong>
          at
          <a href="mailto:shameedha@nitt.edu">
            <strong> shameedha@nitt.edu </strong>
          </a>
          or
          <a href="mailto:hci.nitt620015@gmail.com">
            <strong> hci.nitt620015@gmail.com </strong>
          </a>
          <br />
          <br />
          We encourage self-funded applications throughout the year. However,
          successful candidates may be eligible for a Ph.D./RA/Intern research
          stipends as advertised from time to time.
        </p>
      </div>
      <div className="collab-content">
        <div className="collab-content-list-container">
          <h2 className="collab-content-list-title">
            What are we looking for?
          </h2>
          <ul className="collab-content-list">
            <li>You have the ability to think and to work independently.</li>
            <li>
              You have excellent communication skills, team spirit, and
              creativity.
            </li>
            <li>
              {" "}
              You are inspired by our projects and have identified future
              directions.
            </li>
            <li>
              You are passionate about empowering technology to improve people’s
              quality of life.
            </li>
            <li>
              You should have completed at least 3 years of university education
              for UG applicants, UG degree for PG applicants, and PG degree for
              Ph.D. applicants. However, it can be waived for candidates with
              exceptional profiles.
            </li>
            <li>
              You have a strong background (or strong interest) and dedicated
              learning ability in artificial intelligence, machine learning,
              affective computing, social robotics, neuroscience, design, and
              social sciences.
            </li>
          </ul>
        </div>
        <div className="collab-content-list-container">
          <h2 className="collab-content-list-title">
            What can you expect at HCI?
          </h2>
          <ul className="collab-content-list">
            <li>
              You will receive a unique opportunity to learn and grow under the
              competent supervision of{" "}
              <a href="https://www.nitt.edu/home/academics/departments/cse/faculty/sameedha/">
                <strong>Dr. B Shameedha Begum</strong>
              </a>{" "}
              and her collaborators.
            </li>
            <li>
              You will be able to work with and learn from people with physical
              and/or mental health challenges.
            </li>
            <li>
              You will have a friendly atmosphere with skilled and congenial
              colleagues.
            </li>
            <li>
              You will have access to some of the state of the art research
              equipment and resources.
            </li>
            <li>
              You will be able to publish in journals and conferences of
              international reputation
            </li>
          </ul>
        </div>
        <p>
          We especially encourage women to apply. We give preference to
          applicants with disabilities if found equally competent.{" "}
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Collaborate;
