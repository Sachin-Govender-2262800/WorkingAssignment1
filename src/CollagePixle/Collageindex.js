import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import "../styles/Collage.css"
import Images from "../components/Images"

export default class PrepBlog extends Component {
render(){
  return(
      <div className="fullPixleIndex">
          <div className ="header"> 
          <h1>Our Animal Collage Based off jjsmooth44 work!</h1>
          </div>
          <Link to = "/PixleMakerIndex">
        <button>Read Our Blogs</button>
        </Link>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

  <div className='Images'>
    <Images />
  </div>
  </div>
  
  );
}
}

