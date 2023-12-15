import "./InfoCard.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export const InfoCard = ({ imgPath, title, content }) => {
   return (
      <div className="card-main">
         <img src={imgPath} alt="no support" />
         <div className="card-text">
            <h4>{title}</h4>
            <p>{content}</p>
         </div>
         <div className="icons">
            <FaLinkedin className="icon">linkedin</FaLinkedin>
            <FaGithubSquare className="icon"></FaGithubSquare>
         </div>
      </div>
   )
}
