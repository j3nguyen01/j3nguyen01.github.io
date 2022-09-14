import {useNavigate} from 'react-router-dom';
import "./Projects.css";
import React from "react";
import MainCard from './MainCard';

class Experiences extends React.Component { 

    render() { 
        return (
            <div>
                <MainCard/>
                <div class = "project">
                    <h1 class = "proj_title1">in the making! come back in a day or week :D</h1>
                </div>
            </div>
        );
    }
}


export default Experiences