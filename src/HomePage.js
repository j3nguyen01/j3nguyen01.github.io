import React from "react";
import {useNavigate} from 'react-router-dom';
import "./HomePage.css";
import github from './images/github.png';
import linkedIn from './images/linkedin.png';
import youtube from './images/youtube.png';
// import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

function HomePage() {

    const navigate = useNavigate(); 

    function selectHome() {
        navigate('/');
    }

    function selectAbout() {
        navigate('/about')
    }

    function selectExperiences() {
        navigate('/experiences')
    }

    function selectProjects() {
        navigate('/projects')
    }

    return(
        <div> 
            <h1 class = "hello"> Hello World! </h1>
            <h3 class = "myname"> I'm Khue/Jen Nguyen. Welcome to my home on the internet!</h3>
            <div class = "nav_wrapper">
                <span class = "homenav1" onClick = {selectAbout}> about me / </span>
                <span class = "homenav2" onClick = {selectExperiences}> experiences / </span>
                <span class = "homenav3" onClick = {selectProjects}> projects </span>
            </div>
            <a href="https://github.com/j3nguyen01">
                <img src={github} alt="GitHub" class = "homegit"/>
            </a>
            <a href="https://www.linkedin.com/in/khue-jen-nguyen-cal/">
                <img src={linkedIn} alt="LinkedIn" class = "homelink"/>
            </a>
            <a href="https://www.youtube.com/channel/UCrk7BJijQMSRu5RCKb1yDQg">
                <img src={youtube} alt="YouTube" class = "homeyou"/>
            </a>
        </div>
        
    );
}

export default HomePage