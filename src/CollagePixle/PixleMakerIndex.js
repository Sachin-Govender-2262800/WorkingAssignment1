import React, { Component } from 'react'
import "./CollageFinal.css" 


import BTiger from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-1.png';
import Chimp from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-7.jpg';
import Amur from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-2.png';
import BRhino from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-3.png';
import BWhale from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-4.png';
import WWD from '../assets/GamingMoviesWallpapers/Pixels/endangered-species-pixelated-photos-jjsmooth44-12.png';

import {BrowserRouter as Router, Link} from 'react-router-dom';


export default class PixleApp extends Component {
  render() {
    return (
      <div className = "PixMain">
          <div className='Header'>
      <h1> Endangered Art Work</h1>
      <p>Click on an Image and try to make an image based off the animal.</p>
      <p>Note as of right now the only animals that work are the Bengal Tiger, Chimpanzee and Amur Leopard. This will be updated soon!</p>
      </div>

    <form className='AnimalsImage'>
    <Link to="/tiger">
          <img src={BTiger}/>
        </Link>


        <Link to="/chimp">
          <img src={Chimp}/>
        </Link>
      

        <Link to="/Amur">
          <img src={Amur}/>
        </Link>
      

        <Link to="/">
          <img src={BRhino}/>
        </Link>
      

        <Link to="/">
          <img src={BWhale}/>
        </Link>
      

        <Link to="/">
          <img src={WWD}/>
        </Link>
      






        </form>
      </div>
     

      
    )
  }
}
