import { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Publications.css'
import publicationService from '../../Components/publicationService'
import Publication from '../../Components/Publication/Publication'


export const Publications = () => {
    const [publications, setPublications] = useState(null)
    const [journals, setJournals] = useState(null)
    const [conferences, setConferences] = useState(null)

    useEffect(() => {
        publicationService.getAll().then((data) => {
            setPublications(data.data)
        })
    }, [])

    useEffect(() => {
        if (publications) {
            setJournals(publications.filter((publication) =>
                publication.type === 'journal'))
            setConferences(publications.filter((publication) =>
                publication.type === 'conference'))
        }
    }, [publications])


    return (
        <div>
            <Header></Header>
            <h1 className='members-title' style={{ padding: '0.4em' }}>Our Publications</h1>
            <div className='publications-wrapper'>
                <div className='heading-wrapper'>
                    <h1 className='publications-heading'>Peer-Reviewed Journals</h1>
                    <div style={{ padding: '1em' }}>
                        {journals ? journals.map(journal => <Publication
                            name={journal.name} authors={journal.authors}
                            publisher={journal.publisher} link={journal.link} key={journal.link}></Publication>) : null}</div>
                </div>
                <div className='heading-wrapper'>
                    <h1 className='publications-heading'>Peer-Reviewed Conferences</h1>
                    <div style={{ padding: '1em' }}>
                        {conferences ? conferences.map(conference => <Publication
                            name={conference.name} authors={conference.authors}
                            publisher={conference.publisher} link={conference.link} key={conference.link}></Publication>) : null}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    )
}
