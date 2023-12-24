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
  const routeContact = () => {
    let path = '/Contact';
    navigate(path);
  }
  const routePublications = () => {
    let path = '/Publications';
    navigate(path);
  }
  const routeResearch = () => {
    let path = '/research';
    navigate(path);
  }
  const routeCollaborate = () => {
    let path = '/collaborate';
    navigate(path);
  }
  const routeProject = () => {
    let path = '/project';
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
        <div onClick={routeResearch}>Research</div>
        <div onClick={routeProject}>Projects</div>
        <div onClick={routePublications}>Publications</div>
        <div onClick={routeCollaborate}>Collaborate</div>
        <div onClick={routeContact}>Contact Us</div>
      </div>
    </div>
  )
}
