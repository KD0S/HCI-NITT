import './Alert.css'
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const Alert = ({ type, message }) => {
    return (
        <div className={`alert ${type}`} >
            <div className='alert-icon'>{type === 'success' ? <FaCircleCheck></FaCircleCheck> : <MdError></MdError>}</div>
            <p className='alert-content'>{message}</p>
        </div >
    )
}

export default Alert