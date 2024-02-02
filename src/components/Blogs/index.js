import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogItem from "../BlogItem";
import './index.css'

class Blogs extends Component{
    state={blogsList:[]}

    componentDidMount(){
        this.getBlogItems()
    }

    getBlogItems=async()=>{
        const apiUrl="https://blogs-api-production-4ac5.up.railway.app/blogs"
        const options={
            method:'GET'
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        this.setState({blogsList:data})
    }

    render(){
        const {blogsList}=this.state
        return(
            <>
            <Header/>
            <div>
                <h1 className="blogs-heading">Blogs</h1>
                <ul type="none" className="blog-list animated pulse">
                    {
                        blogsList.map((each)=><BlogItem blogItem={each} key={each.id}/>)
                    }
                </ul>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Blogs