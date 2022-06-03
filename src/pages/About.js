import React, { Component } from 'react'
import ProfileImage from '../assets/GamingMoviesWallpapers/endangered-animal-list-hero.jpg';
import "../styles/About.css" 

export default class About extends Component {
  render() {
    return (
      <div className = "about">
         <div className = "aboutTop" style = {{backgroundImage: `url(${ProfileImage})`}}></div>
         <div className = "aboutBot">
         <h1>About Me</h1>
         <p>This website is designed to inform viewers about the many endangered animals around the world. As of right now this website is designed by one person, me a
           digital arts student known as Sachin Govender.
            I decided to create this website due to my intrest with animals and I wanted to express my intrest in this topic basing my website of the art series from JJSmooth44
            known as WWF Japan – Population by pixel. In this series of artworks he displays images of many diffrent endangered animals, however, he bases the images of how many 
            animals are still around as colored squares. This means that the visibility of the image is entirely reliant on how many animals of a specfic species are around. These 
            images can display just how close some species are to extinction. Based on the specfic animal that the page is inspired by will determin the visiblilty of the text.
           This website is also filled and will be further filled with 
           blogs, these blogs aim to provide more information about animals or important information that I belive I should spread.
           So please continue to join me with my Journey in creation of this website!!!</p>
         </div>
         
      </div>
     

      
    )
  }
}
