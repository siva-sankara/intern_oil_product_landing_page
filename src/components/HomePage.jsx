import React from 'react';
import Benefits from './Benefits';
import Certification from './Certification';
import Choose from './Choose';
import Feedback from './Feedback';
import Foot from './Foot';
import Size from './Size';
import Slider from './Slider';

function HomePage() {
    return (
        <div>
            <Slider />
            <Benefits />
            <Choose />
            <Size />
            <Certification />
            <Feedback />
            <Foot />
        </div>
    );
}
export default HomePage;