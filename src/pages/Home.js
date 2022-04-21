import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from '../assets/GamingMoviesWallpapers/Purplepicture.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className = "home" style = {{backgroundImage: `url(${HomepageBanner})`} }> 
      <div className = "header">
        <h1>Binging Gamers</h1>
        <p>For all your Gaming and Movie watching needs</p>
        <p>we will provide you with the very best informations about top video games as well as movies!!!</p>
        <Link to = "/blogs">
        <button>Read Our Blogs</button>
        </Link>

      </div>
        
      </div>
    )
  }
}
