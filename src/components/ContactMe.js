import React from 'react';
import './ContactMe.css';
import { Link } from 'react-router-dom';
import ButtonMailTo from './MailTo';

function ContactMe() {
    return (
        <>  
            <div className="contact">
                <div className="contact-details">
                    <div className="contact-header">
                        <h2>CONTACT</h2>
                    </div>
                    <div className="contact-text">
                        Ways To Connect With Me
                    </div>
                </div>
                <p>Thank you for taking the time to visit my webpage. Like my skills with development, it is a work in progress. It will be updated with newer, more complex projects as I complete them so please revisit in the future to see the growth. </p>
                <p>Below are the links to my LinkedIn, GitHub, and a link to contact me via Email. </p>
                <div className="contact-media">
                    <Link to={{ pathname: "https://www.linkedin.com/in/chrisclark90/" }} target="_blank" className="contact-links"><i class="fab fa-linkedin"/>&nbsp;LinkedIn</Link>
                    <Link to={{ pathname: "https://github.com/ChrisThinkful" }} target="_blank" className="contact-links"><i class="fab fa-github-square"/>&nbsp;GitHub</Link>
                    <ButtonMailTo mailto="mailto:chris.clark913@gmail.com" />
                </div>
                
            </div>
            
        </>
    )
}

export default ContactMe
