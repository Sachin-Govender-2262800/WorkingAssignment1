import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../styles/Webdes.css";
import HomepageBanner from '../assets/GamingMoviesWallpapers/Purplepicture.png';

export default class Needstobedone extends Component {
  render() {
    return (
        <div className = "allList" style = {{backgroundImage: `url(${HomepageBanner})`} } >
        <div className = "pagelinks">
          <h1>Things that need to be done</h1>
            
            <p>In terms of what needs to be done the creation of a second nav bar is one of the most important things, as in the wireframes there is a clear example of a dual navigation 
              being used. I also need to create a better layout of the blogs as well as having a clear consistent font style for the blogs. The background Image that is used for 
              the Homepage as well as other pages will be changed so that every page is in someway unique if possible. The colors may be updated however as of right now I like the color 
              scheme. The logo that is placed on the Top right of the website is a placeholder logo just until I am able to design the logo I want for the website. I would also like to have 
              an image similar to that of the about page for the blogs, unfortunatley the images i tried to put with the blogs refused to be displayed and that is an issue I need to fix.
              I also need to better create and change the layout of multiple pages that being the About, contact, homepage as well as the Design page and Blogs index page. There also needs
              to be the creation of more navigation links based of the theme of the website which is based around Video games and Movies.</p>
        </div>
      
      
       
        
        
    </div>
    )
  }
}
