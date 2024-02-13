import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <div className="head-container">
      <div className="head-photo">

                <div className="customer-count-head">
                    <p><span>Customer Count <span>:</span> </span> <strong className="blinking-text">1000+</strong></p>
                </div>

                <div className="distributor-count-head">
                    <p><span>Distributor Count <span>:</span> </span> <strong className="blinking-text">500+</strong></p>
                </div>                 

                 <div className="rating-count-head">
                    <p><span>Overall Ratings <span>:</span> </span> <strong className="blinking-text">4.6</strong></p>
                </div>                 
      </div>
    </div>
  );
};

export default Slider;
