import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

function ContactUsPage() {
    return (
        <div className="contact-us-container">
           <h1 className="contact-heading">Get in Touch</h1>
           <div className="contact-cards">
            <div className="contact-card">
                <div className="contacts-card">
                <div className="card-icon green-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="card-info">
                    <h3>Registered Office</h3>
                    <p>Vill- Kurhani, Panchayat Hirauta Dumma, Block Triyani, Sheohar (Bihar)843329</p>
                </div>
                <div className="card-icon green-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="card-info">
                    <h3>Email</h3>
                    <p>oilmillnarayani@gmail.com</p>
                </div>
                <div className="card-icon green-icon">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="card-info">
                    <h3>Phone</h3>
                    <p>+91 7091613113</p>
                    <p>+91 8294383189</p>
                </div>
                </div>
            </div>

            <div className="contact-card">
                <div className="card-icon green-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="card-info">
                    <h3>Share Your Feedback</h3>
                    <form>
                        <div className="form-group">
                            <h4 className="head">Name</h4>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <h4 className="head">Email</h4>
                            <input type="email"placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <h4 className="head">Phone Number</h4>
                            <input type="tel" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <h4 className="head">Message</h4>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
           </div>
           <div className="contact-map">
            <iframe
                title="Embedded Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114305.75875507017!2d85.20531784937316!3d26.453957264019806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ece74158ebb855%3A0x6d840292c92cce46!2sHirauta%20Dumma%2C%20Hiraunta%2C%20Bihar%20843329!5e0!3m2!1sen!2sin!4v1695649261986!5m2!1sen!2sin"
                width="100%"
                height="400"
                frameBorder="0"
                style={{border: 0}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
           </div>
        </div>
    );
};

export default ContactUsPage;

