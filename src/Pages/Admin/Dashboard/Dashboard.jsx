import './Dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate();

    const routeMember = () => {
        let path = '/admin/members';
        navigate(path);
    }

    const routePublications = () => {
        let path = '/admin/publications';
        navigate(path);
    }

    const routeResearch = () => {
        let path = '/admin/research';
        navigate(path);
    }

    return (
        <div className="cards-container">
            <div className="card" onClick={routeMember}>
                Members
            </div>
            <div className="card" onClick={routePublications}>
                Publications
            </div>
            <div className="card" onClick={routeResearch}>
                Research
            </div>
        </div>
    )
}

export default Dashboard