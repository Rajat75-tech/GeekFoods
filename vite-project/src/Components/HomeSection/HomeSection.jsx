import React from 'react';
import './HomeSection.css';
import midpg from "../../assets/photo1.avif"

function HomeSection() {
    return (
        <div className='container1'>
            <img className='mdg' src={midpg} alt="" />
            <div className='content'>
                <div className='cont'>
                    <h2 className='lo'>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. Tempore, <br /> debitis.</h2>
                    <p className='lom'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! <br />Quidem est esse numquam odio deleniti, beatae, magni dolores provident <br />quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                    </p>
                    <button className='git'>Get in Touch</button>
                </div>
            </div>
      </div>
    );
}

export default HomeSection;