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
            <div className='publications-wrapper'>
                <div className='heading-wrapper'>
                    <h1>Peer-Reviewed Journals</h1>
                    {journals ? journals.map(journal => <Publication
                        name={journal.name} authors={journal.authors}
                        publisher={journal.publisher} link={journal.link} key={journal.link}></Publication>) : null}
                </div>
                <div className='heading-wrapper'>
                    <h1>Peer-Reviewed Conferences</h1>
                    {conferences ? conferences.map(conference => <Publication
                        name={conference.name} authors={conference.authors}
                        publisher={conference.publisher} link={conference.link} key={conference.link}></Publication>) : null}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
