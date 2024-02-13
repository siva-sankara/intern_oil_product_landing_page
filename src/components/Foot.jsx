import React from 'react';
import '../App.css'
const Foot = () => {
    return (
        <div className="foot-container">
            <img src={process.env.PUBLIC_URL + '/foot.jpg'} alt="Foot Image" className="foot-image" />
        </div>
    );
};

export default Foot;