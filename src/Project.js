import React, { useState } from 'react';
import './Project.css';

function Project({ title, languages, libraries, skills, version, details, foot, link}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`polaroid-container ${isFlipped ? 'flipped' : ''}`}>
            {isFlipped && <div className="overlay" onClick={handleFlip}></div>}
            <div className={`polaroid ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="polaroid-front">
                    <h2 className='title'>{title}</h2>
                    <p className='projectDescription'>
                        <span className='projectDescriptionTitle'>languages: </span>
                        <span className='projectDescriptionValue'>{languages}</span>
                    </p>
                    <p className='projectDescription'>
                        <span className='projectDescriptionTitle'>libraries: </span>
                        <span className='projectDescriptionValue'>{libraries}</span>
                    </p>
                    <p className='projectDescription'>
                        <span className='projectDescriptionTitle'>skills: </span>
                        <span className='projectDescriptionValue'>{skills}</span>
                    </p>
                    <p className='projectDescription'>
                        <span className='projectDescriptionTitle'>version: </span>
                        <span className='projectDescriptionValue'>{version}</span>
                    </p>
                    <p className='title'>{foot}</p>
                </div>
                <div className="polaroid-back">
                    <h2 className='title'>{title}</h2>
                    <p className='projectDetails'>{details}</p>
                    {link && <a href={link} className='projectDescription'>Check it out!</a>}
                    <p className='title'>{foot}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;