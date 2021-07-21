import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import MailTo from '../MailTo';

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
                    <Link to='https://www.linkedin.com/in/chrisclark90/' className="contact-links"><i class="fab fa-linkedin"/>&nbsp;LinkedIn</Link>
                    <Link to='https://github.com/ChrisThinkful' className="contact-links"><i class="fab fa-github-square"/>&nbsp;GitHub</Link>
                    <Mailto mailto="mailto:chris.clark913@gmail.com" />
                </div>
            </div>
        </>
    )
}

export default Contact
