import { Component } from "react";
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class BlogItemDetails extends Component{
    state={blogItemDetails:{}}

    componentDidMount(){
        this.getBlogItemDetails()
    }

    getBlogItemDetails=async()=>{
        const {match}=this.props 
        const {params}=match
        const {id}=params
        const apiUrl=`https://blogs-api-production-4ac5.up.railway.app/blogs/${id}`
        const options={
            method:'GET'
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        this.setState({blogItemDetails:data})
    }

    render(){
        const {blogItemDetails}=this.state 
        const {name, image, description, author,date}=blogItemDetails
        return(
            <>
            <Header/>
            <div className="blog-details-container">
                <h1>{name}</h1>
                <p>By {author}</p>
                <img src={image} alt="blog-item-detailed"/>
                <h2>Description</h2>
                <p className="blog-detail-description">{description}</p>
                <p>Published on {date}</p>
            </div>
            <Footer/>
            </>
        )
    }
}

export default BlogItemDetails