import React from 'react';


function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-left">
                    <img src= {process.env.PUBLIC_URL + '/oili.png'} alt="Photo 2" className="about-image" />
            </div>
            <div className="about-right">
                <h2>About Us</h2>
                <p>Narayani Mustard Oil , established in 2023 and led by Aman Kumar and Adarsh Kumar, is dedicated
                    to crafting exceptional 100% pure Mustard Oil, renowned for its exceptional quality and safety.
                    Our meticulous manufacturing process ensures that our Mustard Oil is not just a culinary delight but also
                    a trusted choicefor your entire family, including infants. We take immense pride in our commitment 
                    to purity, upholding stringent standards that exclude harmful chemicals during production. Additionally ,
                    our commitment to environmental responsibility shines through in our use of biodegradable packaging materials
                    , contributing to a cleaner, greener future.
                </p>
                <p>Our reach now extends far and wide, serving customers across India, including Rajasthan,
                    Delhi, West Bengal, Chennai, Bihar. We are more than just a brand; we are a trusted source for pure, safe,
                    and versatile Mustard Oil, enriched with benefits that touch every aspect of your life. From nourishing infants 
                    to enhancing hair and promoting overall health, Narayani Mustard Oil is your partner for a healthier, 
                    happier lifestyle. 
                </p>
            </div>
        </div>
    );
};

export default AboutPage;