import React from "react";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + "/oili.png"} alt="Mustard Oil" />
      </div>
      <div className="text-container">
        <h2>Benefits of Mustard Oil</h2>
        <p>
          Mustard oil is a rich source of muonounsaturated and polyunsaturated
          fatty acids, which are beneficial for heart health. It is also packed
          with essential vitamins and minerals such as Vitamin E, Omega-3 fatty
          acids, and antioxidants, making it an excellent choice for maintaining
          skin and hair health.
        </p>
        <p>
          Research suggests that mustard oil possesses anti-inflammatory and
          antimicrobial properties, making it useful for various skin conditions
          and promoting wound healing. Additionally, when used for cooking,
          mustard oil enhances the flavours of dishes and adds a distinct aroma.
        </p>
        <p>
          Regular consumption of mustard oil has been linked to improved
          digestion, reduced cholesterol levels, and better immune system
          function. Its versatility and numerous health benefits make mustard
          oil an essential ingredient in traditional and modern cuisine.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
