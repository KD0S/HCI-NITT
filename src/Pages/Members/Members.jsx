import './Members.css'
import { Header } from '../../Components/Header/Header'
import { InfoCard } from '../../Components/InfoCard/InfoCard.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import personService from '../../Components/personService.js'
import { Fade, Flip, Zoom } from 'react-awesome-reveal'

const Members = () => {
    const [memberDetails, setMemberDetails] = useState(null)
    const [investigatorDetails, setInvestigatorDetails] = useState(null)
    const [scholarDetails, setScholarDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        personService.getAll().then(data => {
            setMemberDetails(data.data)
            setIsLoading(false)
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
            <div className='members-container'>
                {isLoading ? <div className='loader-container'><div class="loader"></div></div> :
                    <div>
                        <h1 className='main-title'>Meet our Team</h1>
                        <h1 className='sub-heading'>Research Investigators</h1>
                        {investigatorDetails ? <div className='members'>
                            {investigatorDetails.map((member) =>
                                <Zoom delay={800} triggerOnce={true}>
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
                                </Zoom>
                            )}
                        </div> : null}
                        <h1 className='sub-heading'>Research Scholars</h1>
                        {scholarDetails ? <div className='members'>
                            {scholarDetails.map((member) =>
                                <Zoom fraction={0.5} triggerOnce={true}>
                                    <InfoCard className='member'
                                        key={member.name}
                                        imgPath={member.imgPath}
                                        title={member.name}
                                        content={member.designation}
                                        icons={{
                                            linkedin: member.linkedin, mail: member.mail, gscholar: member.gscholar,
                                            github: member.github, number: member.github
                                        }}></InfoCard>

                                </Zoom>
                            )}
                        </div> : null}
                    </div>
                }
            </div>
            <Footer></Footer>
        </div >
    )
}

export default Members