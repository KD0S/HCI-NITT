import { FaLink } from "react-icons/fa";
import './Publication.css'
import publicationService from "../publicationService";

const Publication = ({ id, name, authors, publisher, link, admin, publications, setPublications }) => {

    const handleDelete = () => {
        publicationService.remove(id)
        setPublications(publications.filter(publication => publication.id !== id))
    }

    return (
        <div className="publication">
            <div className="publication-container">
                <ul><li>{authors}: <br /> <strong>{name}</strong>, {publisher}</li></ul>
                {admin ? <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <button className={`icons-alt`} onClick={handleDelete}>X</button>
                </div> : <a href={link}><FaLink></FaLink></a>}
            </div>
        </div >
    )
}

export default Publication