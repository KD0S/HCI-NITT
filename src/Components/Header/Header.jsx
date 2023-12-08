import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();

  const routeHome = () => {
    let path = '/';
    navigate(path);
  }
  const routeMember = () => {
    let path = '/members';
    navigate(path);
  }


  return (
    <div className='main-header'>
      <div>
        <h1>HCI@NITT</h1>
      </div>
      <div className='headings'>
        <div onClick={routeHome}>Home</div>
        <div onClick={routeMember}>Members</div>
        <div>Research</div>
        <div>Projects</div>
        <div>Publications</div>
        <div>Collaborate</div>
        <div>Contact Us</div>
      </div>
    </div>
  )
}
