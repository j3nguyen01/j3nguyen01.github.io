import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import "./HomePage.css";
import Header from './Header';
import Project from "./Project";
// import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

function HomePage() {

    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [projectsPerView, setProjectsPerView] = useState(1);
    // const [opacity, setOpacity] = useState(1);
    const projects = [
        {
            title: "fireSimulator {",
            languages: "c##",
            libraries: "Three.js, WebGL, Blender",
            skills: "fluid dynamics, fragment shaders",
            version: "5.2023",
            foot: "}",
            details: "In this project, I implemented a 2D candle fire simulation using Three.js and WebGL with a team of 4! We based our implementation on a 2D smoke simulation using Navier-Stokes equation of fluid dynamics. The basis of the simulation is an Eulerian grid which we use to keep track of relevant forces and a series of fragment shaders, namely advect, divergence, jacobi, external density, external velocity, external temperature, buoyance, and vorticity, to manipulate these forces and visualize the resulting candle fire. We also modify a candle object in Blender and brought it into the screen to complete the scene",
            link: "https://hoangcto.github.io/cs184-firesimulation/fire_sim/index.html"
        },
        {
            title: "topicModel {",
            languages: "python",
            libraries: "jupyter notebook",
            skills: "LDA, NLP, data cleaning",
            version: "3.2021",
            foot: "}",
            details: "For my first internship, I created a topic model with LDA on cleaned reddit dataset to predict topics within a conversation or discussion. I found a total of 10 distinct topic groups and developed corpus for each topic."
        },
        {
            title: "forceGraph3D {",
            languages: "Javascript",
            libraries: "React, Node, Next",
            skills: "3D visualization, graph theory",
            version: "8.2024",
            foot: "}",
            details: "At AT&T, I am currently building a 3D graph visualization tool that allows users to render all AT&T apps and their respective relationships. Each node represents the app and has arrows connecting to other apps that it interacts with. The graph is rendered in 3D space and users can rotate the graph to view the relationships from different angles. The graph is also interactive and users can click on a node to view more information about the app."
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 900) {
                setProjectsPerView(3);
            } else if (window.innerWidth >= 600) {
                setProjectsPerView(2);
            } else {
                setProjectsPerView(1);
            }
        };
        // const handleScroll = () => {
        //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //     const maxScroll = 100; // Adjust this value as needed
        //     const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
        //     setOpacity(newOpacity);
        // };

        window.addEventListener('resize', handleResize);
        // window.addEventListener('scroll', handleScroll);
        handleResize(); // Initial call to set the correct number of projects per view

        return () => {
            window.removeEventListener('resize', handleResize);
            // window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div> 
            <Header />
            {/* <h1 class = "hello" style={{ opacity }}> Hello World! </h1> */}
            <h1 class = "hello"> Hello World! </h1>
            <h3 class = "myname"> My name is Mai Khue Nguyen and here are some cool projects I've done!</h3>
            <div className="proj-container-wrapper">
                {/* <button className="arrow arrow-left" onClick={handlePrev}>&lt;</button> */}
                <div className="proj-container" style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}>
                    {projects.map((project, index) => (
                        <div className="proj" key={index}>
                            <Project 
                                title={project.title} 
                                languages={project.languages}
                                libraries={project.libraries}
                                skills={project.skills}
                                version={project.version}
                                foot={project.foot}
                                details={project.details}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
                {/* <button className="arrow arrow-right" onClick={handleNext}>&gt;</button> */}
            </div>
        </div>
        
    );
}

export default HomePage