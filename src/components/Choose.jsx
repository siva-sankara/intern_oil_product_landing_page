import React from "react";
import { Card } from "react-bootstrap";

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="background-image" />

      <div className="content">
        <h2>Why to Choose Narayani Mustard Oil?</h2>
        <h3>Experience the Unmatched Excellence of Narayani Mustard Oil -</h3>
        <h3> Nature's Golden Elixir for Health and Taste!</h3>
        <p>
          Narayani Mustard Oil is renowned for its purity and authentic flavor.
          extracted from the finest mustard seeds using traditional cold-pressed
          techniques, it retains the natural nutrients and health benefits. Its
          distinct golden color and rich taste elevate the flavors of dishes,
          enhancing the overall culinary experience.
        </p>

        <div className="card-row">
          <Card className="card">
            {/* <Card.Img className="card-img" variant="top" src="../quality.png" /> */}
            <Card.Body>
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/quality.png"}
                  alt="Icon"
                  className="icon-size"
                />
              </div>
              <Card.Title>Quality</Card.Title>
              <Card.Text>
                Carefully selected, premium brown mustard seeds ensure the
                highest quality, delivering a distinct flavour to your dishes.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/purity.png"}
                  alt="Icon"
                  className="icon-size"
                />
              </div>
              <Card.Title>Purity</Card.Title>
              <Card.Text>
                100% pure and additive-free mustard oil. Elevate your culinary
                journey with us!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <div className="icon">
                <img
                  src={process.env.PUBLIC_URL + "/delivery.png"}
                  alt="Icon"
                  className="icon-size"
                />
              </div>
              <Card.Title>Delivery Time</Card.Title>
              <Card.Text>
                Excellence delivered! Our premium mustard seeds ensure
                exceptional products for your delight.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Choose;
