import React, { Component } from 'react'
import { BlogList } from '../helpers/BlogList';
import BlogItem from '../components/BlogItem';
import {Link} from 'react-router-dom';

import Wire from '../assets/Wireframes/Cold.PNG';
import Scheme2 from '../assets/GamingMoviesWallpapers/180229_dog_dog_breed_dog_like_mammal_icolorpalette.PNG';

import '../styles/blogpage.css';

export default class Wireframe extends Component {
  render() {
    return (
      <div className = "Header">
       
        <h1>Changes Made</h1>

        <p>one of the biggest changes made is the Theme itself. From the intial idea of artwork around Video Games and Movies, it has changed to talking about endangered
          animals. Basing my work around the series created by JJSmooth44. The work I would like to create will be inspired by his use of pixels and image manipulation. As of 
          right now the Website uses a blur effect to impact how the User reads the blogs making it harder to read based of the animal the page is currently inspired by.
          Allot of changes still need to be made such as an increase in stylization within the website such as the addition of background images, more images, more animals need to be 
          added to the animal collage and the animal pixel challenge. A Logo needs to be created as well.
        </p>
        <h2>Schemes</h2>

        <p>A new color scheme is used as the previouse color scheme would not work with the ideas of animals and portraying the serious message that needs to be represented
          when it comes to talking about endangered animals. The colors are subject to change however as I have grown to not really like them.
        </p>

        <img src={Scheme2}/>
      

<div className='References'>
        <p1>

       
        Color Palette Ideas from Dog Breed Like Mammal Image. (n.d.). iColorpalette. Retrieved June 2, 2022, from
 <a href = "  https://icolorpalette.com/palette-by-themes/street-dog">  https://icolorpalette.com/palette-by-themes/street-dog</a> </p1>
      </div>
<br></br>
      <h3>Wireframe Change</h3>
        <p>For the most part all the wireframes havent changed and the intial idea behind them have not. There does need to be more effort with the css to style the website
          as represented in the wireframe ideas. However the one change that has been made is the removal of the second navbar as this seems both unnessary and has been determined 
          as unnessarily hard to add.
        </p>
      <img src={Wire}/>
      </div>
    )
  }
}
