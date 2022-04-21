import React, { Component } from 'react'
import { BlogList } from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';
import "../styles/Blog.css";
import {Link} from 'react-router-dom';
import HomepageBanner from '../assets/GamingMoviesWallpapers/Purplepicture.png';

export default class Blogs extends Component {
  render() {
    return (
      <div className = "allBlogs" style = {{backgroundImage: `url(${HomepageBanner})`} }>
          <h1 className="blogTitle">Blog Menu</h1>
          
          <Link to = "/FirstBlog">
        <button>Blog 1 </button>
         </Link>
<br></br>
         <Link to = "/blog2">
        <button>Blog 2 </button>
         </Link>
         <br></br>
         <Link to = "/blog3">
        <button>Blog 3 </button>
         </Link>
         <br></br>
         <Link to = "/blog4">
        <button>Blog 4 </button>
         </Link>
         <br></br>
        
          
      </div>
    )
  }
}
