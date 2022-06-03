import React, { Component } from 'react'
import "../styles/Collage.css"
import {Link} from 'react-router-dom';


export default class Images extends Component {
    constructor(props){
        super(props);
        this.state={
            imageUrl: "",
            imageUrlArray: [
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-12.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-1.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-2.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-14.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-20.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-3.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-4.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-5.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-6.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-9.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-8.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-7.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-13.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-11.jpg",
                "https://mymodernmet.com/wp/wp-content/uploads/2019/10/endangered-species-pixelated-photos-jjsmooth44-10.jpg",
            ],
            showModal: false,
            popImageUrl:""
        }
    }
    ImageSubmit = (e) => {
        e.preventDefault();
        let imageUrlArray = this.state.imageUrlArray;
        imageUrlArray.push(this.state.imageUrl)
        this.setState({
            imageUrlArray: imageUrlArray
        })
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }


render(){
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
        return(
            <img className='singleImage' 
            src={url} 
            key={index}/>
        )})
  return(
  <div className='Images'>
      <form onSubmit = {this.ImageSubmit}>
          <input
           type = "text"
            placeholder='Please Insert Image URL'
             onChange = {this.handleLinkChange}></input>
          <button 
          type = "Submit"
           className='submitButton'>Confirm</button>
      </form>
   {images}
  </div>
  
  );
}
}

