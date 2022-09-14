import {useNavigate} from 'react-router-dom';
import "./MainCard.css";
import React from 'react';
import github from './images/github.png';
import linkedIn from './images/linkedin.png';
import youtube from './images/youtube.png';
import me from './images/me.png';

function MainCard() {

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

    return (
        <div class = "CardContainer"> 
            <img src={me} alt="KhueNguyen" class = "navme" onClick = {selectHome}/>
            <h1 class = "navname" onClick = {selectHome}>Khue/Jen Nguyen</h1> 
            {/* make name nav to home  */}
            <div class = "nav">
                <span class = "nav1" onClick = {selectAbout}> about me / </span>
                <span class = "nav2"onClick = {selectExperiences}> experiences / </span>
                <span class = "nav3" onClick = {selectProjects}> projects </span>
            </div>
            <a href="https://github.com/j3nguyen01">
                <img src={github} alt="GitHub" class = "navgit"/>
            </a>
            <a href="https://www.linkedin.com/in/khue-jen-nguyen-cal/">
                <img src={linkedIn} alt="LinkedIn" class = "navlink"/>
            </a>
            <a href="https://www.youtube.com/channel/UCrk7BJijQMSRu5RCKb1yDQg">
                <img src={youtube} alt="YouTube" class = "navyou"/>
            </a>
        </div>
    );
}

// class MainCard extends React.Component { 

//     render() { 
//         return (
//             <div class = "CardContainer"> 
//                 <img src={me} alt="KhueNguyen" class = "navme"/>
//                 <h1 class = "navname">Khue Nguyen</h1> 
//                 {/* make name nav to home  */}
//                 <div class = "nav">
//                     <span class = "nav1"> about me / </span>
//                     <span class = "nav2"> experiences / </span>
//                     <span class = "nav3"> projects </span>
//                 </div>
//                 <a href="https://github.com/j3nguyen01">
//                     <img src={github} alt="GitHub" class = "navgit"/>
//                 </a>
//                 <a href="https://www.linkedin.com/in/khue-jen-nguyen-cal/">
//                     <img src={linkedIn} alt="LinkedIn" class = "navlink"/>
//                 </a>
//                 <a href="https://www.youtube.com/channel/UCrk7BJijQMSRu5RCKb1yDQg">
//                     <img src={youtube} alt="YouTube" class = "navyou"/>
//                 </a>
//             </div>
//         );
//     }
// }


export default MainCard