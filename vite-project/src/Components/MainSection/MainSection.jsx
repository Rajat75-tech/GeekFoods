import React from 'react';
import './MainSection.css';
import mainpg from "../../assets/photo.avif"

function MainSection() {
    return (
        <div className='container'>
            <img className='mng' src={mainpg} alt="mainPage" />
                <div className="overlay">
                    <h1 id='lf'>Let us find your</h1>
                    <h1 id='ff'>Forever Food.</h1>
                    <span className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</span>
                    <div className='butt'>
                        <button id='sn'>Search Now</button>
                        <button id='km'>Know More</button>
                    </div>
                </div>
        </div>
    );
}

export default MainSection;