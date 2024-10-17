import {} from "react";
import backgroundImage from "../assets/home-banner-background.png";
import bannerImage from '../assets/home-banner-image.png'
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  return (
    <div className="wrapper_container">
      <div className="home_container">
        <div className="home_background_image">
          <img className="img-fluid" src={backgroundImage} />
        </div>
{/* left */}
        <div className="text_section">
          <h1>We Deliver Best for you.</h1>
          <h1 className="text-warning fw-bolder">Available in <span className="text-primary fw-medium">all over India</span>...</h1>
          <hr/>
          <p>
            Restaurants in Agra, Agra Restaurants, Agra Cantt restaurants, Best
            Agra Cantt restaurants, Agra City restaurants, Quick Bites in Agra,
            Quick Bites near me, Quick Bites in Agra Cantt, in Agra, near me, in
            Agra Cantt, Order food online in Agra Cantt, Order food online in
            Agra
          </p>

          <div className="bottom_section">
             <button className="order_btn">Order Now <FaLongArrowAltRight/></button>
             {/* <img src={bannerImage} className="mt-3small_img img-fluid"/> */}
          </div>
        </div>
        {/* right */}
        <div className="image_section">
           <img  className="img-fluid" src={bannerImage}/>
        </div>

      </div>
    </div>
  );
}

export default Home;
