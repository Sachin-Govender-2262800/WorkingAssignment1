import React, { Component } from 'react'
import "../blur.css"
import Edit from "../../APixleMakerComponents/Edit"


export default class Amur extends Component {
  render() {
    return (
      <div className = "PixMain">
          <div className='header'>
              <h1>Amur Leopard Blur Challenge </h1>
              <p>The Amur Leopard as inspired from JJsmooth44's work is estimated at only 60 being left in the wild. Therefore the Pixel Maker is blurred at 20px.
                  You are able to change the Width and Height by hovering over the numbers below. You can later export your image to see your creation. 
                  Press the button below to begin!
              </p>

          </div>

          <div className ="Amur">
      <Edit/>
      </div>
      </div>
     
    )
  }
}
