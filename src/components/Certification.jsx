import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

function Certification() {
    const certificationStyle = {
        backgroundImage: 'url("background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '50px 0',
        textAlign:'center',
    }

    const certificationItems = [
        {
            image: 'fssai.jpeg',
        },
        {
            image: 'iaf.jpeg',
        },
    ];
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };
    return (
        <div style = {certificationStyle} className="certification-container">
            <h2 className="certification-name">Our Certifications</h2>
            <div className='certification-items'>
                {certificationItems.map((item, index)=> (
                    <Link to="/certificate" onClick={() => handleNavigation('/')} key={index} className="certification-item">
                        <img src={item.image} alt={item.title} className="certification-image" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Certification;