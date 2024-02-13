import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="left-section">
                <div className="company-logo">
                    <img src= {process.env.PUBLIC_URL + '/logo.jpg'} alt="Company Logo" />
                </div>
                <div className="follow-us">
                    <p>Follow us on:</p>
                </div>
                    <div className="social-icons">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                
            </div>
            <div className="middle-section">
                <h2 className="heading">Counts</h2>
                <div className="customer-count">
                    <p><span>Customers: </span> <strong className="blinking-text green-text">1000</strong></p>
                </div>
                <div className="distributor-count">
                    <p><span>Distributors: </span> <strong className="blinking-text green-text">500</strong></p>
                </div>
            </div>
            <div className="product-section">
                <h2 className="product-heading">Products</h2>
            <ul className="product-list">
                <li>Pouches</li>
                <li>Jerry Can</li>
                <li>PET Bottles</li>
                <li>Tin</li>
            </ul>
            </div>
            <div className="contact-section">
                <h2 className="contact-heading">Contact us</h2>
                <div className="contact-us">
                    <p><strong>Registered Office: </strong>Vill-Kurhani,Panchayat Hirauta</p>
                    <p>Dumma,Block Triyani, Sheohar (Bihar)843329</p>
                    <p><strong>Name: </strong>Adarsh Singh</p>
                    <p><strong>Mobile: </strong>+91- 7091613113 ,8294383189</p>
                    <p><strong>Email: </strong>narayani-oil@gmail.com</p>
                    <p><strong>Website: </strong>narayani-oil@com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;