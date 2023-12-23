import { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import React from './Contact.css'
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        const link = `mailto:hci.nit620015@gmail.com?
                &subject=HCIcontactForm-${name}@${mail}
                &body=${message}`
        window.location.href = link
    }

    return (
        <div>
            <Header></Header>
            <div className='contact-container'>
                <div className='contact-wrapper'>
                    <div className='form-wrapper'>
                        <div className='form-container'>
                            <div className='form-text'>
                                Contact Us
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
                                            onChange={(e) => setMail(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Email</label>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="input-data textarea">
                                        <textarea rows="8" cols="80" required
                                            onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <br />
                                        <div className="underline"></div>
                                        <label>Write your message</label>
                                    </div>
                                </div>

                                <div className='submit-row'>
                                    <button className='login-btn' type='submit'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='contact-details'>
                        <div className='contact-detail-item'>
                            <div className='contact-detail-icon'>
                                <FaLocationDot></FaLocationDot>
                            </div>
                            <div className='contact-detail-text'>
                                EEG Lab, NIT Hospital, NIT Tiruchirappalli
                            </div>
                        </div>
                        <div className='contact-detail-item'>
                            <div className='contact-detail-icon'>
                                <IoIosMail></IoIosMail>
                            </div>
                            <div className='contact-detail-text'>
                                shameedha@nitt.edu
                                <br />
                                hci.nitt620015@gmail.com
                            </div>
                        </div>
                        <div className='contact-detail-item'>
                            <div className='contact-detail-icon'>
                                <FaPhone></FaPhone>
                            </div>
                            <div className='contact-detail-text'>
                                Staff room : 0431-2503215
                                <br />
                                Office : 0431-2503200
                            </div>
                        </div>
                    </div>
                </div>
                <div className='map-wrapper'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.538276166566!2d78.8188614!3d10.7626211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d46e4b3652b%3A0x6c57ee566378d2d7!2sNITT%20Hospital!5e0!3m2!1sen!2sin!4v1703340423096!5m2!1sen!2sin"
                        height="400" width="800" allowFullScreen=""
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact