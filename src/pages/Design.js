import React, { Component } from 'react'
import "../styles/Webdes.css";
import {Link} from 'react-router-dom';
import HomepageBanner from '../assets/GamingMoviesWallpapers/Purplepicture.png';

export default class Design extends Component {
  render() {
    return (
      <div className = "allList" style = {{backgroundImage: `url(${HomepageBanner})`} }>

        <div className = "pagelinks">
        <h1 className="pagesTitle">Design Page</h1>
        <br></br>
        <br></br>
        
          <Link to = "/Wireframe">
        <button>Website Wireframe and Schemes</button>
        </Link>
        <br></br>
        <br></br>
        <Link to = "/References">
        <button>Refrences</button>
        </Link>
        <br></br>
        <br></br>
        <Link to = "/Needstobedone">
        <button>What needs to be done</button>
        </Link>
        <br></br>
        <br></br>
        </div>
          
      </div>
    )
  }
}
