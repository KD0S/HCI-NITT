import { AdminHeader } from '../../../Components/AdminHeader/AdminHeader'
import './Dashboard.css'

const Dashboard = () => {


    return (
        <div className='dashboard-body'>
            <AdminHeader></AdminHeader>
            <div className='dashboard-container'>
                <div style={{ display: 'flex' }}>
                    <h1 className="dashboard-content-title">Welcome, <strong style={{
                        fontSize: '5rem',
                        color: 'rgb(103, 131, 232)'
                    }}>Admin</strong></h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard