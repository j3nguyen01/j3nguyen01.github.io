import {useNavigate} from 'react-router-dom';
import "./About.css";
import React from "react";
import MainCard from './MainCard';

class About extends React.Component { 

    render() { 
        return (
            <div>
                <MainCard/>
                <div class = "about">
                    <h1 class = "meet">it’s nice to meet you!</h1>
                    <div class = "texts">
                        <p class = "text">
                        At the very heart of it, I am someone who <b>creates</b> and values balance. 
                        Throughout my career as a student, I always pursued multiple outlets for myself to introduce new skills, projects, and teammates. 
                        This has shaped me into becoming a very rounded programmer that has a multitude of tools at her disposal. 
                        Outside of my core academic classes, I made sure to accompany them with three other avenues: something that would inspire me <b>professionally</b>, <b>personally</b>, and <b>physically</b>. 
                        I became a teacher for an animation class, a teammate, a leader, a president of a finance and business club, an organizer, a web manager, a competitive volleyball player, a keyboard maker, an artist, a filmmaker, and of course, a software engineer. 
                        </p>
                        <p class = "text">
                        Because of this, I love to take on <b>challenges</b> and <b>new problems</b>–ones I may not understand right away or have to develop new skills for. 
                        The unknown does not scare me as much and as long as I am able to create solutions and products, I will find the work that I do meaningful. 
                        I truly enjoy the <b>process of learning</b> something new and hope I can continue to do so wherever I go with a team that is supportive and enthusiastic. 
                        </p>
                        <p class = "text">
                        At the end of the day, I will constantly try my best to grow my potential in every field. 
                        In a few years, I hope to see myself tackling issues in an environment filled with people who are eager to learn and passionate about <b>creating something together</b> while pursuing personal projects that enrich my knowledge and skill set. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About