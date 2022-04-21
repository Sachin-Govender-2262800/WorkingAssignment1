import React, { Component } from 'react'
import "../styles/Contact.css" 

export default class Contact extends Component {
  render() {
    return (
      <div className='contacttable'>
    
    <h1>Contact us</h1>
    <p>You can reach us using the following methods to ask questions, lodge complaints or if there is any information you would like to share!
      we appreciate all kinds of feedback!
    </p>

      <div className="container">
      <h2>Contact details</h2>
  

  <div className="App">
      <table>
        <tr>
          <th>Number</th>
          <th>082 444 8888</th>
        
        </tr>
        <tr>
          <td>Email</td>
          <td>2262800@students.wits.ac.za</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td>www.Instagram.com</td>
        
        </tr>
        <tr>
          <td>Twitter</td>
          <td>www.Twitter.com</td>
          
        </tr>
      </table>
    </div>
    </div>
</div>
    )
  }
}
