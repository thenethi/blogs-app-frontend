import {Link} from 'react-router-dom'
import './index.css'

const BlogItem=props=>{
    const {blogItem}=props 
    const {id,name,author,date}=blogItem
    return(
        <li className='blog-item'>
            <h1 className='blog-heading'>{name}</h1>
            <p className='blog-heading'>By {author}</p>
            <p className='blog-heading'>Published on {date}</p>
            <Link to={`/blogs/${id}`}><button type="button" className='read-more-btn'>Read More</button></Link>
        </li>
    )
}

export default BlogItem