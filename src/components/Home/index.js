import Header from '../Header'
import Footer from '../Footer'
import hero from './hero.svg'
import { Link } from 'react-router-dom'
import './index.css'

const Home=()=>(
    <>
    <Header/>
    <div  className="home-container">
        <div className="hero-text-container">
            <h1 className="hero-heading">We are <mark>Community</mark></h1>
            <p className="hero-description">Building a strong neighborhood community is an important way to bring members of your neighborhood together, make new friends, and offer each other support.</p>
            <Link to="/about">
            <button type="button" className="cta-btn">Get Started</button>
            </Link>
        </div>
        <div>
            <img src={hero} alt="hero-section" className="hero-section-image"/>
        </div>
    </div>
    <Footer/>
    </>
)

export default Home