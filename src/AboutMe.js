import React from "react";
import jen from './images/IMG_9225 Copy.JPG';
import "./AboutMe.css";
import Header from './Header';

function AboutMe() {
    return(
        <div>
            <Header />
            <div className="aboutme-container">
                <div className="aboutme-content">
                    <h1 className="greeting">it’s nice to meet you!</h1>
                    <div className="aboutme-text">
                        <h3 className="aboutme">
                            I'm a creator at the heart of everything I do. From building applications in Java and React, to crafting songs in FL Studio and Ableton, I love bringing ideas to life, so thank you for stumbling across my songs and my website! 
                            <br /><br />
                            I graduated from University of California, Berkeley in 2023 as a Computer Science Major and a Art, Animation, and Music Enthusiast and I have not stopped coding, creating, and watching movies since!
                        </h3>
                    </div>
                    <h1 className="experiences">my career experiences!</h1>
                    <div className="aboutme-text">
                        <h3 className="aboutme">
                            I am currently a software engineer @ AT&T working on a modernized ticketing system that supports any ticket template and automates ticket creation for all internal AT&T usage. I've previously worked on a 3D Graph visualization tool using JavaScript, React, Node.js, and Next. Additionally, I worked on developing APIs using Java, Postman, Kubernetes, and Maven for some e-commerce processes on the att.com website. 
                            <br /><br />
                            My first internship was @ Logoi, an Ed-Tech startup dedicated to bridging and leading classroom discussions. I developed a topic model that tracked the different topics in discussions, redesigned the back-end of Logoi’s web application to support real time updates using web sockets, and added accessibility features in Logoi’s front-end. 
                            <br /><br />
                            @ UC Berkeley, my love for learning and desire to share knowledge led me to become a teacher! I was an academic intern for the intro computer science class at Berkeley. To extend my programming skills, I was also the web manager at the ASUC Admin Office. 
                        </h3>
                    </div>
                </div>
                <div className="aboutme-image">
                    <img src={jen} alt="Jen" />
                </div>
            </div>
        </div>
        
    );
}

export default AboutMe;