import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import BlogItemDetails from './components/BlogItemDetails';
import Services from './components/Services';
import { ContactUs } from './components/ContactUs';
import './App.css';

const App=()=>(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={AboutUs}/>
    <Route exact path="/blogs" component={Blogs}/>
    <Route exact path="/blogs/:id" component={BlogItemDetails}/>
    <Route exact path="/services" component={Services}/>
    <Route exact path="/contact-us" component={ContactUs}/>
  </Switch>
)

export default App;
