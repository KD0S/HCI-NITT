import "./InfoCard.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import personService from "../personService";


export const InfoCard = ({ id, imgPath, title, content, icons }) => {

   const handleDelete = () => {
      personService.remove(id)
   }

   return (
      <div className="card-main">
         <img src={imgPath} alt="no support" />
         <div className="card-text">
            <h4>{title}</h4>
            <p>{content}</p>
         </div>
         {icons ?
            <div className="icons">
               <FaLinkedin className="icon">linkedin</FaLinkedin>
               <FaGithubSquare className="icon"></FaGithubSquare>
            </div> :
            <button className="icons-alt" onClick={handleDelete}>X</button>
         }
      </div >
   )
}
