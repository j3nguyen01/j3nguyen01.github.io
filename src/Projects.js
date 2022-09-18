import {useNavigate} from 'react-router-dom';
import "./Projects.css";
import React from "react";
import MainCard from './MainCard';
import files from './proj_images/files.png';
import matrix from './proj_images/matrix.png';
import topic from './proj_images/topic.png';
import websocket from './proj_images/websocket.png';


class Experiences extends React.Component { 

    render() { 
        return (
            <div>
                <MainCard/>
                <div class = "project">
                    <h1 class = "proj_title1">some code I've written</h1>
                    <div class = "CS_projects">
                        <div class = "rectangle-polaroid">
                            <div class = "text_container">
                                {/* <img src={files} class = "files"/>  */}
                                <text class = "bigtext">File Sharing System</text>
                                <text class = "smalltext">
                                Used multiple encryption implementations to create file sharing system that was secure. Implemented 8
                                functions (InitUser, GetUser, StoreFile, AppendFile, LoadFile,
                                ShareFile, ReceiveFile, and RevokeFile) with thorough test suite to cover use cases and attacks.
                                </text>                            
                            </div>
                        </div>
                        <div class = "rectangle-polaroid">
                            {/* <div>
                                <img src={matrix} class = "matrix"/>
                            </div> */}
                            <div class = "text_container">
                                <text class = "bigtext">NumC Linear Algebra Library</text>
                                <text class = "smalltext">
                                Created a NumPy linear algebra library clone using a Python API with mathematical operations and functions performed in C 
                                and imporved matrix operation using parallelism with methods such as OpenMP and Intel SIMD Intrinsics.
                                </text>
                            </div>
                        </div>
                        <div class = "rectangle-polaroid">
                            <div class = "text_container">
                                {/* <img src={topic} class = "topic"/> */}
                                <text class = "bigtext">NLP Topic Model</text>
                                <text class = "smalltext">
                                Created topic model with LDA on cleaned reddit dataset to predict topics within a conversation or discussion.      
                                Found total of 10 distinct topic groups and developed corpus for each topic.                       
                                </text>
                            </div>
                        </div>
                    </div>
                    <h1 class = "proj_title1">some silly videos I made</h1>
                    <div class = "vid1">
                        <iframe width="281" height="194" src="https://www.youtube.com/embed/27bPslpN-0k" title="Ghoast" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="281" height="194" src="https://www.youtube.com/embed/kxbwBgSoUoI" title="FIRST VLOG yay! uwow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <a href="https://broadleaf-kilogram-08e.notion.site/Keyboard-Specs-e120d983ec334de9be8437b33964b7e7">
                    <h1 class = "key">my keyboard mod</h1>
                    </a>
                </div>
            </div>
        );
    }
}


export default Experiences