import React, { Component } from 'react'
import ProfileImage from '../assets/GamingMoviesWallpapers/59975016192e6937045cbaa3fb05241c.jpg';
import "../styles/About.css" 

export default class About extends Component {
  render() {
    return (
      <div className = "about">
         <div className = "aboutTop" style = {{backgroundImage: `url(${ProfileImage})`}}></div>
         <div className = "aboutBot">
         <h1>About Me</h1>
         <p>This website is designed to inform viewers about the latest and most popular video games and movies. As of right now this website is designed by one person, me a
           digital arts student known as 
           Sachin Govender. I decided to create this website due to his intrest with gaming as well as film and I wanted to express my intrest in these two media forms
           by sharing it with a much larger audience. I enjoy spending my time analysing Video games as well as movies and I thought by me using my time in this way I could 
           thus save the viewers time by providing them necessary details of the media allowing them to determine if they would enjoy the media. This website is also filled with 
           blogs these blogs aim to provide more information weather its about digital arts, video games, movies or important information that I belive I should spread.
           So please continue to join me with my Journey in creation of this website!!!</p>
         </div>
      </div>
    )
  }
}
