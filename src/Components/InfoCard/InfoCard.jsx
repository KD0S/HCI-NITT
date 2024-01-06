import "./InfoCard.css";
import personService from "../personService";
import pfp from "../../Assets/images/default-pfp.png"
import { TbMailFilled } from "react-icons/tb";
import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";

export const InfoCard = ({ id, imgPath, title, content, icons, memberDetails, setMemberDetails }) => {

   const handleDelete = () => {
      personService.remove(id)
      setMemberDetails(memberDetails.filter(member => member.id !== id))
   }


   if (imgPath === '') imgPath = pfp
   return (
      <div className="card-main">
         <img src={imgPath} alt="" loading="lazy" />
         <div className="card-text">
            <h4 style={{ color: '#ffffff' }}>{title}</h4>
            <p>{content}</p>
         </div>
         {icons ?
            <div className="icons">
               {icons.linkedin ? <a href={icons.linkedin}><FaLinkedin className="icon"></FaLinkedin></a> : null}
               {icons.github ? <a href={icons.github}><FaGithub className="icon"></FaGithub></a> : null}
               {icons.mail ? <a href={`mailto:${icons.mail}`}><TbMailFilled className="icon mail-icon"></TbMailFilled></a> : null}
               {icons.gscholar ? <a href={icons.gscholar}><FaGoogle className="icon"></FaGoogle></a> : null}
            </div> :
            <button className={`icons-alt`} onClick={handleDelete}>X</button>
         }
      </div >
   )
}
