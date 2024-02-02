import Header from '../Header'
import Footer from '../Footer'
import ImageSlider from '../ImageSlider'
import './index.css'

const AboutUs=()=>(
    <>
    <Header/>
    <div className='about-us-container'>
        <h1 className='about-us-head'>A proficient team with extensive <mark><span className='spanned-about-us-head'>knowledge</span></mark></h1>
        <img src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?w=826&t=st=1706883315~exp=1706883915~hmac=d0174913f2f358eb4906e93851901e25cf2d86e6b5c14905e6216e4ea09d855d" alt="about-us" className='about-us-image'/>
        <div className='about-us-content'>
            <h1 className='about-us-heading'>About Us</h1>
            <p className='about-us-para'>Welcome to our vibrant online community! We are a diverse group of individuals united by a common passion for connection and collaboration. Our platform serves as a digital haven where members can share ideas, engage in meaningful discussions, and foster genuine relationships. Whether you're here to seek knowledge, share experiences, or simply connect with like-minded individuals, our community is designed to be an inclusive space for everyone. Join us in building a supportive network that celebrates diversity, encourages creativity, and cultivates a sense of belonging. Together, we shape the heart of our thriving online community.</p>
        </div>
        <div className='count-container'>
            <div className='count-item'>
                <h1>50+</h1>
                <p>Employees</p>
            </div>
            <div className='count-item'>
                <h1>9+</h1>
                <p>Countries</p>
            </div>
            <div className='count-item'>
                <h1>7+</h1>
                <p>Offices</p>
            </div>
        </div>
        <ImageSlider/>
        <h1 className='about-us-head'>We believe in doing the right things at the right time.</h1>
    </div>
    <Footer/>
    </>
)

export default AboutUs