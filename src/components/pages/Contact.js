import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import ButtonMailTo from '../MailTo';

function Contact() {
    return (
        <>  
            <div className="contact">
                <div className="contact-details">
                    <div className="contact-header">
                        Contact
                    </div>
                    <div className="contact-text">
                        Ways To Connect With Me
                    </div>
                </div>
                <div className="contact-media">
                    <Link to={{ pathname: "https://www.linkedin.com/in/chrisclark90/" }} target="_blank" className="contact-links"><i class="fab fa-linkedin"/>&nbsp;LinkedIn</Link>
                    <Link to={{ pathname: "https://github.com/ChrisThinkful" }} target="_blank" className="contact-links"><i class="fab fa-github-square"/>&nbsp;GitHub</Link>
                    <ButtonMailTo mailto="mailto:chris.clark913@gmail.com" />
                </div>
            </div>
        </>
    )
}

export default Contact
