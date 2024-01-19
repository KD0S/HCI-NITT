import './Admins.css'
import { useEffect, useState } from 'react';
import adminService from '../../../Components/adminService';
import { InfoCard } from '../../../Components/InfoCard/InfoCard';
import Alert from '../../../Components/Alert/Alert';
import { AdminHeader } from '../../../Components/AdminHeader/AdminHeader';



const Admins = () => {
    const [rollNo, setRollNo] = useState('')
    const [error, setError] = useState(false)
    const [notif, setNotif] = useState('success')
    const [message, setMessage] = useState('')
    const [memberDetails, setMemberDetails] = useState(null)

    useEffect(() => {
        adminService.getAll().then(data => {
            setMemberDetails(data.data)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        const newAdmin = {
            rollNo: rollNo
        }

        adminService.create(newAdmin).then(
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
                            Add Admin
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="input-data">
                                    <input type="text" required placeholder=''
                                        onChange={(e) => setRollNo(e.target.value)} />
                                    <div className="underline"></div>
                                    <label>Admin ID</label>
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
                            imgPath={''}
                            content={member.rollNo}
                        >
                        </InfoCard>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Admins