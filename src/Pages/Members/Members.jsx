import './Members.css'
import { Header } from '../../Components/Header/Header'
import { InfoCard } from '../../Components/InfoCard/InfoCard.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import personService from '../../Components/personService.js'

const Members = () => {
    const [memberDetails, setMemberDetails] = useState(null)
    const [investigatorDetails, setInvestigatorDetails] = useState(null)
    const [scholarDetails, setScholarDetails] = useState(null)

    useEffect(() => {
        personService.getAll().then(data => {
            setMemberDetails(data.data)
        })
    }, [])

    useEffect(() => {
        if (memberDetails) {
            setInvestigatorDetails(memberDetails.filter(member => member.role === 'investigator'))
            setScholarDetails(memberDetails.filter(member => member.role === 'scholar'))
        }
    }, [memberDetails])

    return (
        <div>
            <Header></Header>
            <h1 className='members-heading'>Research Investigators</h1>
            {investigatorDetails ? <div className='members'>
                {investigatorDetails.map((member) =>
                    <InfoCard
                        key={member.name}
                        imgPath={member.imgPath}
                        title={member.name}
                        content={member.designation}
                        icons={{
                            linkedin: member.linkedin, mail: member.mail, gscholar: member.gscholar,
                            github: member.github, number: member.github
                        }}>
                    </InfoCard>
                )}
            </div> : null}
            <h1 className='members-heading'>Research Scholars</h1>
            {scholarDetails ? <div className='members'>
                {scholarDetails.map((member) =>
                    <InfoCard className='member'
                        key={member.name}
                        imgPath={member.imgPath}
                        title={member.name}
                        content={member.designation}
                        icons={{
                            linkedin: member.linkedin, mail: member.mail, gscholar: member.gscholar,
                            github: member.github, number: member.github
                        }}></InfoCard>
                )}
            </div> : null}
            <Footer></Footer>
        </div>
    )
}

export default Members