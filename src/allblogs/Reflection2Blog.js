import React, { Component } from 'react'
import "../styles/blogpage.css"
import HomepageBanner from '../assets/1600w-1NYTq34QR6I.png';
import Panda from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-20.png';
import {Link} from 'react-router-dom';

export default class Reflection2Blog extends Component {
  render() {
    return (
      <div className = "BlogAll">


<div class="Ani">
          <p>This blog will be based around the Giant Panda and the numbers that are left. 
            To fully view the effect of their numbers, hover your mouse over the text while reading. Move your mouse off your screen or to the sides to view the text. </p>
       
        <img src ={Panda} alt= "Panimage" />
        </div>

        <div className='PanImageBlur'>


        <div className = "topblog">
      <h1>Blog 7: Self Critique 2
    </h1>
    <h2>Written by Sachin Govender (2262800)</h2>
    </div>
    <div className='blogpara'>
   <p> Today’s blog is going to be a different but similar to a previous blog done by me this one will be another self-critique of my website. 
     I will talk about the changes that have been made as well as how I view my practical and theoretical work.</p>

<p>The themes of my website has completely changed from that of video games and movies and has changed to that of promoting information about endangered animals, 
  being inspired by JJSmooth44’s series. The website makes use of a blur effect that seen within the blogs as well as the Pixel art maker for now. This blur needs
   allot of work and needs to be implemented in more places, I would also want to try and change it from a blur to a pixilation effect, pixels as a theme need to
    be presented alongside the website. One of the biggest issues with the blogs being blurred is the user’s ability to view the content however this is done purposely 
    to hinder the progress of the user when reading the websites content, it is to represent a more direct consequence of how JJSmooth44 represents the animals in his 
    work. With how blurred the animals are in the theme of the page will affect how much content the user is able to see, this is resolved however by moving the mouse 
    to the side of their screen or off the direct content of the page.</p>

<p> I believe with all this in mind my Practical work has improved from the first iteration of the website however this can always be improve further. 
  Such as with my work not representing how I displayed it in my wireframes this still needs allot more improvements as well as better refinements to each
   page theme when presenting an animal. More Images need to be added as well such as background images.</p>

<p>In terms of the theoretical I don’t believe I have improved upon it, with the latest theme change I need to go back to previous blogs to adjust
   it as such as to reflect the new theme. I would also like to talk about new topics as a whole and create more blogs based of my interests and 
   the theme of my website, I also need to bring more material from lectures and notes from the modules provided from lecturers. </p> 
   
   <p>There is still allot that needs to be done and I have many ideas I would like to implement within my website in terms style as well as content.
      Asking the same question that I had asked in the previous self-critique being am I happy with my overall website. As simple as it may be I am happy 
      with the direction of my website and what I have managed to achieve.</p>




</div>
      </div>
      </div>
    )
  }
}
