import React, { Component } from 'react'
import Orang from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-17.jpg';
import "../styles/blogpage.css"

import Amur from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-2.png';
import BRhino from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-3.png';

export default class blog1 extends Component {
  render() {
    return (
      
   
        <div className = "fullBlog"  >

       
      
        <div class="Ani">
          <p>This blog will be based around the Bornean Orangutang and the numbers that are left. 
            To fully view the effect of their numbers, hover your mouse over the text while reading. Move your mouse off your screen or to the sides to view the text. </p>
        <img src ={Orang} alt= "Orangimage" />
        </div>

        <div className='OrangImageBlur'>
        <div className = "topblog">
       
        <h1>Blog 5: Preparatory Work</h1>
        <h2>Written by Sachin Govender (2262800).</h2>
        </div>


       

        <div className='blogpara'>
      
       
       <p> The website at its current point is still in its very early development stages, at its current point the idea behind the website is to express my interest. However 
         this intrest has changed from the inital concept idea as well as from how it first began. The initial idea was to create art from my intrest in video games and movies
          by displaying video game as well as movie art. I had initially chosen these themes as it was one of the two things that allowed me to connect
          with friends and family especially due to the lockdown that happened due to Covid. The idea is to then share movies and video games that I enjoyed and helped
           connect me with my friends and to hopefully introduce the viewers to these to help them connect with their friends and families in this way. </p>

           <p>This idea has changed however, the main idea of this website now is to spread awarness about endangered animals. The website would be inspired and
             themed around the works of JJSmooth44 series that he had created known as WWF Japan – Population by pixel. In this series he displays the animals as a colored block and uses
              these blocks to create an image of the animal based on the animal, some images, the user is able to mkae out where as others are completely distorted and are hard to make out. Some examples will be shown below.
              With this in mind I would like to implement more animal elements as well as have pixels and image distortion as a prominent theme in my website.</p>

         <div className='blogparaimgs'>
          <img src={Amur}/>
          
          <img src={BRhino}/>
          </div>
      

<div className='Refrences'>
  <h3>Refrences</h3>
  <p1>Images taken from, My Modern Met, All images created by JJSmooth44 
    from <a href = "https://mymodernmet.com/endangered-species-pixelated-photos-jjsmooth44/">https://mymodernmet.com/endangered-species-pixelated-photos-jjsmooth44/</a> </p1>
    </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

      
      </div>
      </div>

      </div>
  
     
    )
  }
}
