import React, { Component } from 'react'
import "../styles/Home.css";
import HomepageBanner from '../assets/GamingMoviesWallpapers/Endangered-Species-Day-Leo-DiCaprio-Photo-WWF.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      //<div className = "home" style = {{backgroundImage: `url(${HomepageBanner})`} }> 
      <div className = "header">
        <h1>Pixel Crossing</h1>
        <br></br>
        <p>A website created to spread awarness about endangered animals!!!  </p>
        <p>Inspired by JJSmooth44 series called WWF Japan -Population by pixel.</p>
        <Link to = "/blogs">
        <button>Read Our Blogs</button>
        </Link>

      </div>
        
     // </div>
    )
  }
}
