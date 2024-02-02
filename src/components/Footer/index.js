import { FaFacebook,FaLinkedin,FaRegCopyright  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './index.css'

const Footer=()=>(
    <div className='footer-container'>
        <div className="footer-upper-container">
            <img src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1706875838/Blue_Modern_Teamwork_Together_Logo_j1csr6.png" alt="footer-logo" className='footer-logo-image'/>
            <div className='subscription-container'>
                <label htmlFor='footer-subscription' className='subscribe-label'>Subscribe to Us!</label>
                <div className='input-container'>
                    <input type="email" placeholder='Enter your email' className='email-input' id="footer-subscription"/>
                    <button type="button" className='subscribe-btn'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='follow-us-container'>
                <h4 className='subscribe-label'>Follow Us</h4>
                <div>
                    <FaFacebook className="follow-us-icons"/>
                    <BsTwitterX className="follow-us-icons"/>
                    <FaLinkedin className="follow-us-icons"/>
                </div>
            </div>
        </div>
        <hr className="footer-horizontal-line"/>
        <div className="copyrights-container">
            <FaRegCopyright className="follow-us-icons"/> 
            <p className="copyrights-info">2024. Copyrights Reserved by Aravind</p>
        </div>
    </div>
)

export default Footer