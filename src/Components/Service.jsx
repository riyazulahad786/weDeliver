import {} from "react";
import choose from '../assets/choose-image.png'
import delivery from '../assets/delivery-image.png'
import meal from '../assets/pick-meals-image.png'
function Service() {
  return (
    <div className="container py-5 service_container">
      <div className="d-flex justify-content-center align-items-center">
        <h1>Work</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="service_heading">How It Works</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-3">
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="service_card d-flex gap-3 justify-content-center align-items-center">
        <div className="card">
          <div className="card-body text-center">
          <img src={meal} className="img-fluid card_images" />
          <h3>Pick Meals</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
          <img src={choose} className="img-fluid card_images" />
          <h3>Choose Often You</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
          <img src={delivery} className="img-fluid card_images" />
          <h3>Delivery Faster</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
      </div>
      <div className="service_card d-flex py-3 gap-3 justify-content-center align-items-center">
        <div className="card">
          <div className="card-body text-center">
          <img src={meal} className="img-fluid card_images" />
          <h3>Pick Meals</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
          <img src={choose} className="img-fluid card_images" />
          <h3>Choose Often You</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
          <img src={delivery} className="img-fluid card_images" />
          <h3>Delivery Faster</h3>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
