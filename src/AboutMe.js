import React, {useState, useEffect} from "react";
import jen from './images/jen.png';
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
                            I love creating, designing, and exploring artistic avenues, especially within tech--so, I’m grateful you stumbled across my little haven on the internet!
                            <br /><br />
                            I graduated from University of California, Berkeley in 2023 as a Computer Science Major and I have not stopped coding since!
                            <br /><br />
                            From API back-end development to Force Graph 3D front-end engineering, my love for coding has only grown! And I’m excited to share...
                        </h3>
                    </div>
                    <h1 className="experiences">my experiences!</h1>
                    <div className="aboutme-text">
                        <h3 className="aboutme">
                            I am currently a software engineer @ AT&T working on a 3D Graph visualization tool using JavaScript, React, Node.js, and Next. Additionally, I worked on developing APIs using Java, Postman, Kubernetes, and Maven for some e-commerce processes on the att.com website. 
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