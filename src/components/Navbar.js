import React, { Component } from 'react'
import Logo from '../assets/fakelogo.png';
import {Link } from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state ={
            openLinks : false

        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState(prevState => ({
            openLinks : !prevState.openLinks
        }));
    }



  render() {
    return (
      <div className = "navbar1">

          <div className = "nav1LinkSide">
            <button onClick = {this.toggleNav}> ==== </button>
            <Link to = '/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/blogs'>Blogs</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/design'>Designs</Link>
            
           
            </div>
          

        <div className = "nav1LogoSide" id={this.state.openLinks ? "open" : "close"}>
              <img src = {Logo}/>
            <div className = "hiddenLinks">
            <Link to = '/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/blogs'>Blogs</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/design'>Designs</Link>
            
            </div>
        </div>
          
      </div>
    )
  }
}
