import React, { Component } from 'react'
import "../styles/Contact.css" 


export default class Contact extends Component {
  render() {
    return (

     
      <div className="ContactForm">
        <div className = "body">

          <h1> Contact Us </h1>
        

          <div id= "container">
            <div className = "Info">
            <h4>Contact Information</h4>
                <p>Fill up the form if you if you would like us to reach out to you!</p>

                <div className = "icontext">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                  <span>082-907-4444</span>
                </div>

                <div className = "icontext">
                <i class="fa fa-envelope-square" aria-hidden="true"></i>
                  <span>2262800@students.wits.ac.za</span>
                </div>

                <div className = "icontext">
                <i class="fa fa-envelope-square" aria-hidden="true"></i>
                  <span>https://twitter.com/</span>
                </div>

                <div className = "icontext">
                <i class="fa fa-envelope-square" aria-hidden="true"></i>
                  <span>https://www.instagram.com/</span>
                </div>


                <div className = "Socials">
                  <a href = "#" className ="icon-circle">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>

                  <a href = "#" className ="icon-circle">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  <a href = "#" className ="icon-circle">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>

               
                </div>
                </div>
              <form>
                <div className = "col2">
                <div className='group'>
                  <label>First Name</label>
                  <input type="text"/>
                </div>

                <div className='group'>
                  <label>Last Name</label>
                  <input type="text"/>
                </div>

                <div className='group'>
                  <label>Number</label>
                  <input type="tel"/>
                </div>

                <div className='group'>
                  <label>E-mail</label>
                  <input type="email"/>
                </div>

                <div className='group solo'>
                  <label>Message</label>
                  <textarea></textarea>
                </div>

                <div className='group solo right'>
                  <button className = "primary">Send Message</button>
                
                </div>

                </div>

              </form>

              
            </div>
          </div>
          </div>


   
         
     
   
    )
  }
}
