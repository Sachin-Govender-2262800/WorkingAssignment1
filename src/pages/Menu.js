import React, { Component } from 'react'
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItems';
import "../styles/Blog.css";

export default class Menu extends Component {
  render() {
    return (
      <div className = "menu">
          <h1 className = "menuTitle">Synth Menu </h1>
          <div>
              {MenuList.map((menuItem, value) => {
                  return(
                      <menuItem value={value} name={menuItem.name} price={menuItem.price} image ={menuItem.image}/>
                  )
              })}
          </div>
      </div>
    )
  }
}
