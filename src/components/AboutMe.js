import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div className="about">
            <div className="about-details">
                <div className="about-header">
                    <h2>ABOUT</h2>
                </div>
                <div className="about-subhead">
                    Chris Clark | Full Stack Software Engineer
                </div>
                <div className="about-container">
                    {/* Make the font larger and not bold */}
                    <div className="biography"> 
                    <p>My name is Chris and I am a Dallas, TX-based Full Stack Software Engineer/Web Developer and graduate from Thinkful-Chegg's Software Engineering Immersion program. </p>
                    <p>For as long as I can remember, I have had a passion for deconstructing and rebuilding 
                        things. I would take apart remotes and toys and then put them back together. As I grew 
                        older, remotes and toys became computers and consoles. Nowadays, I find I spend a lot 
                        of my time trying to take apart or tinker with the functionality of webpages or 
                        conceptualizing different applications one could create.
			        </p>
                    <p>It is out of this curiosity that my desire to learn to program was born. Too many of my 
                        interactions with software, applications, hardware, websites, etc., had me asking, 
                        "How would I improve this?" Now, by way of Thinkful and self-study, I have learned the tools and techniques to build, 
                        amend, and deconstruct all of these things of interest to me. Working alongside 
                        others with these same interests has been one of the most rewarding aspects of this 
                        journey. Bouncing ideas off of one another, piggy-backing on one another's suggestions, 
                        and building&nbsp;
                        <Link to='/projects' className='biography-links' target='_blank'>projects</Link>
                        &nbsp;that far exceed the skillset of just one of us is one of my 
                        favorite things about this career field. I look forward to continuing this aspect 
                        in particular by becoming part of a team of Software Developers.
			        </p>
			        <p>Outside of coding, I am an avid gym-goer. My journey in the gym mirrors that which 
                        I expect my journey as a developer will be. That is to say, the more I know, and 
                        the better I get in the gym, the more aware I become about just how much I don't 
                        know and how much more I can learn. That excites me about fitness, and it excites 
                        me about programming.
			        </p>
			        <p>For you and your company, I can help design and build algorithms. I can produce 
                        efficient and elegant code to meet the requirements of you or your client. 
                        I can test and deploy programs and troubleshoot, debug, maintain,
                        and improve existing software. Finally, I will develop technical documentation 
                        for future projects.
			        </p>
                    <p>
                        If you are interested in me or my work, please visit my&nbsp;
                        <Link to='/contact'className='biography-links' target='_blank'>contact</Link>
                        &nbsp;page for the best ways to reach me.
                    </p>
                    </div>
                        <div className="certificate">
                            <img src="images/Thinkful-Cert.jpg" alt="SWE Certification" className='responsive'/>
                        </div>
                    </div>
             </div>
        </div>
    )
}

export default AboutMe
