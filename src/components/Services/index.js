import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Services=()=>(
    <>
    <Header/>
    <div className='services-container'>
        <h1 className='services-head'>Our Services</h1>
        <details>
            <summary>Discussion Forums</summary>
            <p>Implement discussion boards where users can create topics, post comments, and engage in conversations.</p>
        </details>
        <details>
            <summary>Notifications and Alerts</summary>
            <p>Keep users informed about new posts, replies, events, or group activities through notifications.</p>
        </details>
        <details>
            <summary>User Badges and Rewards</summary>
            <p>Encourage participation by giving badges or rewards for active and positive contributions.</p>
        </details>
        <details>
            <summary>Member Analytics</summary>
            <p>Implement analytics to understand user behavior and preferences, helping improve the community experience.</p>
        </details>
        <details>
            <summary>User Support and Help Center</summary>
            <p>Include FAQs, guides, and a support system to assist users with any issues.</p>
        </details>
    </div>
    <Footer/>
    </>
)

export default Services