import React, { Component } from 'react'
import { BlogList } from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';
import {Link} from 'react-router-dom';
import Homepagewire from '../assets/Wireframes/Homepage.PNG';
import Contactwire from '../assets/Wireframes/Contact.PNG';
import BlogsIndexwire from '../assets/Wireframes/BlogsIndex.PNG';
import Aboutwire from '../assets/Wireframes/About.PNG';
import Blogwire from '../assets/Wireframes/Blogs.PNG';
import Schemewire from '../assets/Wireframes/Schemecol.png';
import '../styles/wireframeschemes.css';

export default class Wireframe extends Component {
  render() {
    return (
      <div className = "webframes">
         <h1> Wireframe and Schemes</h1>
         <br></br>
         <br></br>
         <h2>Wireframes</h2>
         <br></br>
         <br></br>
         <div className = "Wframes">

        <p>The wireframes have allot more details than whats currently on the website. As of right now however that is always subject to change I would like to add a second
          navigation bar as well as the addition of multiple images throughout the website. I would also like to add a hover feature or some way of displaying which part of 
          the website the user is in. In terms of the blogs I would like to create a margin or container that holds the blogs within.
          The contact page also needs to be updated where there is the additon of a form container that allows the user to input their details instead of the current page which 
          just has my links and details. There was also the addition of a footer in the website this needs to be updated into the wireframes.
        </p>
        <br></br>
          <img src={Homepagewire} alt="Homepage.PNG" />;
          <br></br>
         <br></br>
         <br></br>

         <img src={Aboutwire} alt="About.PNG" />;
        <br></br>
        <br></br>
        <br></br>

        <img src={Contactwire} alt="Contact.PNG" />;
      <br></br>
      <br></br>
      <br></br>
      
<img src={BlogsIndexwire} alt="BlogIndex.PNG" />;
      <br></br>
      <br></br>
      <br></br>

<img src={Blogwire} alt="Blogs.PNG" />;
      <br></br>
      <br></br>
      <br></br>

      <h3>color scheme</h3>
<br></br>
<p>The current scheme that is being used is the one below. The pruple aesthethic needs to be further enhanced but at the moment it is there. The blue will be used 
  very rarely comapred to the purple shades, white shades and grey shades.
</p>
<br></br>
      <img src={Schemewire} alt="Schemecol.png" />;
      <br></br>
      <br></br>
     <p>The font that is currently being used throughout the website is font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;</p>
<br></br>
         </div>

        
        
          
      </div>
    )
  }
}
