import {} from 'react'
import background_image from '../assets/about-background-image.png'
import aboutImage from '../assets/about-background.png'
import { FaCirclePlay } from "react-icons/fa6";

function About() {
  return (
    <div>
       <div className='about_container'>
         <div className='background_about_image'>
            <img src={aboutImage} className='img-fluid'/>
         </div>
         <div className='main_section'>
            <div>
                <img src={ background_image} className='img-fluid'/>
            </div>
            <div className='text_about_section'>
            <h1 className='heading_tag'>About</h1>
                <h2 className='primary_heading'>Food Is An Important Part Of A Balanced Diet</h2>
                <hr/>
                <p>
            Restaurants in Agra, Agra Restaurants, Agra Cantt restaurants, Best
            Agra Cantt restaurants, Agra City restaurants, Quick Bites in Agra,
            Quick Bites near me, Quick Bites in Agra Cantt, in Agra, near me, in
            Agra Cantt, Order food online in Agra Cantt, Order food online in
            Agra
          </p>
          <button className='play_btn'><FaCirclePlay/> </button>
        
            </div>
         </div>
       </div>
    </div>
  )
}

export default About