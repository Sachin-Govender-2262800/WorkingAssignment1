import React, { Component } from 'react'



export default class MenuItems extends Component {
  render() {
    return (
      <div className = "menuItems">
          <div style = {{backgroundImage: `url(${this.props.image})`}}></div>
          <h1>{this.props.name}</h1>
          <p>{this.props.words}</p>
      </div>
    )
  }
}
