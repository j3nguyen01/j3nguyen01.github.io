import {useNavigate} from 'react-router-dom';
import "./Experiences.css";
import React from "react";
import MainCard from './MainCard';

class Experiences extends React.Component { 

    render() { 
        return (
            <div>
                <MainCard/>
                <div class = "experience">
                    <h1 class = "exp_title1">what I am/was a part of</h1>
                    <div class = "jobs">
                        <p>
                            <b>currently @ University of California, Berkeley</b>
                            <div>computer science student,  art for animation decal facilitator, academic intern for CS10</div>
                        </p>
                        <p>
                            <b>currently @ ASUC Admin Office</b>
                            <div>webmanger who is updating website info, creating features to streamline information, and redesigning website layout and structure for a more user friendly experience</div>                        
                        </p>
                        <p>
                            <b>@ AT&T</b>
                            <div>intern who created a prediction model using K-Means Clustering and Isolation Forests to detect life cycle of various security devices and firewalls</div>
                        </p>
                        <p>
                            <b>@ Logoi</b>
                            <div>intern who developed many parts of the EdTech application including frontend accessibility, backend reconstruction, and topic modeling. </div>                      
                        </p>
                        <p>
                            <b>@ Ascend</b>
                            <div>president and officer who helped grow members’ and officers’ leadership capabilities and professional skills.</div>                       
                        </p>
                    </div>
                    <h1 class = "exp_title2">courses I really liked</h1>
                    <div class = "courses">
                        <h4 class = "course"> <b>CS 170</b>: Algorithms</h4>
                        <h4 class = "course"> <b>CS 161</b>: Computer Security</h4>
                        <h4 class = "course"> <b>CS 188</b>: Artificial Intelligence</h4>
                        <h4 class = "course"> <b>CS 164</b>: Languages and Compilers</h4>
                        <h4 class = "course"> <b>CS 186</b>: Databases</h4>
                        <h4 class = "course"> </h4>
                    </div>
                </div>
            </div>
        );
    }
}


export default Experiences