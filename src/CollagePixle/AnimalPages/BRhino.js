import React, { Component } from 'react'
import "../blur.css"
import Edit from "../../APixleMakerComponents/Edit"


export default class PixleApp extends Component {
  render() {
    return (
      <div className = "PixMain">
          <div className='header'>
              <h1>Bengal Tiger's Blur Challenge </h1>
              <p>The tiger as inspired from JJsmooth44's work is estimated at 2500 being left in the wild. Therefore the Pixel Maker is blurred at 10px.
                  You are able to change the Width and Height by hovering over the numbers below. You can later export your image to see your creation. 
                  Press the button below to begin!
              </p>

          </div>

          <div className ="TigerBlur">
      <Edit/>
      </div>
      </div>
     
    )
  }
}
