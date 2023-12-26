import './Publications.css'
import { useEffect, useState } from 'react';
import Alert from '../../../Components/Alert/Alert';
import publicationService from "../../../Components/publicationService";
import Publication from '../../../Components/Publication/Publication';
import { AdminHeader } from '../../../Components/AdminHeader/AdminHeader';


const PublicationsAdmin = () => {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')
    const [publisher, setPublisher] = useState('')
    const [memberIds, setMemberIds] = useState('')
    const [authors, setAuthors] = useState('')
    const [notif, setNotif] = useState('success')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [publications, setPublications] = useState(null)

    useEffect(() => {
        publicationService.getAll().then(data => {
            setPublications(data.data)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPublication = {
            name: name,
            link: link,
            year: year,
            type: type,
            publisher: publisher,
            authors: authors,
            member_ids: memberIds
        }

        publicationService.create(newPublication).then((data) => {
            setPublications(publications.concat(data.data))
        })

        setError(true)
        setNotif('success')
        setMessage('Added Successfully')
        setTimeout(() => {
            setError(false)
        }, 3000)
        return

    }


    return (
        <div className='admin-publication-body'>
            <AdminHeader></AdminHeader>
            <div className='admin-publication-container'>
                <div>{error ? <Alert type={notif} message={message}></Alert> : null}</div>
                <div className='form-wrapper'>
                    <div className='form-container' style={{ width: '800px' }}>
                        <div className='form-text'>
                            Add Publication
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required placeholder=''
                                        onChange={(e) => setName(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Name</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data" style={{ flex: '20%' }}>
                                    <input type="text" placeholder=''
                                        onChange={(e) => setYear(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Year</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setType(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Type</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setPublisher(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Journal/Conference</label>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setLink(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Link</label>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setAuthors(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Authors</label>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setMemberIds(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Member IDs</label>
                                </div>
                            </div>
                            <div className='submit-row'>
                                <button className='login-btn' type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='publications-wrapper'>
                    {publications ? publications.map(publication =>
                        <div className='publications-wrapper-item'>
                            <Publication
                                name={publication.name} authors={publication.authors} publisher={publication.publisher}
                                link={publication.link} key={publication.link}
                                admin={true} id={publication.id} publications={publications}
                                setPublications={setPublications}></Publication>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default PublicationsAdmin