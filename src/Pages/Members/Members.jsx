import './Members.css'
import { Header } from '../../Components/Header/Header'
import { investigatorDetails, scholarDetails } from './MemberDetails'
import { InfoCard } from '../../Components/InfoCard/InfoCard.jsx'


const Members = () => {
    return (
        <div>
            <Header></Header>
            <div className='heading'>Research Investigators</div>
            <div className='members'>
                {investigatorDetails.map((member) =>
                    <InfoCard
                        key={member.name}
                        imgPath={member.imgPath}
                        title={member.name}
                        content={member.position}></InfoCard>
                )}
            </div>
            <div className='heading'>Research Scholars</div>
            <div className='members'>
                {scholarDetails.map((member) =>
                    <InfoCard
                        key={member.name}
                        imgPath={member.imgPath}
                        title={member.name}
                        content={member.position}></InfoCard>
                )}
            </div>
        </div>
    )
}

export default Members