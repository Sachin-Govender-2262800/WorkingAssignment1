import React, { Component } from 'react'
import { BlogList } from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';
import "../styles/Blog.css";
import {Link} from 'react-router-dom';
import HomepageBanner from '../assets/GamingMoviesWallpapers/Purplepicture.png';

export default class Blogs extends Component {
  render() {
    return (
      <div className = "allBlogs" >
          <h1 className="blogTitle">Blog Menu</h1>

          <div className = "BlogList">
          
          <Link to = "/FirstBlog">
        <button>Blog1: web Art</button>
         </Link>
<br></br>
         <Link to = "/blog2">
        <button>Blog2: Design and Aesthetics </button>
         </Link>
         <br></br>
         <Link to = "/blog3">
        <button>Blog3: Internet, Society and Design Justice </button>
         </Link>
         <br></br>
         <Link to = "/blog4">
        <button>Blog4: Critical Reflection </button>
         </Link>
         <br></br>
         <Link to = "/PrepBlog">
        <button>Blog5: Preparatory work </button>
         </Link>
         <br></br>
         <Link to = "/ProBlog">
        <button>Blog6: Prototype </button>
         </Link>
         <br></br>
         <Link to = "/Reflection2Blog">
        <button>Blog7: Second Critical Reflection </button>
         </Link>
         <br></br>
         </div>
        
          
      </div>
    )
  }
}
