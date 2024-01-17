import './Members.css'
import { useEffect, useState } from 'react';
import personService from '../../../Components/personService';
import { InfoCard } from '../../../Components/InfoCard/InfoCard';
import Alert from '../../../Components/Alert/Alert';
import { AdminHeader } from '../../../Components/AdminHeader/AdminHeader';



const MembersAdmin = () => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [designation, setDesignation] = useState('')
    const [number, setNumber] = useState('')
    const [mail, setMail] = useState('')
    const [address, setAddress] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [linkedIn, setLinkedIn] = useState('')
    const [github, setGithub] = useState('')
    const [gScholar, setGScholar] = useState('')
    const [error, setError] = useState(false)
    const [notif, setNotif] = useState('success')
    const [message, setMessage] = useState('')
    const [memberDetails, setMemberDetails] = useState(null)

    useEffect(() => {
        personService.getAll().then(data => {
            setMemberDetails(data.data)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            name: name,
            role: role,
            designation: designation,
            address: address,
            mail: mail,
            number: number,
            imgPath: 'https://lh3.googleusercontent.com/d/' + imgPath,
            linkedin: linkedIn,
            gscholar: gScholar,
            github: github,
        }

        personService.create(newPerson).then(
            (data) => setMemberDetails(memberDetails.concat(data.data))
        )

        setError(true)
        setNotif('success')
        setMessage('Added Successfully')
        setTimeout(() => {
            setError(false)
        }, 3000)
        return

    }


    return (
        <div className='admin-member-body'>
            <AdminHeader></AdminHeader>
            <div className='admin-member-container'>
                <div>{error ? <Alert type={notif} message={message}></Alert> : null}</div>
                <div className='form-wrapper'>
                    <div className='form-container'>
                        <div className='form-text'>
                            Add Member
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required placeholder=''
                                        onChange={(e) => setName(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Name</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required placeholder=''
                                        onChange={(e) => setRole(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Role</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" required placeholder=''
                                        onChange={(e) => setDesignation(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Designation</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setMail(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Mail</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setNumber(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Number</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setAddress(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Address</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setGithub(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>GitHub</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setLinkedIn(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>LinkedIn</label>
                                </div>
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setGScholar(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Google Scholar</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" placeholder=''
                                        onChange={(e) => setImgPath(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Image ID</label>
                                </div>
                            </div>
                            <div className='submit-row'>
                                <button className='login-btn' type='submit'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='members'>
                    {memberDetails ? memberDetails.map((member) =>
                        <InfoCard className='member'
                            id={member.id}
                            key={member.id}
                            imgPath={member.imgPath}
                            title={member.name}
                            content={member.designation}
                            memberDetails={memberDetails}
                            setMemberDetails={setMemberDetails}>
                        </InfoCard>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default MembersAdmin