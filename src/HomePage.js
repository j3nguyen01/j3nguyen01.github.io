import React from "react";
import "./HomePage.css";
import Header from './Header';
import Project from "./Project";

function HomePage() {
    const soundcloudTracks = [
        {
            title: "The Flowers Were Purple",
            artist: "MaiKhue",
            artistUrl: "https://soundcloud.com/maikhue-717374031",
            trackUrl: "https://soundcloud.com/maikhue-717374031/the-flowers-were-purple/s-FBQSJ4Am3d7",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2287297565%3Fsecret_token%3Ds-FBQSJ4Am3d7&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            title: "Wishing Tree",
            artist: "MaiKhue",
            artistUrl: "https://soundcloud.com/maikhue-717374031",
            trackUrl: "https://soundcloud.com/maikhue-717374031/wishing-tree/s-1MimcUE0Wo8",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2287297250%3Fsecret_token%3Ds-1MimcUE0Wo8&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            title: "Time2Go",
            artist: "MaiKhue",
            artistUrl: "https://soundcloud.com/maikhue-717374031",
            trackUrl: "https://soundcloud.com/maikhue-717374031/time2go/s-ng26wwX4CcX",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2287296899%3Fsecret_token%3Ds-ng26wwX4CcX&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            title: "Coincidences",
            artist: "MaiKhue",
            artistUrl: "https://soundcloud.com/maikhue-717374031",
            trackUrl: "https://soundcloud.com/maikhue-717374031/realcoincidenceideas/s-kjrmA8hAwmi",
            embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2287296692%3Fsecret_token%3Ds-kjrmA8hAwmi&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ];

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

    return(
        <div > 
            <Header />
            <h1 className="hello"> Hello World! </h1>
            <h3 className="myname"> I love music and I hope you do too! Listen below to preview some of my very own tracks :D</h3>
            <section className="soundcloud-section">
                <div className="soundcloud-embed-list">
                    {soundcloudTracks.map((track) => (
                        <div className="soundcloud-embed-wrapper" key={track.title}>
                            <iframe
                                title={`${track.title} SoundCloud embed`}
                                className="soundcloud-embed"
                                width="100%"
                                height="166"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={track.embedUrl}
                            />
                            <div className="soundcloud-credit">
                                <a href={track.artistUrl} target="_blank" rel="noreferrer">
                                    {track.artist}
                                </a>
                                <span> · </span>
                                <a href={track.trackUrl} target="_blank" rel="noreferrer">
                                    {track.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <h3 className="myname"> I'm also a Software Engineer and here are some cool projects I've done!</h3>
            <div className="proj-container-wrapper">
                <div className="proj-container">
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